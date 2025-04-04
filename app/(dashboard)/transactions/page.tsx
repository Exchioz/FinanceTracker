import { TransactionsTable } from "@/components/table-transactions";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Transactions</h2>
        {/* Tombol tambah (jika ada) */}
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition">
          + Tambah Transaksi
        </button>
      </div>

      <TransactionsTable />
    </div>
  )
}
