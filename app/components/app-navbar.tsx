'use client'

import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon, BellIcon } from "lucide-react"
import { Button } from "./ui/button"
import { NavUser } from "./nav-user"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SidebarTrigger } from "./ui/sidebar"

function getPageTitle(path: string) {
    const map: { [key: string]: string } = {
        "/dashboard": "Dashboard",
        "/transactions": "Transactions",
        "/documents": "Documents",
        "/categories": "Categories",
        "/accounts": "Accounts",
        "/repots": "Repots",
        "/budget": "Budget",
        "/settings": "Settings",
    }
  
    return map[path] || "Page"
}

export function AppNavbar() {
    const { setTheme, theme } = useTheme()
    const pathname = usePathname()
    const supabase = createClientComponentClient()
    const [user, setUser] = useState<{ name?: string; email?: string; avatarUrl?: string} | null>(null)
    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (data?.user) {
                setUser({
                    name: data.user.user_metadata?.name ?? "User",
                    email: data.user.email ?? "@.com",
                    avatarUrl: data.user.user_metadata?.avatar_url ?? undefined
                })
            }
        }
        getUser()
    }, [supabase])

    return (
        <div className="w-full flex items-center justify-between bg-background px-4 py-2">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="w-auto"/>
                <div className="w-px h-5 bg-border" />
                <span className="text-sm font-medium text-foreground">{getPageTitle(pathname)}</span>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                <BellIcon className="w-5 h-5" />
                </Button>

                <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </Button>

                {user && <NavUser user={user} />}
            </div>
        </div>
    )
}