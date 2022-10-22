import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface TripsRatingProps {
  ratting: number;
}

export const TripsRating = ({ ratting }: TripsRatingProps): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "white",
          p: 2,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          mb: "-25px",
        }}
      >
        <Typography
          gutterBottom
          variant="body2"
          sx={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000000eb",
            m: 0,
          }}
        >
          Trips rating
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={ratting}
          precision={0.5}
          readOnly
        />
      </Box>
    
    </>
  );
};
