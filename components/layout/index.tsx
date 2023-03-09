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
            <a href={"https://docs.github.com/"} target="_blank">
              Documentation
            </a>
          </button>
        </div>
      </div>
      <div className=" h-full overflow-auto">
        <div>{children}</div>
        <div className=" pb-20">
          <div className="bg-slate-700 px-32  py-4  flex justify-between items-center">
            <p className="font-semibold text-slate-300">
              &copy; Copyright - Steven Claode
            </p>
            <div className="flex">
              <a
                href="https://www.instagram.com/steven_claode/"
                target="_blank"
              >
                <Image
                  src={"/img/ig.png"}
                  alt="instagram"
                  height={20}
                  width={30}
                />
              </a>
              <a
                href="https://github.com/claode06"
                className="ml-4"
                target="_blank"
              >
                <Image
                  src={"/img/git.png"}
                  alt="instagram"
                  height={20}
                  width={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
