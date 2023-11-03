import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function TopButton() {
  var mybutton = document.getElementById("myBtn");

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div onClick={() => topFunction()} id="myBtn" className="top-btn">
      <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
    </div>
  );
}

export default TopButton;
