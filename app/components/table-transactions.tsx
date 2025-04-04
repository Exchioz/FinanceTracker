"use client"

import { TransactionRow } from "./row-transactions"


const dummyTransactions = [
    {
        id: 1,
        name: "Makan Siang",
        date: "2025-04-01",
        category: "Makanan",
        amount: -50000,
    },
    {
        id: 2,
        name: "Gaji",
        date: "2025-04-01",
        category: "Pemasukan",
        amount: 3000000,
    },
    {
        id: 3,
        name: "Transport",
        date: "2025-04-02",
        category: "Transportasi",
        amount: -150000,
    },
]

export function TransactionsTable() {
    return (
        <div className="overflow-auto rounded-lg border bg-white dark:bg-card shadow-sm">
        <table className="w-full table-auto text-sm">
            <thead className="bg-muted/40">
            <tr className="text-left">
                <th className="p-3 font-medium">Tanggal</th>
                <th className="p-3 font-medium">Nama</th>
                <th className="p-3 font-medium">Kategori</th>
                <th className="p-3 font-medium text-right">Jumlah</th>
                <th className="p-3 font-medium text-right">Aksi</th>
            </tr>
            </thead>
            <tbody>
            {dummyTransactions.map((tx) => (
                <TransactionRow key={tx.id} transaction={tx} />
            ))}
            </tbody>
        </table>
        </div>
    )
}
