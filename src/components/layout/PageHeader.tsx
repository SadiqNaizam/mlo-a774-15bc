import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  return (
    <div className={cn('pb-2', className)}>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
