import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  Rating,
} from "@mui/material";
import { TonTemplate } from "../TonTemplate/TonTemplate";
import { KilogramTemplate } from "../KilogramTemplate/KilogramTemplate";

interface DataCard {
  id: number;
  title: string;
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
            borderRadius: 2,
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
              backgroundColor: "rgba(0,0,255,0.2)",
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
                <Typography
                  gutterBottom
                  component="h3"
                  sx={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                    {days === 1 ? `${days} day` : `${days} days`}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  mt: 3,
                  mb: 1,
                  backgroundColor: "#3c4364",
                  borderRadius: "16px",
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
                    color: "white",
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
            <Rating name="read-only" value={4.5} readOnly />
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardProfile;
