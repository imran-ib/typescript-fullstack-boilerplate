import { MessageResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface MessageParent {
  message?: string;
}

export const Message: MessageResolvers.Type<TypeMap> = {
  message: parent => parent.message
};
