import React, { useState } from "react";
import "./drawer.scss";
function Drawer({children}) {
  const [drawerOpen, setdrawerOpen] = useState(false);
  
  return (
    <div
      className={`drawer ${drawerOpen ? "open-drawer" : "close-drawer"}`}
      onClick={() => !drawerOpen && setdrawerOpen(true)}
    >
      <div className="steps-details">
        {children}
        {drawerOpen && (
          <div className="close-button">
            <p onClick={() => setdrawerOpen(false)}>X</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
