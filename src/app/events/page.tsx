"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/fest1.jpg",
    title: "مهرجان وافى",
    desc: "برامج ثقافية مختلفة ومشاريع اجتماعية ويجمع الطلاب تحت راية الأنشطة اللاصفية يركز الاتحاد على تنمية مهارات الطلاب القيادية والاستفادة من قدراتهم الإبداعية لمختلف الأنشطة الاجتماعية",
    buttonLabel: "معرض ",
  },
  {
    img: "/image/wafiyya2.jpeg",
    title: "مهرجان وفية",
    desc: " اتحاد الطلبة الوفاة ، جعل وجوده ملموسًا بالفعل من خلال إجراء الاحتفالات الأدبية على مستوى الولاية في غضون كل عامين والمؤتمر الدولي الذي عقد تحت شعار ",
    buttonLabel: "معرض ",
  },
  {
    img: "/image/sports1.jpg",
    title: "رياضة وافى",
    desc: " ويعقد الاتحاد برامج متعددة مثيرة الاهتمام لتنمية مهارات الطلاب مثل الخطابة والكتابة ومخيمات وورشات تدريبية كما يعقد مسابقات رياضية كل عامين على مستوى الولاية. ",
    buttonLabel: "معرض ",
  },
  {
    img: "/image/seminar.png",
    title: "ندوة دولية",
    desc: " المؤتمرات الدولية مع الضيوف الدوليين نظم تنسيق الكليات الإسلامية مؤتمرا دوليا حول شعار (التعددية الثقافية والسلام العالمي) الوافي الأدبي الثامن بحرم مركز التربية الإسلامية",
    buttonLabel: "معرض ",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-mirza-bold md:text-6xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        معالم الجذب في الدورة
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal font-mirza-regular md:text-2xl !text-gray-500 lg:w-6/12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          انضم إلى أحداثنا المصممة لمشاركة الأفكار والاتجاهات والتجارب الواقعية
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Events;
