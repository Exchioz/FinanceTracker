import { List, Home, Tags, Wallet, BarChart, DollarSign, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", icon: Home, url: "/dashboard" },
  { title: "Transactions", icon: List, url: "/transactions" },
  { title: "Categories", icon: Tags, url: "/categories" },
  { title: "Accounts", icon: Wallet, url: "/accounts" },
  { title: "Reports", icon: BarChart, url: "/reports" },
  { title: "Budgets", icon: DollarSign, url: "/budgets" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="px-4 py-6 text-lg font-bold">Finance Tracker</div>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-[10px] text-muted-foreground px-3">v1.0.0</p>
      </SidebarFooter>
    </Sidebar>
  )
}
