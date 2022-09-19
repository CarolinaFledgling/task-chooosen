import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";

interface DataCard {
  id: number;
  name: string;
  title: string;
  url: string;
  heading: string;
  ratting: number;
  numberEmission: number;
  isKilogram: boolean;
}

interface CardProfileProps {
  card: DataCard;
}

function CardProfile({ card }: CardProfileProps): JSX.Element {
  const { title, url, heading, numberEmission, isKilogram } = card;

  return (
    <>
      <Card
        sx={{
          width: 345,
          border: "1px solid red",
          padding: 1,
          borderRadius: 2,
        }}
      >
        <CardActionArea
          sx={{
            border: "1px solid blue",
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
            }}
          >
            <CardContent sx={{ p: 2 }}>
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
                  {heading}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 1,
                  mt: 1,
                  mb: 1,
                  backgroundColor: "#333",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                component="div"
              >
                <Typography
                  gutterBottom
                  component="h3"
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                    m: 0,
                  }}
                >
                  {card.title}
                </Typography>
                {isKilogram ? (
                  <Typography
                    gutterBottom
                    component="h3"
                    sx={{
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                      m: 0,
                    }}
                  >
                    {numberEmission}kg CO2
                  </Typography>
                ) : (
                  <Typography
                    gutterBottom
                    component="h3"
                    sx={{
                      fontSize: 16,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                      m: 0,
                    }}
                  >
                    {numberEmission}t CO2
                  </Typography>
                )}
              </Box>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardProfile;
