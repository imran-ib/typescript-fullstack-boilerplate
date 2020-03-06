import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Message } from "./Message";
import { User } from "./User";
import { Profile } from "./Profile";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  Message,
  User,
  Profile
};
