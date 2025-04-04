type Transaction = {
    id: number
    name: string
    date: string
    category: string
    amount: number
}
  
export function TransactionRow({ transaction }: { transaction: Transaction }) {
    const isIncome = transaction.amount > 0
  
    return (
        <tr className="border-t">
            <td className="p-3">{new Date(transaction.date).toLocaleDateString("id-ID")}</td>
            <td className="p-3">{transaction.name}</td>
            <td className="p-3">{transaction.category}</td>
            <td className="p-3 text-right font-medium">
            <span className={isIncome ? "text-green-500" : "text-red-500"}>
                {isIncome ? "+" : "-"}Rp {Math.abs(transaction.amount).toLocaleString("id-ID")}
            </span>
            </td>
            <td className="p-3 text-right space-x-2">
            <button className="text-xs text-blue-600 hover:underline">Edit</button>
            <button className="text-xs text-red-600 hover:underline">Hapus</button>
            </td>
        </tr>
    )
}
  