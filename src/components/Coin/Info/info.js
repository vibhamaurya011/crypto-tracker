import React, { useState } from "react";
import "./styles.css";
function Info({ name, desc }) {
  const [truncate, setTruncate] = useState(true);
  var truncatedDesc =
    desc.slice(0, 500) +
    "<p style='color:var(--grey); cursor:pointer'> Read More...</p>";

  var fullDesc =
    desc + "<p style='color:var(--grey); cursor:pointer'> Read Less...</p>";

  return (
    <div>
      <h3 style={{ marginTop: "0.5rem" }}>{name}</h3>
      <p
        onClick={() => setTruncate(!truncate)}
        className="desc-links"
        dangerouslySetInnerHTML={{
          __html: truncate ? truncatedDesc : fullDesc,
        }}
      />
    </div>
  );
}

export default Info;
