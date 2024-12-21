"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const authority = [
  {
    name:"",
    logo:"/logos/alazhar.png"
  },
  {
    name:"جامعة القاهرة",
    logo:"/logos/cairo.png"
  },
  {
    name:"",
    logo:"/logos/alesco.png"
  },
  {
    name:"جامعة عليگره الإسلامية",
    logo:"/logos/aligrah.png"
  },
  {
    name:"جامعة همدرد",
    logo:"/logos/hamdard.png"
  },
  {
    name:"",
    logo:"/logos/jumhooriyya-misr.png"
  },
  {
    name:"جمهورية مصر العربية",
    logo:"/logos/jumhooriyya-misr2.png"
  },
  {
    name:"ان سي بي يو ال",
    logo:"/logos/ncupl.png"
  },
];

function TrustedMou() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          العلاقات التعليمية الدولية
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          اتفاقيات التعاون (MOU)
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-14">
        
          {authority.map((item) => (
            <div className="text-center">
            <Image
              width={100}
              height={100}
              src={item.logo}
              alt="logo"
              className="w-40"
            />
            <span className="font-mirza-regular text-xl">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedMou;
