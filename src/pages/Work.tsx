
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Find Nearby Jobs</h1>
          <p className="text-xl text-gray-700">Pick small jobs near you to earn HopePoints!</p>
        </div>

        {/* Jobs List Section */}
        <div className="space-y-6 animate-fade-in">
          {/* Job Card 1 */}
          <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">🛠️ Cleaning Help Needed</h2>
              <p className="text-lg text-gray-600">Simple room cleaning at local shelter</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">📍 0.8 miles away</span>
                <span className="text-xl font-bold text-emerald-700">🪙 100 HopePoints</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-xl py-6">
                Accept Job
              </Button>
            </div>
          </Card>
          
          {/* Job Card 2 */}
          <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">🛠️ Kitchen Assistant</h2>
              <p className="text-lg text-gray-600">Help prepare meals at community kitchen</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">📍 5 min walk</span>
                <span className="text-xl font-bold text-emerald-700">🪙 150 HopePoints</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-xl py-6">
                Accept Job
              </Button>
            </div>
          </Card>
          
          {/* Job Card 3 */}
          <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">🛠️ Donation Sorting</h2>
              <p className="text-lg text-gray-600">Help organize clothing donations at community center</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">📍 1.2 miles away</span>
                <span className="text-xl font-bold text-emerald-700">🪙 120 HopePoints</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-xl py-6">
                Accept Job
              </Button>
            </div>
          </Card>
          
          {/* Job Card 4 */}
          <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">🛠️ Garden Helper</h2>
              <p className="text-lg text-gray-600">Help maintain the community garden</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">📍 10 min walk</span>
                <span className="text-xl font-bold text-emerald-700">🪙 80 HopePoints</span>
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-xl py-6">
                Accept Job
              </Button>
            </div>
          </Card>
        </div>
        
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

export default Work;
