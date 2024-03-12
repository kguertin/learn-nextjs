import { Post } from "@prisma/client";
import { db } from "..";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// This is a type that is created by the return type of the function can avoid complexity in type definitions (see above) but does not scale well
// export type PostWithData = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[]

export async function fetchPostsByTopicSlug(
  slug: string
): Promise<PostWithData[]> {
  return await db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}