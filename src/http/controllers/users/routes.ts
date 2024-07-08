import { FastifyInstance } from "fastify";

import { verifyJwt } from "@/http/middlewares/verify-jwt";

import { register } from "./register";

import { authenticate } from "@/http/controllers/users/authenticate";

import { profile } from "@/http/controllers/users/profile";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);

  app.post("/sessions", authenticate);

  /** Authenticated */
  app.get("/me", { onRequest: [verifyJwt] }, profile);
}
