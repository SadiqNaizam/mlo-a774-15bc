import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import TopHeader from '@/components/layout/TopHeader';
import StatCardGrid from '@/components/Dashboard/StatCardGrid';

/**
 * Renders the main Dashboard Overview page.
 * This page assembles the top header, page title, and a grid of statistic cards,
 * creating the primary user interface for the dashboard.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col bg-background">
      <TopHeader />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto w-full max-w-screen-lg">
          <div className="flex flex-col gap-6">
            <PageHeader title="Dashboard Overview" />
            <StatCardGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
