import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  iconBgClassName?: string;
  iconClassName?: string;
  change: string;
  changeType: 'increase' | 'decrease';
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  iconBgClassName,
  iconClassName,
  change,
  changeType,
  description,
  className,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", iconBgClassName)}>
          <Icon className={cn("h-5 w-5", iconClassName)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-card-foreground">{value}</div>
        <p className="text-sm text-muted-foreground flex items-center pt-1">
          <span
            className={cn(
              "flex items-center font-medium",
              isIncrease ? "text-success" : "text-destructive"
            )}
          >
            {isIncrease ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {change}
          </span>
          <span className="ml-2 font-normal">{description}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
