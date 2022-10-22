import { Typography } from '@mui/material'
import React from 'react'


interface AmountCountriesTextProps {
    countriesAmount: number
}

export const AmountCountriesText = (
    { countriesAmount }: AmountCountriesTextProps
): JSX.Element => {
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
                }}
            >
                {countriesAmount === 1
                    ? `${countriesAmount} country,`
                    : `${countriesAmount} countries,`}
            </Typography>
        </>
    )
}
