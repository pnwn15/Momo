import { Card, CardContent } from "@/components/ui/card";
import { LineChart, PieChart, BarChart } from "@/components/charts";

export default function EcommerceDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      
      {/* Welcome Card */}
      <Card className="col-span-2 lg:col-span-4 flex items-center justify-between p-4 bg-blue-50">
        <div>
          <h2 className="text-xl font-semibold">Welcome back Mathew Anderson!</h2>
          <p className="text-2xl font-bold mt-2">$2,340 <span className="text-green-500">↑</span></p>
          <p className="text-sm text-gray-500">Today's Sales</p>
        </div>
        <img src="/illustrations/dashboard-user.png" alt="user" className="w-32 h-32" />
      </Card>

      {/* Summary Cards */}
      <Card>
        <CardContent>
          <p className="text-sm text-gray-500">Expense</p>
          <h3 className="text-xl font-bold">$10,230</h3>
          <PieChart data={...} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p className="text-sm text-gray-500">Sales</p>
          <h3 className="text-xl font-bold">$65,432</h3>
          <BarChart data={...} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p className="text-sm text-gray-500">Sales</p>
          <h3 className="text-xl font-bold">$16.5k</h3>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p className="text-sm text-gray-500">Growth</p>
          <h3 className="text-xl font-bold text-green-500">24% ↑</h3>
          <LineChart data={...} />
        </CardContent>
      </Card>

      {/* Revenue Updates */}
      <Card className="col-span-2">
        <CardContent>
          <h4 className="text-lg font-semibold mb-2">Revenue Updates</h4>
          <BarChart data={...} labels={["Jan", "Feb", "Mar", "Apr", "May"]} />
        </CardContent>
      </Card>

      {/* Sales Overview */}
      <Card>
        <CardContent className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2">Sales Overview</h4>
          <PieChart value={500458} />
          <div className="flex justify-between w-full mt-4">
            <span>Profit: $23,450</span>
            <span>Expense: $23,450</span>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Earnings */}
      <Card>
        <CardContent>
          <h4 className="text-sm text-gray-500">Monthly Earnings</h4>
          <h3 className="text-xl font-bold">$6,820 <span className="text-green-500">+9%</span></h3>
          <LineChart data={...} />
        </CardContent>
      </Card>
    </div>
  );
}
