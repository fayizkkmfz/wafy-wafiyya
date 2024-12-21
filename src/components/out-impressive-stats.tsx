"use client";


import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  UserGroupIcon ,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon:  AcademicCapIcon,
    count: "6,000+",
    title: "طلاب",
  },
  {
    icon: UserGroupIcon ,
    count: "35,000+",
    title: "أعضاء ألارهام",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "مخططات",
  },
  {
    icon: DocumentTextIcon,
    count: "8+",
    title: "اتفاقيات التعاون (MOU)",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 md:pt-60 pt-[20rem]">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center mt-16 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 md:text-6xl font-mirza-bold">
          اكتشف مكانتنا الرائعة
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-8 w-full !text-gray-500 font-mirza-regular text-2xl lg:w-5/12"
          >
            نحن نفخر بالتزامنا بالتميز وتفانينا لتحقيق نجاحك
          </Typography>
        </div>
        <div className="grid gap-y-10 gap-x-10 font-mirza-bold md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;