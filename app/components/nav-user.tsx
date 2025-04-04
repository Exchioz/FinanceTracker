'use client'

import {
    BellIcon,
    CreditCardIcon,
    LogOutIcon,
    UserCircleIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavUserProps {
    user: {
        name?: string
        email?: string
        avatarUrl?: string
    }
}

export function NavUser({ user }: NavUserProps) {
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
            <Avatar className="h-8 w-8 rounded-lg grayscale">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                {(user.name ?? "?").charAt(0)}
                </AvatarFallback>
            </Avatar>
            </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 rounded-lg" align="end">
            <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-3 py-2 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                    {(user.name ?? "?").charAt(0)}
                </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                </p>
                </div>
            </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
            <DropdownMenuItem>
                <UserCircleIcon className="mr-2 h-4 w-4" />
                Account
            </DropdownMenuItem>
            <DropdownMenuItem>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
                <BellIcon className="mr-2 h-4 w-4" />
                Notifications
            </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
                >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}
