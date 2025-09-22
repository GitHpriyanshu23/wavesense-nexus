import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cva, type VariantProps } from "class-variance-authority"

const authorityCardVariants = cva(
  "transition-authority hover:shadow-elevated border-border/50 bg-gradient-surface",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-authority",
        critical: "border-critical/30 shadow-critical",
        interactive: "hover:scale-[1.02] cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AuthorityCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof authorityCardVariants> {
  title?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

function AuthorityCard({ 
  className, 
  variant, 
  title, 
  icon, 
  children, 
  ...props 
}: AuthorityCardProps) {
  return (
    <Card className={cn(authorityCardVariants({ variant }), className)} {...props}>
      {(title || icon) && (
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={title || icon ? "pt-0" : ""}>
        {children}
      </CardContent>
    </Card>
  )
}

export { AuthorityCard, authorityCardVariants }