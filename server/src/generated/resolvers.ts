/* DO NOT EDIT! */
import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  Permission: any;

  QueryParent: any;
  MutationParent: any;
  MessageParent: any;
  UserParent: any;
  ProfileParent: any;
}

export namespace QueryResolvers {
  export type MeResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type UsersResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | null | Promise<T["UserParent"][] | null>;

  export type AdminResolver<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    users: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | null | Promise<T["UserParent"][] | null>;
    admin: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsCreateUser<T extends ITypeMap> {
    name: string;
    email: string;
    password: string;
  }

  export type CreateUserResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateUser<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface ArgsLoginUser<T extends ITypeMap> {
    email: string;
    password: string;
  }

  export type LoginUserResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLoginUser<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type LogoutUserResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;

  export interface ArgsRequestReset<T extends ITypeMap> {
    email: string;
  }

  export type RequestResetResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsRequestReset<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;

  export interface ArgsResetPassword<T extends ITypeMap> {
    token: string;
    password: string;
    confirmPassword: string;
  }

  export type ResetPasswordResolver<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsResetPassword<T>,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    createUser: (
      parent: T["MutationParent"],
      args: ArgsCreateUser<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    loginUser: (
      parent: T["MutationParent"],
      args: ArgsLoginUser<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    logoutUser: (
      parent: T["MutationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;
    requestReset: (
      parent: T["MutationParent"],
      args: ArgsRequestReset<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;
    resetPassword: (
      parent: T["MutationParent"],
      args: ArgsResetPassword<T>,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export namespace MessageResolvers {
  export type MessageResolver<T extends ITypeMap> = (
    parent: T["MessageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    message: (
      parent: T["MessageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type FullNameResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type EmailResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PasswordResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AvatarResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ResetTokenResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ResetTokenExpiryResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type IsVerifiedResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | null | Promise<boolean | null>;

  export type PermissionsResolver<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["Permission"][] | Promise<T["Permission"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    firstName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    lastName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    fullName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    password: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    avatar: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    resetToken: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    resetTokenExpiry: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    isVerified: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | null | Promise<boolean | null>;
    permissions: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["Permission"][] | Promise<T["Permission"][]>;
  }
}

export namespace ProfileResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T["ProfileParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T["ProfileParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ProfileParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["ProfileParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  Message: MessageResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Profile: ProfileResolvers.Type<T>;
}
