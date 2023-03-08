import React, { useState, useEffect } from "react";
import { useStateContext } from "@/context";

const TEsting: React.FC = () => {
  const [_, Dispatch] = useStateContext();
  useEffect(() => {
    Dispatch({
      type: "SET_HEADER",
      payload: "Testing Page",
    });
  }, []);
  return <div>TEsting:React.FC</div>;
};

export default TEsting;
