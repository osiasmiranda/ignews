import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'osias' },
    { id: 2, name: 'Evena' },
    { id: 3, name: 'Obed' },
    { id: 4, name: 'osiane' },
  ];

  return response.json(users);
};
