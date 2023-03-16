import React from "react";
import TextField from "@mui/material/TextField";
/**
 *
 * @param{{
 * label, required, test:"salam"|"bye"|"test"}}
 *
 */
const Input = (props) => {
  return <TextField {...props} sx={{ m: 2 }} variant="outlined"></TextField>;
};

export default Input;
