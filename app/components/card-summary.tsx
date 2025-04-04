type SummaryCardProps = {
    title: string
    icon: React.ReactNode
    amount: string
}
  
export function SummaryCard({ title, icon, amount }: SummaryCardProps) {
    return (
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xl font-semibold">{amount}</p>
            </div>
            <div className="rounded-full bg-muted p-2">
            {icon}
            </div>
        </div>
    )
}
  