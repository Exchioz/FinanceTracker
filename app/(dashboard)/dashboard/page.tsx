import { AssetsCard } from "@/components/card-asset"
import { ChartCard } from "@/components/card-chart"
import { SummaryCard } from "@/components/card-summary"
import { TransactionCard } from "@/components/card-transaction"
import {
    ArrowDownCircle,
    ArrowUpCircle,
    Banknote,
    Wallet
} from "lucide-react"

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <SummaryCard
                title="Total Saldo"
                icon={<Wallet className="w-5 h-5 text-muted-foreground" />}
                amount="Rp 12.450.000"
                />
                <SummaryCard
                title="Pemasukan Bulan Ini"
                icon={<ArrowDownCircle className="w-5 h-5 text-green-500" />}
                amount="Rp 4.200.000"
                />
                <SummaryCard
                title="Pengeluaran Bulan Ini"
                icon={<ArrowUpCircle className="w-5 h-5 text-red-500" />}
                amount="Rp 3.150.000"
                />
                <SummaryCard
                title="Selisih"
                icon={<Banknote className="w-5 h-5 text-yellow-500" />}
                amount="Rp 1.050.000"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ChartCard title="Grafik Pengeluaran vs Pemasukan" type="barChart" />
                <ChartCard title="Distribusi Pengeluaran" type="pieChart" />
            </div>

            {/* Transactions and Accounts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <TransactionCard />
                <AssetsCard />
            </div>
            </div>
    )
}