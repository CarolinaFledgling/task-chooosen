import { Typography } from "@mui/material";
import React from "react";

interface KilogramTemplateProps {
  numberEmission: number;
}

export const KilogramTemplate = ({
  numberEmission,
}: KilogramTemplateProps): JSX.Element => {
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
      {numberEmission} kg CO2
    </Typography>
  );
};
