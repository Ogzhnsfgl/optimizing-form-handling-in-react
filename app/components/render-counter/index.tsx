'use client'

import React, { useEffect } from "react";

const RenderCounter: React.FC<Props> = ({ count }) => {

  return (
    <div className="renderCounter">
      <div className="counterWrapper">
        <span className="label">Render Count:</span>
        <span className="badge">{count}</span>
      </div>
    </div>
  );
};

export default RenderCounter;

interface Props {
  count: number;
}
