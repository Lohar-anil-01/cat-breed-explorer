export default function Rating({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          className="h-3 bg-emerald-500 rounded-full"
          style={{ width: `${value * 20}%` }}
        />
      </div>
    </div>
  );
}
