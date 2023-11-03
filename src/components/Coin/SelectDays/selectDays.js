import { MenuItem, Select } from "@mui/material";
import React from "react";
import "./styles.css";

function SelectDays({ noText, days, handleChange }) {
  return (
    <div className="select-div">
      {!noText ? <p>Price Change in the last</p> : <></>}
      <Select
        value={days}
        onChange={handleChange}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        className="select-coin"
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
