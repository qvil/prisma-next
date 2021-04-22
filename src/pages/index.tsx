import { GetStaticProps, NextPage } from "next";

import prisma from "src/libs/prisma";
import { PostType } from "src/types";

interface IndexPageProps {
  feed: PostType[];
}

const IndexPage: NextPage<IndexPageProps> = ({ feed }) => {
  const {} = feed;

  return (
    <div>
      <h1>IndexPage</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};

export default IndexPage;
