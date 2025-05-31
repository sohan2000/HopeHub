
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Gift, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NavigationCardProps {
  icon: 'shield' | 'gift' | 'target';
  title: string;
  description: string;
  route: string;
}

const NavigationCard = ({ icon, title, description, route }: NavigationCardProps) => {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (icon) {
      case 'shield':
        return <Shield className="w-12 h-12 text-blue-700" />;
      case 'gift':
        return <Gift className="w-12 h-12 text-rose-700" />;
      case 'target':
        return <Target className="w-12 h-12 text-emerald-700" />;
    }
  };

  return (
    <Card
      onClick={() => navigate(route)}
      className="p-6 text-center cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in bg-white border-2 border-gray-200"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full p-4 bg-gray-50">
          {getIcon()}
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <span className="text-base font-medium text-gray-600 hover:text-gray-900">
          Tap to select
        </span>
      </div>
    </Card>
  );
};

export default NavigationCard;
