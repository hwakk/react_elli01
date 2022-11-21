import React, { useState } from "react";
import "./AppXY.css";

function AppXY(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setPosition({ x: e.clientX, y: e.clientY });
        // 수평으로만 이동
        // setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}

export default AppXY;
