import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luan' }
  ];
  
  return res.json(users);
};