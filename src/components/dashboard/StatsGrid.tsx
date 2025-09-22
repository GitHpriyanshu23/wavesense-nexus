import { AuthorityCard } from "@/components/ui/authority-card"
import { StatusBadge } from "@/components/ui/status-badge"
import { 
  AlertTriangle, 
  Shield, 
  Users, 
  Activity,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react"

const stats = [
  {
    title: "Active Incidents",
    value: "12",
    change: "+3",
    changeType: "increase" as const,
    icon: <AlertTriangle className="h-5 w-5 text-warning" />,
    status: "high" as const
  },
  {
    title: "Response Teams",
    value: "8",
    change: "Available",
    changeType: "stable" as const,
    icon: <Shield className="h-5 w-5 text-success" />,
    status: "success" as const
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+127",
    changeType: "increase" as const,
    icon: <Users className="h-5 w-5 text-info" />,
    status: "info" as const
  },
  {
    title: "System Status",
    value: "Operational",
    change: "99.9%",
    changeType: "stable" as const,
    icon: <Activity className="h-5 w-5 text-success" />,
    status: "success" as const
  },
]

export function StatsGrid() {
  const getTrendIcon = (changeType: string) => {
    switch (changeType) {
      case "increase":
        return <TrendingUp className="h-4 w-4 text-success" />
      case "decrease":
        return <TrendingDown className="h-4 w-4 text-destructive" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <AuthorityCard 
          key={index} 
          variant="elevated"
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {stat.icon}
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <StatusBadge variant={stat.status}>
                {stat.status.toUpperCase()}
              </StatusBadge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                {getTrendIcon(stat.changeType)}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        </AuthorityCard>
      ))}
    </div>
  )
}