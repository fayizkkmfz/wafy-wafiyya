import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card className="border" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader className="h-64" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-mirza-regular text-xl font-normal text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 font-mirza-regular text-xl transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 text-2xl font-mirza-bold normal-case" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-mirza-regular text-xl font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {desc}
        </Typography>
        <Link href="https://wafycic.com/colleges" target="_blank"><Button className="text-xl font-mirza-bold" variant="outlined" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{label}</Button></Link>
      </CardBody>
    </Card>
  );
}

export default CourseCard;