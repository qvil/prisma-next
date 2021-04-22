import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import prisma from "src/libs/prisma";
import { PostType } from "src/types";

interface PostPageProps {
  post: PostType;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { title, content, author } = post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>BY {author.name}</span>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log("🚀 ~ file: [id].tsx ~ line 31 ~ post", post);

  return { props: { post } };
};

export default PostPage;
