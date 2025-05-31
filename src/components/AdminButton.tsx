
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AdminButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/admin')}
      className="bg-purple-500 hover:bg-purple-600 text-white rounded-full text-md py-5 px-6"
    >
      Go to Admin Dashboard
    </Button>
  );
};

export default AdminButton;
