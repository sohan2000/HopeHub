
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const Points = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-6xl">🏆</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            You have 750 HopePoints!
          </h1>
        </div>
        
        {/* Redemption Section */}
        <section className="space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Redeem Your HopePoints</h2>
            <p className="text-xl text-gray-700 mt-2">
              Use your HopePoints to get food, transport, and other essentials!
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="space-y-4 text-center">
                <div className="text-4xl">🍔</div>
                <h3 className="text-2xl font-semibold text-gray-800">Food Coupon</h3>
                <p className="text-xl font-bold text-emerald-700">100 HopePoints</p>
                <p className="text-gray-600">Redeem for a $10 meal voucher</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-xl py-6">
                  Redeem
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="space-y-4 text-center">
                <div className="text-4xl">🚌</div>
                <h3 className="text-2xl font-semibold text-gray-800">Transport Pass</h3>
                <p className="text-xl font-bold text-emerald-700">150 HopePoints</p>
                <p className="text-gray-600">Bus pass valid for 1 day</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-xl py-6">
                  Redeem
                </Button>
              </div>
            </Card>

            <Card className="md:col-span-2 p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="space-y-4 text-center">
                <div className="text-4xl">🛒</div>
                <h3 className="text-2xl font-semibold text-gray-800">Hygiene Kit</h3>
                <p className="text-xl font-bold text-emerald-700">200 HopePoints</p>
                <p className="text-gray-600">Includes soap, toothbrush, sanitizer</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-xl py-6">
                  Redeem
                </Button>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Earn More Points Section */}
        <section className="space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Earn More Points</h2>
          </div>
          
          <div className="space-y-4">
            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-2 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800">📋 Get a Health Checkup</h3>
                  <p className="text-lg text-gray-600">Visit any partner clinic for a health screening</p>
                  <p className="text-xl font-bold text-emerald-700">+50 Points</p>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-lg py-5 px-8">
                  Start
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-2 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800">📋 Complete a Microjob</h3>
                  <p className="text-lg text-gray-600">Help with community tasks to earn points</p>
                  <p className="text-xl font-bold text-emerald-700">+100 Points</p>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-lg py-5 px-8">
                  View
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-2 mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800">📋 Attend a Safety Training</h3>
                  <p className="text-lg text-gray-600">Join a 1-hour workshop on personal safety</p>
                  <p className="text-xl font-bold text-emerald-700">+75 Points</p>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-lg py-5 px-8">
                  Start
                </Button>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Points History Section */}
        <section className="space-y-6 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">HopePoints History</h2>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg">Date</TableHead>
                  <TableHead className="text-lg">Action</TableHead>
                  <TableHead className="text-lg">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-base">April 26, 2025</TableCell>
                  <TableCell className="text-base">Attended Workshop</TableCell>
                  <TableCell className="text-base font-semibold text-emerald-700">+75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-base">April 25, 2025</TableCell>
                  <TableCell className="text-base">Completed Microjob</TableCell>
                  <TableCell className="text-base font-semibold text-emerald-700">+50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-base">April 24, 2025</TableCell>
                  <TableCell className="text-base">Completed Microjob</TableCell>
                  <TableCell className="text-base font-semibold text-emerald-700">+100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        
        {/* Go Back Button */}
        <div className="pt-4 animate-fade-in">
          <Button 
            className="w-full bg-purple-400 hover:bg-purple-500 text-white rounded-full text-xl p-7"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" /> Go Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Points;
