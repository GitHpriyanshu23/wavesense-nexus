import { AuthorityCard } from "@/components/ui/authority-card"
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts"

const weeklyData = [
  { day: "Mon", incidents: 8, resolved: 6 },
  { day: "Tue", incidents: 12, resolved: 10 },
  { day: "Wed", incidents: 15, resolved: 14 },
  { day: "Thu", incidents: 9, resolved: 8 },
  { day: "Fri", incidents: 18, resolved: 16 },
  { day: "Sat", incidents: 22, resolved: 19 },
  { day: "Sun", incidents: 14, resolved: 13 },
]

const incidentTypes = [
  { name: "Flooding", value: 35, color: "hsl(var(--critical))" },
  { name: "Traffic", value: 25, color: "hsl(var(--warning))" },
  { name: "Infrastructure", value: 20, color: "hsl(var(--info))" },
  { name: "Weather", value: 15, color: "hsl(var(--success))" },
  { name: "Other", value: 5, color: "hsl(var(--muted))" },
]

const responseMetrics = [
  { metric: "Avg Response Time", value: "4.2 min", trend: "↓ 12%" },
  { metric: "Resolution Rate", value: "87%", trend: "↑ 5%" },
  { metric: "Team Efficiency", value: "92%", trend: "↑ 3%" },
  { metric: "Citizen Satisfaction", value: "4.7/5", trend: "↑ 0.2" },
]

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Response Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {responseMetrics.map((metric, index) => (
          <AuthorityCard 
            key={index} 
            variant="elevated"
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{metric.metric}</p>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className="text-sm font-medium text-success">{metric.trend}</span>
              </div>
            </div>
          </AuthorityCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Trend */}
        <AuthorityCard 
          title="Weekly Incident Trends"
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
          variant="elevated"
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="day" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="incidents" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={3}
                  name="New Incidents"
                />
                <Line 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={3}
                  name="Resolved"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AuthorityCard>

        {/* Incident Distribution */}
        <AuthorityCard 
          title="Incident Types Distribution"
          icon={<PieChart className="h-5 w-5 text-primary" />}
          variant="elevated"
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={incidentTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {incidentTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))"
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {incidentTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-sm text-muted-foreground">{type.name}</span>
                <span className="text-sm font-medium text-foreground ml-auto">{type.value}%</span>
              </div>
            ))}
          </div>
        </AuthorityCard>
      </div>

      {/* Resource Utilization */}
      <AuthorityCard 
        title="Resource Utilization"
        icon={<BarChart3 className="h-5 w-5 text-primary" />}
        variant="elevated"
      >
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[
              { resource: "Rescue Teams", utilization: 75, capacity: 100 },
              { resource: "Ambulances", utilization: 60, capacity: 100 },
              { resource: "Fire Trucks", utilization: 45, capacity: 100 },
              { resource: "Boats", utilization: 90, capacity: 100 },
              { resource: "Shelters", utilization: 35, capacity: 100 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="resource" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))"
                }}
              />
              <Bar 
                dataKey="utilization" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </AuthorityCard>
    </div>
  )
}