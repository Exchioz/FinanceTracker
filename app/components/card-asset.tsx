export function AssetsCard() {
    return (
      <div className="border rounded-xl p-4 bg-card shadow-sm">
        <h3 className="font-medium text-sm mb-2">Aset & Rekening</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Bank BCA</span>
            <span>Rp 7.000.000</span>
          </li>
          <li className="flex justify-between">
            <span>Gopay</span>
            <span>Rp 1.200.000</span>
          </li>
          <li className="flex justify-between">
            <span>Cash</span>
            <span>Rp 4.250.000</span>
          </li>
        </ul>
      </div>
    )
}
