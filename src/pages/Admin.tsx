
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, LogOut, Search, Crown } from "lucide-react";

const Admin = () => {
  // Sample data
  const summaryData = {
    totalPointsIssued: 12500,
    totalPointsRedeemed: 7800,
    totalActiveUsers: 275
  };

  const leaderboardData = [
    { id: "user123", points: 1800, rank: 1 },
    { id: "user456", points: 1650, rank: 2 },
    { id: "user789", points: 1450, rank: 3 },
    { id: "user234", points: 1380, rank: 4 },
    { id: "user567", points: 1320, rank: 5 },
  ];

  const redemptionData = [
    { name: "Food Coupons", value: 40 },
    { name: "Transport Passes", value: 30 },
    { name: "Hygiene Kits", value: 30 }
  ];

  const tasksData = [
    { name: "Microjobs", completed: 350 },
    { name: "Safety Reports", completed: 280 },
    { name: "Health Checkups", completed: 175 },
  ];

  const pointsTimeData = [
    { week: "Week 1", earned: 1200, redeemed: 800 },
    { week: "Week 2", earned: 1400, redeemed: 950 },
    { week: "Week 3", earned: 1150, redeemed: 1000 },
    { week: "Week 4", earned: 1600, redeemed: 1100 },
  ];

  // Colors for charts
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];
  const RADIAN = Math.PI / 180;

  // Custom label for donut chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-purple-600">HopeHub Admin</h1>
            <span className="text-2xl font-bold">Dashboard</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 space-y-8">
        {/* Section 1: Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-purple-50 border-purple-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-sm text-purple-600 font-medium">Total HopePoints Issued</h3>
              <p className="text-3xl font-bold mt-2">{summaryData.totalPointsIssued.toLocaleString()} HopePoints</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-sm text-blue-600 font-medium">Total HopePoints Redeemed</h3>
              <p className="text-3xl font-bold mt-2">{summaryData.totalPointsRedeemed.toLocaleString()} HopePoints</p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-100 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-sm text-green-600 font-medium">Total Active Users</h3>
              <p className="text-3xl font-bold mt-2">{summaryData.totalActiveUsers.toLocaleString()} users</p>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Leaderboard */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Top Earners</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead className="text-right">Total HopePoints</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.rank === 1 ? (
                        <div className="flex items-center">
                          {user.rank}
                          <Crown className="h-4 w-4 text-yellow-500 ml-1" />
                        </div>
                      ) : (
                        user.rank
                      )}
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell className="text-right font-medium">{user.points} Points</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Charts Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Section 3: Redemption Analytics */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Redemption Analytics</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={redemptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {redemptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Section 4: Tasks Completed */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Tasks Completed</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tasksData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Section 5: Points Issued vs Redeemed */}
          <section className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Points Issued vs Redeemed</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pointsTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="earned" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="redeemed" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Section 6: Quick User Lookup */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Quick User Lookup</h2>
          <div className="flex items-center gap-2 mb-4">
            <Input 
              type="text" 
              placeholder="Search by User ID or Name" 
              className="max-w-md"
            />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg max-w-md">
            <p className="text-gray-500">Search results will appear here</p>
            {/* Sample result (hidden by default) */}
            {/* 
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium">user123</h3>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                <p>Total Points: 1800</p>
                <p>Jobs Completed: 12</p>
                <p>Last Redemption: Apr 25, 2025</p>
              </div>
              <Button className="mt-2 w-full" variant="outline">View Details</Button>
            </div>
            */}
          </div>
        </section>

        {/* Section 7: Download Reports */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Download Reports</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Leaderboard CSV
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Redemption Report
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
