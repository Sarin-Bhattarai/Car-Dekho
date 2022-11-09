import React, { useEffect, useState } from "react";
import "./counting.css";

function CountingCard({ number, children, icon }) {
  const [stateNumber, setStateNumber] = useState(0);
  useEffect(() => {
    for (let i = 0; i <= number; i++) {
      setTimeout(() => setStateNumber(i), 200);
    }
  }, [number]);

  return (
    <div>
      <div className="detail-icon">{icon}</div>
      <h2 className="total-info">{stateNumber}</h2>
      {children}
    </div>
  );
}

export default CountingCard;
