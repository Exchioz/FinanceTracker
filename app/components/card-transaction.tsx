export function TransactionCard() {
    return (
      <div className="border rounded-xl p-4 bg-card shadow-sm">
        <h3 className="font-medium text-sm mb-2">Transaksi Terbaru</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Makan Siang</span>
            <span className="text-red-500">-Rp 50.000</span>
          </li>
          <li className="flex justify-between">
            <span>Gaji</span>
            <span className="text-green-500">+Rp 3.000.000</span>
          </li>
          <li className="flex justify-between">
            <span>Transport</span>
            <span className="text-red-500">-Rp 150.000</span>
          </li>
        </ul>
      </div>
    )
}
  