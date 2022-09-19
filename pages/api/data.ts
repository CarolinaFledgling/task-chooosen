// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



interface DataCards {
  id: number
  name?: string
  title: string,
  url: string,
  heading: string,
  ratting: number,
  numberEmission:number,
}


const DataCards: DataCards[] = [
  {
    id: 1,
    title: "Europen Quest",
    url: "http://placekitten.com/300/200",
    heading: "It is a long established fact that a reader",
    ratting: 4.7,
    numberEmission:810,
  },
  {
    id: 2,
    title: "Autumn Roadtrip",
    url: "http://placekitten.com/300/200",
    heading:
      "It is a long established fact that a reader",
    ratting: 4.7,
    numberEmission:810,
  },
  {
    id: 3,
    title: "Diving adventure in Egypt",
    url: "http://placekitten.com/300/200",
    heading:
      "It is a long established fact that a reader",
    ratting: 4.7,
    numberEmission:810,
  },

];




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(DataCards)
}
