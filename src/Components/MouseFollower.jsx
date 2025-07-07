// components/MouseFollower.jsx

import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const moveCircle = (e) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCircle);
    return () => window.removeEventListener("mousemove", moveCircle);
  }, []);

  return (
    <div
      ref={circleRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[9999] transition-transform duration-75"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default MouseFollower;
