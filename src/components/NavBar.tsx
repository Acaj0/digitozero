"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "./ui/sheet";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div>
      <div className="bg-[#151618] h-12 flex md:hidden justify-between items-center p-2">
        <a href="/">
          <div className="w-[40px]">
            <AspectRatio ratio={4 / 4}>
              <Image
                src={"/logodigitosite.png"}
                fill
                alt="logo da banda"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </a>
        <h1 className="italic text-xl text-white">DIGITO ZERO</h1> <MobileNav />{" "}
      </div>

      <div className="hidden bg-[#151618] h-24 md:flex justify-center items-center gap-20 text-xl text-white">
        <a href="/shows">SHOWS</a>
        <a href="/setlist">SETLIST</a>
        <a href="/">
          <div className="w-[90px]">
            <AspectRatio ratio={4 / 4}>
              <Image
                src={"/logodigitosite.png"}
                fill
                alt="logo da banda"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </a>

        <a href="/galeria">GALERIA</a>
        <a>CONTATO</a>
      </div>
    </div>
  );
}
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <div className="mt-10 flex flex-col gap-6 text-base font-semibold">
          <a href="/">HOME</a>
          <a href="/shows">SHOWS</a>
          <a href="/setlist">SETLIST</a>
          <a href="/galeria">GALERIA</a>
          <a>CONTATO</a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
