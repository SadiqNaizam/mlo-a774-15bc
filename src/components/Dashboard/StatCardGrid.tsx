import React from 'react';
import StatCard from './StatCard';
import { DollarSign, Users, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the type for a single stat card's data
interface StatData {
  id: number;
  title: string;
  value: string;
  icon: React.ElementType;
  iconBgClassName: string;
  iconClassName: string;
  change: string;
  changeType: 'increase' | 'decrease';
  description: string;
}

// Define dummy data directly in the component file
const statsData: StatData[] = [
  {
    id: 1,
    title: "Monthly Recurring Revenue",
    value: "£48,320",
    icon: DollarSign,
    iconBgClassName: "bg-blue-100 dark:bg-blue-900/50",
    iconClassName: "text-blue-500 dark:text-blue-400",
    change: "3.2%",
    changeType: "increase" as const,
    description: "vs last month",
  },
  {
    id: 2,
    title: "Active Users",
    value: "1,245",
    icon: Users,
    iconBgClassName: "bg-green-100 dark:bg-green-900/50",
    iconClassName: "text-success dark:text-green-400",
    change: "122",
    changeType: "increase" as const,
    description: "this week",
  },
  {
    id: 3,
    title: "Churn Rate",
    value: "1.8%",
    icon: Activity,
    iconBgClassName: "bg-yellow-100 dark:bg-yellow-900/50",
    iconClassName: "text-yellow-600 dark:text-yellow-500",
    change: "0.2%",
    changeType: "decrease" as const,
    description: "vs last month",
  },
];

interface StatCardGridProps {
  className?: string;
}

const StatCardGrid: React.FC<StatCardGridProps> = ({ className }) => {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconBgClassName={stat.iconBgClassName}
          iconClassName={stat.iconClassName}
          change={stat.change}
          changeType={stat.changeType}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default StatCardGrid;
