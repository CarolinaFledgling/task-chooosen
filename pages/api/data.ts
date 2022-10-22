// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';





export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  

  const rawData = fs.readFileSync('./data.json', 'utf8');
  const jsonData = JSON.parse(rawData.toString());
  console.log(jsonData);    
  res.status(200).json(jsonData)
}
