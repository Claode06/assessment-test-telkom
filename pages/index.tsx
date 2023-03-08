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
  return (
    <div className="px-32">
      <div>testing11</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing</div>
      <div>testing ENDDD</div>
    </div>
  );
};

export default HomePage;
