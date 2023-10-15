// Create folder structure of VS Code

import React, { useState } from "react";

const Vscodefilestru = ({ explorer }) => {
  const [clicked, setClicked] = useState(false);
  if (explorer.isFolder && explorer.items) {
    return (
      <div>
        <span onClick={() => setClicked(!clicked)}>
          {explorer.name}
          <br></br>
        </span>
        <div style={{ display: clicked ? "block" : "none", paddingLeft: 10 }}>
          {explorer.items.map((i) => {
            return <Vscodefilestru key={i.name} explorer={i}></Vscodefilestru>;
            // <span>{i.name}</span>
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br></br>
      </span>
    );
  }
};

export default Vscodefilestru;
