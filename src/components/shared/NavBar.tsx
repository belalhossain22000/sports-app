import Image from "next/image";
import logo from "@/assets/images/soccerdesk-logo.svg";

import { Apple, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#1c2127] py-3   flex justify-between items-center">
      <div className="custom-container flex items-center justify-between mx-auto">
        <div>
          <Image src={logo} alt="SoccerDesk Logo" height={30} className="mr-2 aspect-[4/1]" />
        </div>
        <div className="flex gap-10">
          <Link
            href="#"
            className="flex items-center justify-center gap-1 px-2 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            <Apple className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-xs">Download on the</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center gap-1 px-2 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            <PlayCircle className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-xs">GET IT ON</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
