"use client";

import React from "react";

type TipTotalProps = {
  tips: number[];
};

const TipTotal: React.FC<TipTotalProps> = ({ tips }) => {
  const total = tips.reduce((sum, tip) => sum + tip, 0);

  return (
    <div className="text-xl font-semibold text-green-600 text-center">
      Total Tips: ${total.toFixed(2)}
    </div>
  );
};

export default TipTotal;
