import { User, Prisma } from "@prisma/client";

import { UsersRepository } from "@/repositories/users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const { name, email, password_hash } = data;

    const user = {
      id: "user-1",
      name,
      email,
      password_hash,
      created_at: new Date(),
    };

    this.items.push(user);

    return user;
  }
}
