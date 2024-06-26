import React from "react"
import { GetStaticProps } from "next"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma"

export const getStaticProps: GetStaticProps = async () => {
    //const feed = await prisma.attendance.findMany({
    //  where: { checkIn: true },
    //  include: {
    //    author: {
    //      select: { name: true },
    //    },
    //  },
    //});
    return {
      props: { true: true},
      revalidate: 10,
    };
};

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Blog
