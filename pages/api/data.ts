// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



interface DataCard {
  id: number
  name?: string
  title: string,
  url: string,
  heading: string,
  ratting: number,
  numberEmission:number,
  isKilogram:boolean,
}


const DataCards: DataCard[] = [
  {
    id: 1,
    title: "Europen Quest",
    url: "http://placekitten.com/300/200",
    heading: "It is a long ",
    ratting: 4.7,
    numberEmission:810,
    isKilogram:true,
  },
  {
    id: 2,
    title: "Autumn Roadtrip",
    url: "http://placekitten.com/300/200",
    heading:
      "It is a long ",
    ratting: 4.7,
    numberEmission:3.58,
    isKilogram:false,
  },
  {
    id: 3,
    title: "Diving adventure",
    url: "https://images.pexels.com/photos/5973832/pexels-photo-5973832.jpeg?cs=srgb&dl=pexels-ono-kosuki-5973832.jpg&fm=jpg",
    heading:
      "It is a long e",
    ratting: 4.7,
    numberEmission:6.92,
    isKilogram:false,
  },


];




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(DataCards)
}
