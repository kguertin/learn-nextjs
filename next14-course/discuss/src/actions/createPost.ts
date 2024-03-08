"use server";

import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import paths from "@/paths";
import { db } from "@/db";
import { error } from "console";

const createPostSchema = z.object({
  title: z.string().min(3, { message: "Title must be 3 characters or longer" }),
  content: z.string().min(10, {
    message: "Content of the most must be a minimum of 10 characters long",
  }),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: { _form: ["You must be signed in to do this"] },
    };
  }
  return {
    errors: {},
  };
  //TODO: Revalidate the topic show page
}
