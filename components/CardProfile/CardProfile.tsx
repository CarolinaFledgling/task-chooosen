import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import { TonTemplate } from "../TonTemplate/TonTemplate";
import { KilogramTemplate } from "../KilogramTemplate/KilogramTemplate";
import { CardTitle } from "../CardTitle/CardTitle";
import { AmountCountriesText } from "../AmountCountriesText/AmountCountriesText";
import { AmountDaysText } from "../AmountDaysText/AmountDaysText";
import { TripsRating } from "../TripsRating/TripsRating";

interface DataCard {
  title: string;
  id: number;
  url: string;
  heading: string;
  ratting: number;
  numberEmission: number;
  isKilogram: boolean;
  countriesAmount: number;
  days: number;
}

interface CardProfileProps {
  card: DataCard;
}

function CardProfile({ card }: CardProfileProps): JSX.Element {
  const {
    title,
    url,
    days,
    numberEmission,
    isKilogram,
    countriesAmount,
    ratting,
  } = card;

  return (
    <>
      <Card
        sx={{
          width: 345,
          padding: 1,
          borderRadius: 2,
        }}
      >
        <CardActionArea
          sx={{
            overflow: "hidden",
            borderRadius: 1,
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#003580ea",
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Box sx={{ pl: 2, pr: 2 }}>
                <CardTitle title={title} />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <AmountCountriesText countriesAmount={countriesAmount} />
                  <AmountDaysText days={days} />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#fdb713",
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "280px",
                }}
                component="div"
              >
                <Typography
                  gutterBottom
                  component="h3"
                  sx={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#000000eb",
                    m: 0,
                  }}
                >
                  {title}
                </Typography>
                {isKilogram ? (
                  <KilogramTemplate numberEmission={numberEmission} />
                ) : (
                  <TonTemplate numberEmission={numberEmission} />
                )}
              </Box>
            </CardContent>
            <TripsRating ratting={ratting} />
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardProfile;
