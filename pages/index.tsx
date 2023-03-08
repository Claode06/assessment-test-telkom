import { useStateContext } from "@/context";
import React, { useState, useEffect } from "react";

const HomePage: React.FC = () => {
  const [_, Dispatch] = useStateContext();
  useEffect(() => {
    Dispatch({
      type: "SET_HEADER",
      payload: "Telkom Assessment Test",
    });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
