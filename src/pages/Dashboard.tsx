import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StatsGrid } from "@/components/dashboard/StatsGrid"
import { MapView } from "@/components/dashboard/MapView"
import { Analytics } from "@/components/dashboard/Analytics"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        title="WaveSense Authority Dashboard"
        subtitle="Real-time coastal hazard monitoring and emergency response coordination"
      />
      
      <main className="flex-1 space-y-6 p-6">
        {/* Key Statistics */}
        <StatsGrid />
        
        {/* Main Map and Incident Feed */}
        <MapView />
        
        {/* Analytics Section */}
        <Analytics />
      </main>
    </div>
  )
}

export default Dashboard