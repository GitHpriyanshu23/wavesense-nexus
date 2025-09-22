import { AuthorityCard } from "@/components/ui/authority-card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { 
  Map,
  Layers,
  Filter,
  Maximize2,
  MapPin,
  AlertCircle,
  Navigation
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

const mapLayers = [
  { id: "incidents", label: "Active Incidents", enabled: true },
  { id: "weather", label: "Weather Overlay", enabled: true },
  { id: "traffic", label: "Traffic Conditions", enabled: false },
  { id: "flood", label: "Flood Zones", enabled: true },
  { id: "infrastructure", label: "Critical Infrastructure", enabled: false },
  { id: "resources", label: "Emergency Resources", enabled: true },
]

const activeIncidents = [
  { id: 1, type: "Flood", location: "Coastal Road", severity: "critical", time: "2m ago" },
  { id: 2, type: "Accident", location: "Highway 101", severity: "high", time: "8m ago" },
  { id: 3, type: "Debris", location: "Main Street", severity: "medium", time: "15m ago" },
]

export function MapView() {
  const [layers, setLayers] = useState(mapLayers)

  const toggleLayer = (layerId: string) => {
    setLayers(layers.map(layer => 
      layer.id === layerId ? { ...layer, enabled: !layer.enabled } : layer
    ))
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Main Map Area */}
      <div className="lg:col-span-2">
        <AuthorityCard 
          title="Live Monitoring Map"
          icon={<Map className="h-5 w-5 text-primary" />}
          variant="elevated"
          className="h-[600px]"
        >
          <div className="relative h-full">
            {/* Map placeholder with heatmap visualization */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-muted/20 to-muted/5 border border-border/50 overflow-hidden">
              {/* Simulated map interface */}
              <div className="absolute inset-4 rounded-lg bg-gradient-heatmap opacity-20"></div>
              
              {/* Incident markers */}
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center w-6 h-6 bg-critical rounded-full animate-pulse-glow shadow-glow-critical">
                  <AlertCircle className="h-4 w-4 text-critical-foreground" />
                </div>
              </div>
              
              <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center w-6 h-6 bg-high rounded-full">
                  <MapPin className="h-4 w-4 text-high-foreground" />
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex items-center justify-center w-6 h-6 bg-medium rounded-full">
                  <Navigation className="h-4 w-4 text-medium-foreground" />
                </div>
              </div>

              {/* Map overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-card/80 backdrop-blur rounded-lg border border-border/50">
                  <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map View</h3>
                  <p className="text-sm text-muted-foreground mb-4">Real-time incident tracking and resource deployment</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-critical rounded-full animate-pulse"></div>
                    <span>Live Updates Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="sm">
                    <Layers className="h-4 w-4 mr-2" />
                    Layers
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Map Layers</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {layers.map((layer) => (
                    <DropdownMenuCheckboxItem
                      key={layer.id}
                      checked={layer.enabled}
                      onCheckedChange={() => toggleLayer(layer.id)}
                    >
                      {layer.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="secondary" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <Button variant="secondary" size="sm">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg p-3 border border-border/50">
              <h4 className="text-xs font-semibold text-foreground mb-2">Severity Levels</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-critical rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-high rounded-full"></div>
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-medium rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-low rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Low</span>
                </div>
              </div>
            </div>
          </div>
        </AuthorityCard>
      </div>

      {/* Incident Feed */}
      <div className="space-y-4">
        <AuthorityCard 
          title="Active Incidents"
          icon={<AlertCircle className="h-5 w-5 text-warning" />}
          variant="elevated"
        >
          <div className="space-y-4">
            {activeIncidents.map((incident) => (
              <div
                key={incident.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <StatusBadge variant={incident.severity as any}>
                      {incident.severity.toUpperCase()}
                    </StatusBadge>
                    <span className="text-xs text-muted-foreground">{incident.time}</span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{incident.type}</h4>
                  <p className="text-xs text-muted-foreground">{incident.location}</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              View All Incidents
            </Button>
          </div>
        </AuthorityCard>
      </div>
    </div>
  )
}