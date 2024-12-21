"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The instructors are top-notch, and the hands-on approach to learning is incredibly effective.",
    client: "السيد صادق علي شهاب تغل ",
    title: "رئيس تنسيق الكليات الإسلامية",
    img: "/image/thangal.png",
  },
  {
    feedback:
      "I went from knowing nothing about web development to landing my dream job as a frontend developer.",
    client: "الاستاذ عبد الحكيم فيضي",
    title: "الأمين العام",
    img: "/image/hakeemusthad.webp",
  },
  {
    feedback:
      "The courses are structured well, and the projects helped me build a strong portfolio.",
    client: "علي فيضي توت",
    title: "أمين الصندوق",
    img: "/image/alifaizythutha.png",
  },
];

export function Leaders() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h1" color="blue-gray" className="mb-2 md:text-7xl font-mirza-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          الهيئة الحكومية
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 text-center lg:px-42 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Leaders;
