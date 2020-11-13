import React, { useEffect, useRef } from "react";
import { mount } from "marketing/Marketing";

export const MarketingApp = () => {
  const ref = useRef(null);
  const id = "container-marketing-app";

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
