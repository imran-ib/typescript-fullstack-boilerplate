import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export type Permission = "ADMIN" | "USER" | "UPRDATEPERMISSION";

export interface UserParent {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  password: string;
  avatar?: string;
  resetToken?: string;
  resetTokenExpiry?: number;
  isVerified?: boolean;
  permissions: Permission[];
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  fullName: parent => parent.fullName,
  email: parent => parent.email,
  password: parent => parent.password,
  avatar: parent => parent.avatar,
  resetToken: parent => parent.resetToken,
  resetTokenExpiry: parent => parent.resetTokenExpiry,
  isVerified: parent => parent.isVerified,
  permissions: parent => parent.permissions
};
