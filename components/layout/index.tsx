import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context";

interface props {
  children: any;
}

const Layout: React.FC<props> = ({ children }) => {
  const [{ header }, Dispatch] = useStateContext();
  return (
    <div className="h-full overflow-hidden">
      <div className="flex justify-between items-center px-32 py-4 bg-gradient-to-r from-[#3a7aba] via-[#4d87c1] to-[#5e93c7]">
        <div className="flex items-center">
          <Link href={"/"} className="cursor-pointer">
            <Image src={"/img/logo.svg"} alt="img" width={50} height={50} />
          </Link>
          <p className="font-bold text-xl text-slate-200 pl-8 ">{header}</p>
        </div>
        <div className=" font-semibold text-white">
          {/* <Link href={"/repo"}>List Repository</Link> */}
          <button className="hover:text-slate-800 text-slate-200 transition duration-200">
            <Link href={"/about"}>About Me</Link>
          </button>
        </div>
      </div>
      <div className="h-full pb-20 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
