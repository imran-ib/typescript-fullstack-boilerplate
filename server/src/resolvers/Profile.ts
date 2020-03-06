import { ProfileResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface ProfileParent {
  id: string;
  user: UserParent;
}

export const Profile: ProfileResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: parent => parent.user
};
