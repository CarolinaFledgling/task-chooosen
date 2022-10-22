import { Typography } from "@mui/material";
import React from "react";

interface TonTemplateProps {
  numberEmission: number;
}

export const TonTemplate = ({
  numberEmission,
}: TonTemplateProps): JSX.Element => {
  return (
    <Typography
      gutterBottom
      component="h3"
      sx={{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color:'#000000eb',
        m: 0,
      }}
    >
      {numberEmission} t CO2
    </Typography>
  );
};
