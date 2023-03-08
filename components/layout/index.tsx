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
    <div>
      <div className="flex justify-between items-center px-16 py-4 bg-slate-500">
        <div className="flex items-center">
          <Image src={"/img/logo.png"} alt="img" width={50} height={50} />
          <p className="font-bold text-xl text-white pl-4 ">{header}</p>
        </div>
        <div className="grid gap-4 grid-cols-2 font-semibold text-white">
          <Link href={"/repo"}>List Repository</Link>
          <Link href={"/about"}>About Me</Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
