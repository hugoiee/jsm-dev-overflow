import { ModeToggle } from "@/components/navigation/navbar/ModeToggle";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
          Dev<span className="text-primary-500">OverFlow</span>
        </p>
      </Link>

      <p className="block max-sm:hidden">Search</p>
      <Button variant="link" size="icon" className="hidden max-sm:block">
        <Search className="size-[1.2rem] rotate-0 scale-100 transition-all" />
      </Button>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
