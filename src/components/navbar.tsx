import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  PlayCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const NAV_MENU = [
  {
    name: "الرئيسية",
    icon: HomeIcon,
    href:"/"
  },
  {
    name: "الدورات",
    icon: CommandLineIcon,
    href: "/cources",
  },
  {
    name: "معالم",
    icon: PlayCircleIcon,
    href: "/events",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;

}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="gray"
        className="flex font-katibeh text-2xl items-center gap-2 font-medium text-gray-900"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {children}
      </Typography>
        
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <div className="flex items-center justify-between">
            <div className="flex">

            <h2 className="font-bold font-reem text-black text-3xl">
              وافي 

            </h2>
            <Image
              src="/image/cic-logo.png"
              alt="cic-logo"
              width={40}
              height={40}
              >

            </Image>
            <h2 className="font-bold font-reem text-black text-3xl">
               وفية

            </h2>
              </div>
            
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
               <NavItem key={name} href={href}>
                
                  <Icon className="h-5 w-5" />
                  {name}
                
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex ">
              <Link href="/collages"><Button variant="text" className="text-xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> الكليات </Button></Link>
              <Link
                href="/about"
                
              >
                <Button color="gray" className="text-[19px]"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>حولنا
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Link href="/about">
                <Button variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>حولنا</Button>
                  
                  </Link>
                  <Link  href="/collages" >
                  <Button color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>الكليات</Button>
                </Link>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
