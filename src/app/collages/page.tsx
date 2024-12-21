"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/PG_CAMPUS_KALIKAVU.jpg",
    tag: "بعد التخرج",
    title: "حرم وافاي كاليكاف",
    label: "تفاصيل",
    desc: "أدكاكوندو , كالكافو , ملبرم , كيرلا, 676525 wafycampus1@gmail.com  9497259888، 8129078060",
  },
  {
    img: "/image/wafy-campus-thiruvallur.jpg",
    tag: "بعد التخرج",
    title: "معهد مالك دينار لبحوث القرآن الكريم – حرم وافى",
    label: "تفاصيل",
    desc: " ثرولور ، فدكر ، كوزكود ، كيرلا ، 673541 9747127219 , 9539992622  ",
  },
  {
    img: "/image/pang.jpg",
    tag: "  تمهيدية , علم الأحياء العلوم مع تدريب NEET  ",
    title: "حرم الوفاء بانج",
    label: "تفاصيل",
    desc: " بانغ سوث كلتور عبر ، ملبرم , كيرلا , 679338 , 9497313222 , 9645880215 , 9746558604 , wafypang@gmail.com ",
  },
  {
    img: "/image/perumundasheri.jpg",
    tag: "تمهيدية , علم الأحياء العلوم",
    title: "فركل ملكوي ثنغل كلية وافي",
    label: "تفاصيل",
    desc: "برمندشيري ، أرور ، كوزكود , كيرلا , 673507,9645037070 wafyperumundachery@gmail.com ",
  },
  {
    img: "/image/kokkachal.jpg",
    tag: "تمهيدية ، عالية",
    title: "كلية عمر علي شهاب ثنجل ككشال",
    label: "تفاصيل",
    desc: "ككتشال، كايار ، بانديود ، كاسارجود ، كيرلا ، 671322 8089256313، 9895623601 ، 9809114923",
  },
  {
    img: "/image/mamba.jpg",
    tag: "عالية",
    title: "كلية الشهداء للدعوة الإسلامية مامبا",
    label: "تفاصيل",
    desc: " مامبا  ، موزهابالا  ، تشاكاراكال  ، كنور  ، كيرلا   ،    670611 , 9747315540 ،   9747671519 ",
  },
];

export function ExploreCollages() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center mt-5">
        <Typography variant="h1" color="blue-gray" className="font-mirza-bold  md:text-7xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        استكشاف الكليات
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full font-mirza-regular text-2xl px-4 !text-gray-500 lg:w-6/12 lg:px-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
         تصفح أكثر من 60 كلية وابحث عن الكلية التي تناسب احتياجاتك.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCollages;
