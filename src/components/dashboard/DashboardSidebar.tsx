import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { 
  Shield,
  Map,
  Activity,
  Users,
  Bell,
  Settings,
  BarChart3,
  Radio,
  Search,
  Waves
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Activity, description: "Overview & Status" },
  { title: "Live Map", url: "/map", icon: Map, description: "Real-time Monitoring" },
  { title: "Incidents", url: "/incidents", icon: Radio, description: "Active Reports" },
  { title: "Analytics", url: "/analytics", icon: BarChart3, description: "Trends & Insights" },
  { title: "Resources", url: "/resources", icon: Shield, description: "Emergency Services" },
  { title: "Citizens", url: "/citizens", icon: Users, description: "Engagement Data" },
  { title: "Alerts", url: "/alerts", icon: Bell, description: "Notifications" },
  { title: "Search", url: "/search", icon: Search, description: "Find Incidents" },
  { title: "Settings", url: "/settings", icon: Settings, description: "Configuration" },
]

export function DashboardSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true
    if (path !== "/" && currentPath.startsWith(path)) return true
    return false
  }

  return (
    <Sidebar className="border-sidebar-border w-64 fixed left-0 top-0 h-full z-10">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Waves className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-sidebar-foreground">WaveSense</h2>
            <p className="text-xs text-sidebar-foreground/60">Authority Portal</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-authority group",
                          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          isActive && "bg-sidebar-primary text-sidebar-primary-foreground shadow-authority"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium truncate">{item.title}</span>
                        <span className="text-xs opacity-60 truncate">{item.description}</span>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}