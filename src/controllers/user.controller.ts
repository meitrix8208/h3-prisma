import { prisma } from "../services/db";
import {
  createError,
  eventHandler,
  getRouterParams,
  readBody,
} from "h3";

//!-----------users----------------
export const getUsers = eventHandler(async (event) => {
  const users = await prisma.user.findMany();
  return users;
});

export const getUser = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      status: 400,
      message: "id is required",
    });
  }
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { posts: true },
  });
  return user;
});

export const createUser = eventHandler(async (event) => {
  const { name, email } = await readBody(event);
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
});

export const updateUser = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { name, email } = await readBody(event);
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
    },
  });
  return user;
});

export const deleteUser = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return user;
});
