import { Typography } from "@mui/material";
import React from "react";


interface CardTitleProps{
  title:string;
}

export const CardTitle = ({title}:CardTitleProps): JSX.Element => {
  return (
    <>
      <Typography
        gutterBottom
        component="h3"
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          height: "70px",
        }}
      >
        {title}
      </Typography>
      ;
    </>
  );
};
