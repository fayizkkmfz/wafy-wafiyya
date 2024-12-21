"use client"

import { Typography, Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";



const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <h1 className="text-center font-mirza-bold text-5xl">معرض خارجي</h1>
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="md:flex col-span-2 items-center justify-center text-center gap-10 mb-10 lg:mb-0 md:gap-10">
             <div className="flex gap-8 flex-row justify-center font-mirza-regular text-xl mb-5 mt-5">

              <ul className="">
                <Link href="https://wafycic.com/" target="_blank"><li>wafycic.com</li></Link>
                <Link href="https://wafyonline.com/" target="_blank"><li>wafyonline.com</li></Link>
                <Link href="https://www.facebook.com/wafyupdates" target="_blank"><li>fb/wafyupdates</li></Link>
                <Link href="https://www.facebook.com/WafyStudentsFederation" target="_blank"><li>fb/wsfstate</li></Link>
                
              </ul>
              <ul className="">
              <Link href="https://wafycic.com/colleges/" target="_blank"><li>جدول الكليات</li></Link>
              <Link href="https://wafyonline.com/" target="_blank"><li>تفاصيل الدورة</li></Link>
              <Link href="https://wafycic.com/about" target="_blank"><li>الحوكمة والتنسيق</li></Link>
              <Link href="https://www.youtube.com/watch?v=xbCm9iMcqnU" target="_blank"><li>كراسة</li></Link>
                
                
              </ul>
             </div>
              <div className="flex flex-row gap-5 justify-center">
                <Link
                  href="https://www.facebook.com/wafyupdates"
                  target="_blank"
                >
                  <Image src="/logos/facebook.png" alt="facebook" width={30} height={30}/>
                </Link>
                <Link
                  href="https://www.youtube.com/@WAFYUPDATES"
                  target="_blank"
                >
                  <Image src="/logos/youtube.svg" alt="facebook" width={30} height={30}/>
                </Link>
                <Link
                  href="https://www.instagram.com/wafystreams/"
                  target="_blank"
                >
                  <Image src="/logos/instagram.png" alt="facebook" width={30} height={30}/>
                </Link>
                <Link
                  href="https://t.me/wafyupdates/"
                  target="_blank"
                >
                  <Image src="/logos/telegram.svg" alt="facebook" width={30} height={30}/>
                </Link>
                
              </div>
          </div>
          <div className="">
            <Typography variant="h1" className="mb-3 font-mirza-bold text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            تعليق
            </Typography>
            <Typography className="!text-gray-500 font-mirza-regular font-normal mb-4 text-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            نشكرك على زيارة هذا الموقع ، يمكنك مشاركة تعليقاتك وأفكارك القيمة
            </Typography>
    
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input className="font-mirza-regular" label="رسالة" color="gray" />
              </div>
              <Button color="gray" className="w-full font-mirza-regular text-2xl lg:w-fit" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              أرسل
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center text-xl font-mirza-regular mt-16 font-normal !text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          &copy; {CURRENT_YEAR} من صنع{" "}
          <a href="https://www.linkedin.com/in/fayiz-kk/" target="_blank">
          محمد فائز
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
