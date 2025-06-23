import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b bg-card',
        className
      )}
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Side: Menu Toggle */}
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Right Side: Actions & User Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">View notifications</span>
            </Button>
            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive"></span>
            </span>
          </div>

          <Separator orientation="vertical" className="h-8" />

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=256&h=256&auto=format&fit=crop"
                alt="Eleanor Vance"
              />
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Eleanor Vance
              </p>
              <p className="text-xs text-muted-foreground">Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
