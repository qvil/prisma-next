import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "src/libs/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await prisma.post.findMany();

        if (posts.length > 0) {
          return res.status(200).json(posts);
        } else {
          return res.status(404).send("Not Found");
        }
      } catch (error) {
        return res.status(500).send(error);
      }
    case "POST":
      return;
    default:
      return res.end();
  }
};
