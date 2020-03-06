import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    profiles: <T = Array<Profile | null>>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    profilesConnection: <T = ProfileConnection>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createProfile: <T = Profile>(args: { data: ProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProfile: <T = Profile | null>(args: { data: ProfileUpdateInput, where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProfile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertProfile: <T = Profile>(args: { where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProfiles: <T = BatchPayload>(args: { where?: ProfileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    profile: <T = ProfileSubscriptionPayload | null>(args: { where?: ProfileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Profile: (where?: ProfileWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateProfile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProfile(data: ProfileCreateInput!): Profile!
  createUser(data: UserCreateInput!): User!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteUser(where: UserWhereUniqueInput!): User
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  UPRDATEPERMISSION
}

type Profile implements Node {
  id: ID!
  user: User!
}

"""A connection to a list of items."""
type ProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  id: ID
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type ProfileEdge {
  """The item at the end of the edge."""
  node: Profile!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
}

type ProfilePreviousValues {
  id: ID!
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
}

input ProfileUpdateInput {
  user: UserUpdateOneRequiredInput
}

input ProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  user: UserWhereInput
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  profile(where: ProfileWhereUniqueInput!): Profile
  user(where: UserWhereUniqueInput!): User
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  firstName: String
  lastName: String
  fullName: String
  email: String!
  password: String!
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: [Permission!]!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String
  lastName: String
  fullName: String
  email: String!
  password: String!
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: UserCreatepermissionsInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  fullName_ASC
  fullName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  avatar_ASC
  avatar_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  isVerified_ASC
  isVerified_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String
  lastName: String
  fullName: String
  email: String!
  password: String!
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  fullName: String
  email: String
  password: String
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  fullName: String
  email: String
  password: String
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  fullName: String
  email: String
  password: String
  avatar: String
  resetToken: String
  resetTokenExpiry: Float
  isVerified: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  fullName: String

  """All values that are not equal to given value."""
  fullName_not: String

  """All values that are contained in given list."""
  fullName_in: [String!]

  """All values that are not contained in given list."""
  fullName_not_in: [String!]

  """All values less than the given value."""
  fullName_lt: String

  """All values less than or equal the given value."""
  fullName_lte: String

  """All values greater than the given value."""
  fullName_gt: String

  """All values greater than or equal the given value."""
  fullName_gte: String

  """All values containing the given string."""
  fullName_contains: String

  """All values not containing the given string."""
  fullName_not_contains: String

  """All values starting with the given string."""
  fullName_starts_with: String

  """All values not starting with the given string."""
  fullName_not_starts_with: String

  """All values ending with the given string."""
  fullName_ends_with: String

  """All values not ending with the given string."""
  fullName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  resetToken: String

  """All values that are not equal to given value."""
  resetToken_not: String

  """All values that are contained in given list."""
  resetToken_in: [String!]

  """All values that are not contained in given list."""
  resetToken_not_in: [String!]

  """All values less than the given value."""
  resetToken_lt: String

  """All values less than or equal the given value."""
  resetToken_lte: String

  """All values greater than the given value."""
  resetToken_gt: String

  """All values greater than or equal the given value."""
  resetToken_gte: String

  """All values containing the given string."""
  resetToken_contains: String

  """All values not containing the given string."""
  resetToken_not_contains: String

  """All values starting with the given string."""
  resetToken_starts_with: String

  """All values not starting with the given string."""
  resetToken_not_starts_with: String

  """All values ending with the given string."""
  resetToken_ends_with: String

  """All values not ending with the given string."""
  resetToken_not_ends_with: String
  resetTokenExpiry: Float

  """All values that are not equal to given value."""
  resetTokenExpiry_not: Float

  """All values that are contained in given list."""
  resetTokenExpiry_in: [Float!]

  """All values that are not contained in given list."""
  resetTokenExpiry_not_in: [Float!]

  """All values less than the given value."""
  resetTokenExpiry_lt: Float

  """All values less than or equal the given value."""
  resetTokenExpiry_lte: Float

  """All values greater than the given value."""
  resetTokenExpiry_gt: Float

  """All values greater than or equal the given value."""
  resetTokenExpiry_gte: Float
  isVerified: Boolean

  """All values that are not equal to given value."""
  isVerified_not: Boolean
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Permission =   'ADMIN' |
  'USER' |
  'UPRDATEPERMISSION'

export type ProfileOrderByInput =   'id_ASC' |
  'id_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'fullName_ASC' |
  'fullName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'resetToken_ASC' |
  'resetToken_DESC' |
  'resetTokenExpiry_ASC' |
  'resetTokenExpiry_DESC' |
  'isVerified_ASC' |
  'isVerified_DESC'

export interface ProfileCreateInput {
  id?: ID_Input | null
  user: UserCreateOneInput
}

export interface ProfileSubscriptionWhereInput {
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProfileWhereInput | null
}

export interface ProfileUpdateInput {
  user?: UserUpdateOneRequiredInput | null
}

export interface ProfileWhereInput {
  AND?: ProfileWhereInput[] | ProfileWhereInput | null
  OR?: ProfileWhereInput[] | ProfileWhereInput | null
  NOT?: ProfileWhereInput[] | ProfileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  user?: UserWhereInput | null
}

export interface ProfileWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email: String
  password: String
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions?: UserCreatepermissionsInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email?: String | null
  password?: String | null
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
}

export interface UserUpdateInput {
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email?: String | null
  password?: String | null
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
}

export interface UserUpdateManyMutationInput {
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email?: String | null
  password?: String | null
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission | null
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | String | null
  firstName_not_in?: String[] | String | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  fullName?: String | null
  fullName_not?: String | null
  fullName_in?: String[] | String | null
  fullName_not_in?: String[] | String | null
  fullName_lt?: String | null
  fullName_lte?: String | null
  fullName_gt?: String | null
  fullName_gte?: String | null
  fullName_contains?: String | null
  fullName_not_contains?: String | null
  fullName_starts_with?: String | null
  fullName_not_starts_with?: String | null
  fullName_ends_with?: String | null
  fullName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  resetToken?: String | null
  resetToken_not?: String | null
  resetToken_in?: String[] | String | null
  resetToken_not_in?: String[] | String | null
  resetToken_lt?: String | null
  resetToken_lte?: String | null
  resetToken_gt?: String | null
  resetToken_gte?: String | null
  resetToken_contains?: String | null
  resetToken_not_contains?: String | null
  resetToken_starts_with?: String | null
  resetToken_not_starts_with?: String | null
  resetToken_ends_with?: String | null
  resetToken_not_ends_with?: String | null
  resetTokenExpiry?: Float | null
  resetTokenExpiry_not?: Float | null
  resetTokenExpiry_in?: Float[] | Float | null
  resetTokenExpiry_not_in?: Float[] | Float | null
  resetTokenExpiry_lt?: Float | null
  resetTokenExpiry_lte?: Float | null
  resetTokenExpiry_gt?: Float | null
  resetTokenExpiry_gte?: Float | null
  isVerified?: Boolean | null
  isVerified_not?: Boolean | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateProfile {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Profile extends Node {
  id: ID_Output
  user: User
}

/*
 * A connection to a list of items.

 */
export interface ProfileConnection {
  pageInfo: PageInfo
  edges: Array<ProfileEdge | null>
  aggregate: AggregateProfile
}

/*
 * An edge in a connection.

 */
export interface ProfileEdge {
  node: Profile
  cursor: String
}

export interface ProfilePreviousValues {
  id: ID_Output
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType
  node?: Profile | null
  updatedFields?: Array<String> | null
  previousValues?: ProfilePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email: String
  password: String
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions: Array<Permission>
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  firstName?: String | null
  lastName?: String | null
  fullName?: String | null
  email: String
  password: String
  avatar?: String | null
  resetToken?: String | null
  resetTokenExpiry?: Float | null
  isVerified?: Boolean | null
  permissions: Array<Permission>
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string