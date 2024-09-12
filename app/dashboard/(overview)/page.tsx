import {Suspense} from "react";
import {notoSansKr} from "../../ui/fonts";

// components
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import CardWrapper from "@/app/ui/dashboard/cards";

// loading
import {RevenueChartSkeleton} from "@/app/ui/skeletons";
import {LatestInvoicesSkeleton} from "@/app/ui/skeletons";
import {CardsSkeleton} from "@/app/ui/skeletons";

export default async function DashboardPage() {
  return (
    <main>
      <h1 className={`${notoSansKr.className} mb-4 font-bold text-xl md:text-2xl`}>대시보드</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
