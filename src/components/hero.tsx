"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {

 






  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-5">
      <Image
        width={1200}
        height={400}
        src="/image/wafy-campus-thiruvallur.jpg"
        alt="bg-img"
        className="absolute inset-0 mr-auto w-[900px] h-[610px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto md:mt-13 lg:mt-9 mt-[20rem] sm:mt-20">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl mt-4 sm:mt-10 font-mirza-bold !leading-snug reem font-bold text-[21px] lg:max-w-3xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              تنسيق الكليات الإسلامية [cic]
            </Typography>
            <Typography variant="lead" className="mb-2 font-mirza-regular  md:text-2xl mt-0 !text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            هيئة علمية شبه جامعة إسلامية تعمل في ولاية كيرالا الهندية تهدف إلى تعزيز الثقافة الإسلامية والقيم الإنسانية وتطوير المناهج الدراسية بالكليات المنتسبة إليها في ضوء مقتضيات العصر وتوحيدها، والجمع بين معارف الوحي والعلوم الإنسانية كما تهتم بالنشاطات الإنسانية والبيئية واسعة النطاق بعيدا عن حدود الأديان والعرق 
            </Typography>
            <div className="mb-2 flex justify-center gap-4 lg:justify-start">
              <Link href="https://wafycic.com" target="_blank"><Button className="md:text-2xl text-[14px] font-bold font-katibeh" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>اقرأ المزيد</Button></Link>
              <Link href="https://wafycic.com" target="_blank"><Button className="md:text-2xl text-[15px] font-bold font-katibeh" color="gray" variant="outlined" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              اتصل بنا
              </Button></Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <div className="flex">

                <span className=" flex md:text-2xl font-mirza-regular items-center">سنة +24</span>
              <Image
                width={50}
                height={50}
                className="w-26 grayscale opacity-60"
                src="/logos/cic-logo.png"
                alt="cic-logo"
              />
              </div>
              <div className="flex">

                <span className=" flex items-center md:text-2xl font-mirza-regular">الكليات +60</span>
              <Image
                width={40}
                height={40}
                className="w-26 grayscale opacity-60"
                src="/logos/university.svg"
                alt="cic-logo"
              />
              </div>
              <div className="flex">

                <span className=" flex items-center md:text-2xl font-mirza-regular">العاملين +700</span>
              <Image
                width={40}
                height={40}
                className="w-26 grayscale opacity-60"
                src="/logos/teacher.svg"
                alt="cic-logo"
              />
              </div>
              <div className="flex">

                <span className=" flex items-center md:text-2xl font-mirza-regular">الخريجين +5000</span>
              <Image
                width={40}
                height={40}
                className="w-26 grayscale opacity-60"
                src="/logos/graduate.svg"
                alt="cic-logo"
              />
              </div>
              
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
