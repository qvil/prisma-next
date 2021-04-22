import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "src/libs/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const id = Number(query.id) || -1;

  switch (method) {
    case "GET":
      try {
        const post = await prisma.post.findUnique({
          where: {
            id,
          },
          include: {
            author: true,
          },
        });

        if (post) return res.status(200).json(post);
        else return res.status(404).send("Not Found");
      } catch (error) {
        return res.status(500).send(error);
      }
    case "POST":
      return;
    default:
      return res.end();
  }
};
