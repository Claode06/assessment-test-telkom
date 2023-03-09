import DescriptionComponent from "@/components/home/description";
import Repositories from "@/components/home/repositories";
import { useStateContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomePage: React.FC = () => {
  const [_, Dispatch] = useStateContext();
  useEffect(() => {
    Dispatch({
      type: "SET_HEADER",
      payload: "Github Repositories",
    });
  }, []);
  return (
    <div className="">
      <DescriptionComponent />
      <Repositories />
    </div>
  );
};

export default HomePage;
