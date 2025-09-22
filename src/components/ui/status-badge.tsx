import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-smooth",
  {
    variants: {
      variant: {
        critical: "bg-critical text-critical-foreground shadow-glow-critical animate-pulse-glow",
        high: "bg-high text-high-foreground",
        medium: "bg-medium text-medium-foreground",
        low: "bg-low text-low-foreground",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        default: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  children: React.ReactNode
}

function StatusBadge({ className, variant, children, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(statusBadgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { StatusBadge, statusBadgeVariants }