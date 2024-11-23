import React, { useState } from "react";

export default function Folder({ explorer }) {
  const [expanded, setExpanded] = useState(false);

  if (explorer.folderItems) {
    return (
      <div>
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {"📂"}
          {explorer.name}
        </div>
        <div
          style={{
            paddingLeft: "20px",
            display: expanded === true ? "block" : "none",
          }}
        >
          {explorer.folderItems.map((item) => (
            <Folder explorer={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {"📑"}
        {explorer.name}
      </div>
    );
  }
}
