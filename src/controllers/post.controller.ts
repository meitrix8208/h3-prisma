import { createError, eventHandler, getRouterParams, readBody } from "h3";
import { prisma } from "../services/db.service";

// !-----------posts----------------
export const getPosts = eventHandler(async () => {
  const posts = await prisma.post.findMany();
  return posts;
});

export const getPost = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      status: 400,
      message: "id is required",
    });
  }
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });
  return post;
});

export const createPost = eventHandler(async (event) => {
  const { title, content, authorId } = await readBody(event);
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: Number(authorId),
    },
  });
  return post;
});

export const updatePost = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { title, content, authorId } = await readBody(event);
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: {
      title,
      content,
      authorId: Number(authorId),
    },
  });
  return post;
});

export const deletePost = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  return post;
});
