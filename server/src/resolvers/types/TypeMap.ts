import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { MessageParent } from "../Message";
import { UserParent } from "../User";
import { ProfileParent } from "../Profile";

import { Context } from "./Context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  MessageParent: MessageParent;
  UserParent: UserParent;
  ProfileParent: ProfileParent;
}
