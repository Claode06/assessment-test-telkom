import { useStateContext } from "@/context";
import React, { useState, useEffect } from "react";

const AboutPage: React.FC = () => {
  const [_, Dispatch] = useStateContext();
  useEffect(() => {
    Dispatch({
      type: "SET_HEADER",
      payload: "About Me",
    });
  }, []);
  return (
    <div className="px-32">
      <div>About</div>
    </div>
  );
};

export default AboutPage;
