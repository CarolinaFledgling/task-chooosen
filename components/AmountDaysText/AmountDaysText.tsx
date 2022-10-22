import { Typography } from "@mui/material";
import React from "react";

interface AmountDaysTextProps {
    days: number,
}

export const AmountDaysText = ({ days }: AmountDaysTextProps): JSX.Element => {
    return (
        <>
            <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                sx={{
                    fontSize: 16,
                    color: "white",
                    textAlign: "center",
                    ml: "5px",
                }}
            >
                {days <= 1 ? `${days} day` : `${days} days`}
            </Typography>
            ;
        </>
    );
};
