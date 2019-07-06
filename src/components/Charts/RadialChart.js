import React from "react";

import { RadialChart } from "react-vis";

function Radial() {
    const myData = [
      { angle: 1, label: "1-angle" },
      { angle: 1, label: "angle-5" },
      { angle: 2, label: "angle-2" }
    ];
    return (
      <div className="App">
        <RadialChart showLabels data={myData} width={300} height={300} />
      </div>
    );
  }
  
export default Radial;