import { prisma } from "../services/db.service";
import { createError, eventHandler, getRouterParams, readBody } from "h3";

//!-----------profile----------------

export const getProfiles = eventHandler(async (event) => {
  const profiles = await prisma.profile.findMany();
  return profiles;
});

export const getProfile = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      status: 400,
      message: "id is required",
    });
  }
  const profile = await prisma.profile.findUnique({
    where: { id: Number(id) },
    include: { user: true },
  });
  return profile;
});

export const createProfile = eventHandler(async (event) => {
  const { bio, userId } = await readBody(event);
  const profile = await prisma.profile.create({
    data: {
      bio,
      userId: Number(userId),
    },
  });
  return profile;
});

export const updateProfile = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { bio, userId } = await readBody(event);
  const profile = await prisma.profile.update({
    where: { id: Number(id) },
    data: {
      bio,
      userId: Number(userId),
    },
  });
  return profile;
});

export const deleteProfile = eventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const profile = await prisma.profile.delete({
    where: { id: Number(id) },
  });
  return profile;
});

