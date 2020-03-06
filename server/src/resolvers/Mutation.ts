import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  createUser: (_, args, ctx, _info) => {
    throw new Error("Resolver not implemented");
  },
  loginUser: (_, args, ctx, _info) => {
    throw new Error("Resolver not implemented");
  },
  logoutUser: parent => null,
  requestReset: (_, args, ctx, _info) => null,
  resetPassword: (_, args, ctx, _info) => {
    throw new Error("Resolver not implemented");
  }
};
