"use client"

import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const defaultBarData = [
    { name: "Jan", income: 3000000, expense: 2500000 },
    { name: "Feb", income: 3500000, expense: 2700000 },
    { name: "Mar", income: 4000000, expense: 3200000 },
]

const defaultPieData = [
    { name: "Makan", value: 1500000 },
    { name: "Transport", value: 1000000 },
    { name: "Hiburan", value: 500000 },
]

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"]

type ChartCardProps = {
    title: string
    type?: "barChart" | "lineChart" | "pieChart"
    barData?: typeof defaultBarData
    pieData?: typeof defaultPieData
}

export function ChartCard({
    title,
    type = "barChart",
    barData,
    pieData,
}: ChartCardProps) {
    const bar = barData || defaultBarData
    const pie = pieData || defaultPieData

    return (
        <Card className="shadow-sm">
        <CardHeader>
            <CardTitle className="text-sm">{title}</CardTitle>
        </CardHeader>

        <CardContent className="h-48">
            {type === "barChart" && (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(v: number) => `Rp ${v.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="income" fill="#22c55e" name="Pemasukan" />
                <Bar dataKey="expense" fill="#ef4444" name="Pengeluaran" />
                </BarChart>
            </ResponsiveContainer>
            )}

            {type === "lineChart" && (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(v: number) => `Rp ${v.toLocaleString()}`} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#22c55e"
                    name="Pemasukan"
                />
                <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#ef4444"
                    name="Pengeluaran"
                />
                </LineChart>
            </ResponsiveContainer>
            )}

            {type === "pieChart" && (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                    data={pie}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={70}
                    label
                >
                    {pie.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                    ))}
                </Pie>
                <Tooltip formatter={(v: number) => `Rp ${v.toLocaleString()}`} />
                </PieChart>
            </ResponsiveContainer>
            )}
        </CardContent>
        </Card>
    )
}
