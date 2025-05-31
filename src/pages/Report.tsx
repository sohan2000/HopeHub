
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Report = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("San Jose Downtown");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {!submitted ? (
          <>
            {/* Header Section */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Report an Incident</h1>
              <p className="text-xl text-gray-700">
                Tell us what happened. We'll keep it private. You can help make your community safer!
              </p>
            </div>

            {/* Report Form */}
            <Card className="p-6 bg-white border-2 border-gray-200 shadow-md rounded-xl animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-xl font-medium text-gray-700">
                    📍 Location
                  </label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-xl p-6"
                  />
                  <p className="text-gray-500">Edit if wrong</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-xl font-medium text-gray-700">
                    📝 Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Type or speak what you saw..."
                    className="min-h-[200px] text-xl p-6"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 text-lg py-6 border-2"
                    onClick={() => alert("This feature is coming soon!")}
                  >
                    📷 Add Photo
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 text-lg py-6 border-2"
                    onClick={() => alert("Voice input coming soon!")}
                  >
                    🎤 Voice Input
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white text-xl py-7"
                >
                  Send Report
                </Button>
              </form>
            </Card>
          </>
        ) : (
          <>
            {/* Thank You Message */}
            <div className="text-center space-y-12 py-12 animate-fade-in">
              <div className="text-5xl">🎉</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Thanks for reporting!</h1>
              <p className="text-2xl text-gray-700">
                You've earned 50 HopePoints for helping make San Jose safer!
              </p>
              
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-xl p-7"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </>
        )}
        
        {/* Go Back Button (only shown on form view) */}
        {!submitted && (
          <div className="pt-4 animate-fade-in">
            <Button 
              className="w-full bg-purple-400 hover:bg-purple-500 text-white rounded-full text-xl p-7"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2" /> Go Back to Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
