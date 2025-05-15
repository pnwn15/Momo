import SiloTank from "./Silo";
import { ChevronRight } from "lucide-react";

interface PrettySiloCardProps {
  id: string;
  range: string;
  percent: number;
}

export default function PrettySiloCard({
  id,
  range,
  percent,
}: PrettySiloCardProps) {
  return (
    <div className="max-w-xs w-full h-[220px] mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition p-0 overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b">
        <div className="text-sm font-semibold text-gray-700">{id}</div>
        <button className="p-1 rounded-full hover:bg-gray-200">
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* range badge */}
      <div className="px-4 py-1">
        <span className="text-xs text-gray-500">{range}</span>
      </div>

      {/* content */}
      <div className="flex gap-8  px-4 items-center my-auto">
        <div className="pt-4 border rounded-b-full">
          <SiloTank percent={percent} />
        </div>
        <div className="gap-3 w-full flex flex-col ">
          <StatLabel label="Temp" value="-- °C" />
          <StatLabel label="Humidity" value="-- %" />
          <StatLabel label="Depth" value={`${(percent / 100) * 10} m`} />
          <StatLabel label="Weight" value="0.00 T" />
        </div>
      </div>
    </div>
  );
}

function StatLabel({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between w-full text-sm">
      <span className="text-gray-600">{label}:</span>
      <span className="ml-auto font-medium text-gray-800">{value}</span>
    </div>
  );
}
