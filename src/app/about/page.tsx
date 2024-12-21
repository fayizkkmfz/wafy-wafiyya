"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function AboutUs() {
  return (
    <section className="px-1 md:py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={800}
                height={800}
                src="/image/office.webp"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h3" color="blue" className="mb-4 font-mirza-regular" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              التنسيق بالتفصيل
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 md:text-5xl font-bold font-mirza-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                تنسيق الكليات الإسلامية (cic)
              </Typography>
              <Typography className="mb-1 w-full text-2xl font-mirza-regular font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              المكتب الرئيسي : بانغ سوث كلتور عبر ، ملبرم , كيرلا , 679338
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal text-2xl font-mirza-regular !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  ساعات العمل :  PM 5:30 - AM 9:30
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full text-2xl font-normal font-mirza-regular !text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  هاتف : + 91 7025687788 بريد إلكتروني : info@wafycic.com موقع إلكتروني: wafycic.com
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                    <Image
                        src="/image/cic.jpg"
                        alt="cic"
                        width={550}
                        height={450}
                    >

                    </Image>

          
                
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default AboutUs;
