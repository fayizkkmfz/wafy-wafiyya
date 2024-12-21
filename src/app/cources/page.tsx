"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";
import Link from "next/link";


const CATEGORIES = [
  {
    img: "/image/wafiyya1.png",
    icon: HeartIcon,
    title: " وفية (عام)",
    desc: "  سنوات 5 (للبنات)",
  },
  {
    img: "/image/professional.png",
    icon: PuzzlePieceIcon,
    title: "وافي  (محترف )",
    desc: "سنوات 5",
  },
  {
    img: "/image/wafiyya4.png",
    icon: GlobeEuropeAfricaIcon,
    title: "وفية (محترف )",
    desc: "سنوات 5",
  },
  {
    img: "/image/wafy.jpg",
    icon: MicrophoneIcon,
    title: "الدخول الجانبي",
    desc: "بعد 2+ ",
  },
];

export function Courses() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h1" color="blue-gray" className="my-3 font-mirza-bold text-5xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        فئات الدورات
        </Typography>
        <Typography variant="lead" className="!text-gray-500 font-mirza-regular text-2xl lg:w-6/12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        مجموعة شاملة من الدورات التدريبية المصممة لتمكينك من المهارات التي تحتاجها للنجاح في عالم 
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="bg-[url('/image/wafyclass.png')] bg-fixed w-full h-full bg-contain relative grid h-full w-full place-items-center overflow-hidden text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
            <Typography color="white" className="text-2xl font-mirza-regular font-bold opacity-50" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            يمنح تنسيق الكليات الإسلامية حاليا
            </Typography>
            <Typography variant="h1" className="mt-9 font-mirza-bold" color="white" placeholder={undefined}  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            وافي (عام) 
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal text-2xl font-mirza-regular opacity-50"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              8 سنوات (للبنين)
            </Typography>
            <Link href="https://wafyonline.com" target="_blank">
           <Button size="md" className="text-3xl font-mirza-bold" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            سجل الآن
            </Button>
            </Link>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;