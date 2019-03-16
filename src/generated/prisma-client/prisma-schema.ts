// Code generated by Prisma (prisma@1.28.4). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBo {
  count: Int!
}

type AggregateBoProp {
  count: Int!
}

type AggregateEnumProp {
  count: Int!
}

type AggregateEnumType {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bo {
  id: ID!
  name: String
  desc: String
  props(where: BoPropWhereInput, orderBy: BoPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BoProp!]
  wikiUrl: String
  details(where: BoWhereInput, orderBy: BoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bo!]
}

type BoConnection {
  pageInfo: PageInfo!
  edges: [BoEdge]!
  aggregate: AggregateBo!
}

input BoCreateInput {
  name: String
  desc: String
  props: BoPropCreateManyWithoutBoInput
  wikiUrl: String
  details: BoCreateManyInput
}

input BoCreateManyInput {
  create: [BoCreateInput!]
  connect: [BoWhereUniqueInput!]
}

input BoCreateOneWithoutPropsInput {
  create: BoCreateWithoutPropsInput
  connect: BoWhereUniqueInput
}

input BoCreateWithoutPropsInput {
  name: String
  desc: String
  wikiUrl: String
  details: BoCreateManyInput
}

type BoEdge {
  node: Bo!
  cursor: String!
}

enum BoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  desc_ASC
  desc_DESC
  wikiUrl_ASC
  wikiUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BoPreviousValues {
  id: ID!
  name: String
  desc: String
  wikiUrl: String
}

type BoProp {
  id: ID!
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  bo: Bo!
  linkBo: String
  linkEnumType: EnumType
}

type BoPropConnection {
  pageInfo: PageInfo!
  edges: [BoPropEdge]!
  aggregate: AggregateBoProp!
}

input BoPropCreateInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  bo: BoCreateOneWithoutPropsInput!
  linkBo: String
  linkEnumType: EnumTypeCreateOneInput
}

input BoPropCreateManyWithoutBoInput {
  create: [BoPropCreateWithoutBoInput!]
  connect: [BoPropWhereUniqueInput!]
}

input BoPropCreateWithoutBoInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  linkBo: String
  linkEnumType: EnumTypeCreateOneInput
}

type BoPropEdge {
  node: BoProp!
  cursor: String!
}

enum BoPropOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  desc_ASC
  desc_DESC
  type_ASC
  type_DESC
  required_ASC
  required_DESC
  unique_ASC
  unique_DESC
  redundant_ASC
  redundant_DESC
  linkBo_ASC
  linkBo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BoPropPreviousValues {
  id: ID!
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  linkBo: String
}

input BoPropScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  required: Boolean
  required_not: Boolean
  unique: Boolean
  unique_not: Boolean
  redundant: Boolean
  redundant_not: Boolean
  linkBo: String
  linkBo_not: String
  linkBo_in: [String!]
  linkBo_not_in: [String!]
  linkBo_lt: String
  linkBo_lte: String
  linkBo_gt: String
  linkBo_gte: String
  linkBo_contains: String
  linkBo_not_contains: String
  linkBo_starts_with: String
  linkBo_not_starts_with: String
  linkBo_ends_with: String
  linkBo_not_ends_with: String
  AND: [BoPropScalarWhereInput!]
  OR: [BoPropScalarWhereInput!]
  NOT: [BoPropScalarWhereInput!]
}

type BoPropSubscriptionPayload {
  mutation: MutationType!
  node: BoProp
  updatedFields: [String!]
  previousValues: BoPropPreviousValues
}

input BoPropSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoPropWhereInput
  AND: [BoPropSubscriptionWhereInput!]
  OR: [BoPropSubscriptionWhereInput!]
  NOT: [BoPropSubscriptionWhereInput!]
}

input BoPropUpdateInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  bo: BoUpdateOneRequiredWithoutPropsInput
  linkBo: String
  linkEnumType: EnumTypeUpdateOneInput
}

input BoPropUpdateManyDataInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  linkBo: String
}

input BoPropUpdateManyMutationInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  linkBo: String
}

input BoPropUpdateManyWithoutBoInput {
  create: [BoPropCreateWithoutBoInput!]
  delete: [BoPropWhereUniqueInput!]
  connect: [BoPropWhereUniqueInput!]
  set: [BoPropWhereUniqueInput!]
  disconnect: [BoPropWhereUniqueInput!]
  update: [BoPropUpdateWithWhereUniqueWithoutBoInput!]
  upsert: [BoPropUpsertWithWhereUniqueWithoutBoInput!]
  deleteMany: [BoPropScalarWhereInput!]
  updateMany: [BoPropUpdateManyWithWhereNestedInput!]
}

input BoPropUpdateManyWithWhereNestedInput {
  where: BoPropScalarWhereInput!
  data: BoPropUpdateManyDataInput!
}

input BoPropUpdateWithoutBoDataInput {
  name: String
  desc: String
  type: String
  required: Boolean
  unique: Boolean
  redundant: Boolean
  linkBo: String
  linkEnumType: EnumTypeUpdateOneInput
}

input BoPropUpdateWithWhereUniqueWithoutBoInput {
  where: BoPropWhereUniqueInput!
  data: BoPropUpdateWithoutBoDataInput!
}

input BoPropUpsertWithWhereUniqueWithoutBoInput {
  where: BoPropWhereUniqueInput!
  update: BoPropUpdateWithoutBoDataInput!
  create: BoPropCreateWithoutBoInput!
}

input BoPropWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  required: Boolean
  required_not: Boolean
  unique: Boolean
  unique_not: Boolean
  redundant: Boolean
  redundant_not: Boolean
  bo: BoWhereInput
  linkBo: String
  linkBo_not: String
  linkBo_in: [String!]
  linkBo_not_in: [String!]
  linkBo_lt: String
  linkBo_lte: String
  linkBo_gt: String
  linkBo_gte: String
  linkBo_contains: String
  linkBo_not_contains: String
  linkBo_starts_with: String
  linkBo_not_starts_with: String
  linkBo_ends_with: String
  linkBo_not_ends_with: String
  linkEnumType: EnumTypeWhereInput
  AND: [BoPropWhereInput!]
  OR: [BoPropWhereInput!]
  NOT: [BoPropWhereInput!]
}

input BoPropWhereUniqueInput {
  id: ID
}

input BoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  wikiUrl: String
  wikiUrl_not: String
  wikiUrl_in: [String!]
  wikiUrl_not_in: [String!]
  wikiUrl_lt: String
  wikiUrl_lte: String
  wikiUrl_gt: String
  wikiUrl_gte: String
  wikiUrl_contains: String
  wikiUrl_not_contains: String
  wikiUrl_starts_with: String
  wikiUrl_not_starts_with: String
  wikiUrl_ends_with: String
  wikiUrl_not_ends_with: String
  AND: [BoScalarWhereInput!]
  OR: [BoScalarWhereInput!]
  NOT: [BoScalarWhereInput!]
}

type BoSubscriptionPayload {
  mutation: MutationType!
  node: Bo
  updatedFields: [String!]
  previousValues: BoPreviousValues
}

input BoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoWhereInput
  AND: [BoSubscriptionWhereInput!]
  OR: [BoSubscriptionWhereInput!]
  NOT: [BoSubscriptionWhereInput!]
}

input BoUpdateDataInput {
  name: String
  desc: String
  props: BoPropUpdateManyWithoutBoInput
  wikiUrl: String
  details: BoUpdateManyInput
}

input BoUpdateInput {
  name: String
  desc: String
  props: BoPropUpdateManyWithoutBoInput
  wikiUrl: String
  details: BoUpdateManyInput
}

input BoUpdateManyDataInput {
  name: String
  desc: String
  wikiUrl: String
}

input BoUpdateManyInput {
  create: [BoCreateInput!]
  update: [BoUpdateWithWhereUniqueNestedInput!]
  upsert: [BoUpsertWithWhereUniqueNestedInput!]
  delete: [BoWhereUniqueInput!]
  connect: [BoWhereUniqueInput!]
  set: [BoWhereUniqueInput!]
  disconnect: [BoWhereUniqueInput!]
  deleteMany: [BoScalarWhereInput!]
  updateMany: [BoUpdateManyWithWhereNestedInput!]
}

input BoUpdateManyMutationInput {
  name: String
  desc: String
  wikiUrl: String
}

input BoUpdateManyWithWhereNestedInput {
  where: BoScalarWhereInput!
  data: BoUpdateManyDataInput!
}

input BoUpdateOneRequiredWithoutPropsInput {
  create: BoCreateWithoutPropsInput
  update: BoUpdateWithoutPropsDataInput
  upsert: BoUpsertWithoutPropsInput
  connect: BoWhereUniqueInput
}

input BoUpdateWithoutPropsDataInput {
  name: String
  desc: String
  wikiUrl: String
  details: BoUpdateManyInput
}

input BoUpdateWithWhereUniqueNestedInput {
  where: BoWhereUniqueInput!
  data: BoUpdateDataInput!
}

input BoUpsertWithoutPropsInput {
  update: BoUpdateWithoutPropsDataInput!
  create: BoCreateWithoutPropsInput!
}

input BoUpsertWithWhereUniqueNestedInput {
  where: BoWhereUniqueInput!
  update: BoUpdateDataInput!
  create: BoCreateInput!
}

input BoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  props_every: BoPropWhereInput
  props_some: BoPropWhereInput
  props_none: BoPropWhereInput
  wikiUrl: String
  wikiUrl_not: String
  wikiUrl_in: [String!]
  wikiUrl_not_in: [String!]
  wikiUrl_lt: String
  wikiUrl_lte: String
  wikiUrl_gt: String
  wikiUrl_gte: String
  wikiUrl_contains: String
  wikiUrl_not_contains: String
  wikiUrl_starts_with: String
  wikiUrl_not_starts_with: String
  wikiUrl_ends_with: String
  wikiUrl_not_ends_with: String
  details_every: BoWhereInput
  details_some: BoWhereInput
  details_none: BoWhereInput
  AND: [BoWhereInput!]
  OR: [BoWhereInput!]
  NOT: [BoWhereInput!]
}

input BoWhereUniqueInput {
  id: ID
}

type EnumProp {
  id: ID!
  key: String!
  value: Int!
  enumType: EnumType!
}

type EnumPropConnection {
  pageInfo: PageInfo!
  edges: [EnumPropEdge]!
  aggregate: AggregateEnumProp!
}

input EnumPropCreateInput {
  key: String!
  value: Int!
  enumType: EnumTypeCreateOneWithoutPropsInput!
}

input EnumPropCreateManyWithoutEnumTypeInput {
  create: [EnumPropCreateWithoutEnumTypeInput!]
  connect: [EnumPropWhereUniqueInput!]
}

input EnumPropCreateWithoutEnumTypeInput {
  key: String!
  value: Int!
}

type EnumPropEdge {
  node: EnumProp!
  cursor: String!
}

enum EnumPropOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  value_ASC
  value_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EnumPropPreviousValues {
  id: ID!
  key: String!
  value: Int!
}

input EnumPropScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  AND: [EnumPropScalarWhereInput!]
  OR: [EnumPropScalarWhereInput!]
  NOT: [EnumPropScalarWhereInput!]
}

type EnumPropSubscriptionPayload {
  mutation: MutationType!
  node: EnumProp
  updatedFields: [String!]
  previousValues: EnumPropPreviousValues
}

input EnumPropSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EnumPropWhereInput
  AND: [EnumPropSubscriptionWhereInput!]
  OR: [EnumPropSubscriptionWhereInput!]
  NOT: [EnumPropSubscriptionWhereInput!]
}

input EnumPropUpdateInput {
  key: String
  value: Int
  enumType: EnumTypeUpdateOneRequiredWithoutPropsInput
}

input EnumPropUpdateManyDataInput {
  key: String
  value: Int
}

input EnumPropUpdateManyMutationInput {
  key: String
  value: Int
}

input EnumPropUpdateManyWithoutEnumTypeInput {
  create: [EnumPropCreateWithoutEnumTypeInput!]
  delete: [EnumPropWhereUniqueInput!]
  connect: [EnumPropWhereUniqueInput!]
  set: [EnumPropWhereUniqueInput!]
  disconnect: [EnumPropWhereUniqueInput!]
  update: [EnumPropUpdateWithWhereUniqueWithoutEnumTypeInput!]
  upsert: [EnumPropUpsertWithWhereUniqueWithoutEnumTypeInput!]
  deleteMany: [EnumPropScalarWhereInput!]
  updateMany: [EnumPropUpdateManyWithWhereNestedInput!]
}

input EnumPropUpdateManyWithWhereNestedInput {
  where: EnumPropScalarWhereInput!
  data: EnumPropUpdateManyDataInput!
}

input EnumPropUpdateWithoutEnumTypeDataInput {
  key: String
  value: Int
}

input EnumPropUpdateWithWhereUniqueWithoutEnumTypeInput {
  where: EnumPropWhereUniqueInput!
  data: EnumPropUpdateWithoutEnumTypeDataInput!
}

input EnumPropUpsertWithWhereUniqueWithoutEnumTypeInput {
  where: EnumPropWhereUniqueInput!
  update: EnumPropUpdateWithoutEnumTypeDataInput!
  create: EnumPropCreateWithoutEnumTypeInput!
}

input EnumPropWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  enumType: EnumTypeWhereInput
  AND: [EnumPropWhereInput!]
  OR: [EnumPropWhereInput!]
  NOT: [EnumPropWhereInput!]
}

input EnumPropWhereUniqueInput {
  id: ID
}

type EnumType {
  id: ID!
  name: String
  desc: String
  props(where: EnumPropWhereInput, orderBy: EnumPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnumProp!]
  wikiUrl: String
}

type EnumTypeConnection {
  pageInfo: PageInfo!
  edges: [EnumTypeEdge]!
  aggregate: AggregateEnumType!
}

input EnumTypeCreateInput {
  name: String
  desc: String
  props: EnumPropCreateManyWithoutEnumTypeInput
  wikiUrl: String
}

input EnumTypeCreateManyInput {
  create: [EnumTypeCreateInput!]
  connect: [EnumTypeWhereUniqueInput!]
}

input EnumTypeCreateOneInput {
  create: EnumTypeCreateInput
  connect: EnumTypeWhereUniqueInput
}

input EnumTypeCreateOneWithoutPropsInput {
  create: EnumTypeCreateWithoutPropsInput
  connect: EnumTypeWhereUniqueInput
}

input EnumTypeCreateWithoutPropsInput {
  name: String
  desc: String
  wikiUrl: String
}

type EnumTypeEdge {
  node: EnumType!
  cursor: String!
}

enum EnumTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  desc_ASC
  desc_DESC
  wikiUrl_ASC
  wikiUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EnumTypePreviousValues {
  id: ID!
  name: String
  desc: String
  wikiUrl: String
}

input EnumTypeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  wikiUrl: String
  wikiUrl_not: String
  wikiUrl_in: [String!]
  wikiUrl_not_in: [String!]
  wikiUrl_lt: String
  wikiUrl_lte: String
  wikiUrl_gt: String
  wikiUrl_gte: String
  wikiUrl_contains: String
  wikiUrl_not_contains: String
  wikiUrl_starts_with: String
  wikiUrl_not_starts_with: String
  wikiUrl_ends_with: String
  wikiUrl_not_ends_with: String
  AND: [EnumTypeScalarWhereInput!]
  OR: [EnumTypeScalarWhereInput!]
  NOT: [EnumTypeScalarWhereInput!]
}

type EnumTypeSubscriptionPayload {
  mutation: MutationType!
  node: EnumType
  updatedFields: [String!]
  previousValues: EnumTypePreviousValues
}

input EnumTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EnumTypeWhereInput
  AND: [EnumTypeSubscriptionWhereInput!]
  OR: [EnumTypeSubscriptionWhereInput!]
  NOT: [EnumTypeSubscriptionWhereInput!]
}

input EnumTypeUpdateDataInput {
  name: String
  desc: String
  props: EnumPropUpdateManyWithoutEnumTypeInput
  wikiUrl: String
}

input EnumTypeUpdateInput {
  name: String
  desc: String
  props: EnumPropUpdateManyWithoutEnumTypeInput
  wikiUrl: String
}

input EnumTypeUpdateManyDataInput {
  name: String
  desc: String
  wikiUrl: String
}

input EnumTypeUpdateManyInput {
  create: [EnumTypeCreateInput!]
  update: [EnumTypeUpdateWithWhereUniqueNestedInput!]
  upsert: [EnumTypeUpsertWithWhereUniqueNestedInput!]
  delete: [EnumTypeWhereUniqueInput!]
  connect: [EnumTypeWhereUniqueInput!]
  set: [EnumTypeWhereUniqueInput!]
  disconnect: [EnumTypeWhereUniqueInput!]
  deleteMany: [EnumTypeScalarWhereInput!]
  updateMany: [EnumTypeUpdateManyWithWhereNestedInput!]
}

input EnumTypeUpdateManyMutationInput {
  name: String
  desc: String
  wikiUrl: String
}

input EnumTypeUpdateManyWithWhereNestedInput {
  where: EnumTypeScalarWhereInput!
  data: EnumTypeUpdateManyDataInput!
}

input EnumTypeUpdateOneInput {
  create: EnumTypeCreateInput
  update: EnumTypeUpdateDataInput
  upsert: EnumTypeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: EnumTypeWhereUniqueInput
}

input EnumTypeUpdateOneRequiredWithoutPropsInput {
  create: EnumTypeCreateWithoutPropsInput
  update: EnumTypeUpdateWithoutPropsDataInput
  upsert: EnumTypeUpsertWithoutPropsInput
  connect: EnumTypeWhereUniqueInput
}

input EnumTypeUpdateWithoutPropsDataInput {
  name: String
  desc: String
  wikiUrl: String
}

input EnumTypeUpdateWithWhereUniqueNestedInput {
  where: EnumTypeWhereUniqueInput!
  data: EnumTypeUpdateDataInput!
}

input EnumTypeUpsertNestedInput {
  update: EnumTypeUpdateDataInput!
  create: EnumTypeCreateInput!
}

input EnumTypeUpsertWithoutPropsInput {
  update: EnumTypeUpdateWithoutPropsDataInput!
  create: EnumTypeCreateWithoutPropsInput!
}

input EnumTypeUpsertWithWhereUniqueNestedInput {
  where: EnumTypeWhereUniqueInput!
  update: EnumTypeUpdateDataInput!
  create: EnumTypeCreateInput!
}

input EnumTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  props_every: EnumPropWhereInput
  props_some: EnumPropWhereInput
  props_none: EnumPropWhereInput
  wikiUrl: String
  wikiUrl_not: String
  wikiUrl_in: [String!]
  wikiUrl_not_in: [String!]
  wikiUrl_lt: String
  wikiUrl_lte: String
  wikiUrl_gt: String
  wikiUrl_gte: String
  wikiUrl_contains: String
  wikiUrl_not_contains: String
  wikiUrl_starts_with: String
  wikiUrl_not_starts_with: String
  wikiUrl_ends_with: String
  wikiUrl_not_ends_with: String
  AND: [EnumTypeWhereInput!]
  OR: [EnumTypeWhereInput!]
  NOT: [EnumTypeWhereInput!]
}

input EnumTypeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBo(data: BoCreateInput!): Bo!
  updateBo(data: BoUpdateInput!, where: BoWhereUniqueInput!): Bo
  updateManyBoes(data: BoUpdateManyMutationInput!, where: BoWhereInput): BatchPayload!
  upsertBo(where: BoWhereUniqueInput!, create: BoCreateInput!, update: BoUpdateInput!): Bo!
  deleteBo(where: BoWhereUniqueInput!): Bo
  deleteManyBoes(where: BoWhereInput): BatchPayload!
  createBoProp(data: BoPropCreateInput!): BoProp!
  updateBoProp(data: BoPropUpdateInput!, where: BoPropWhereUniqueInput!): BoProp
  updateManyBoProps(data: BoPropUpdateManyMutationInput!, where: BoPropWhereInput): BatchPayload!
  upsertBoProp(where: BoPropWhereUniqueInput!, create: BoPropCreateInput!, update: BoPropUpdateInput!): BoProp!
  deleteBoProp(where: BoPropWhereUniqueInput!): BoProp
  deleteManyBoProps(where: BoPropWhereInput): BatchPayload!
  createEnumProp(data: EnumPropCreateInput!): EnumProp!
  updateEnumProp(data: EnumPropUpdateInput!, where: EnumPropWhereUniqueInput!): EnumProp
  updateManyEnumProps(data: EnumPropUpdateManyMutationInput!, where: EnumPropWhereInput): BatchPayload!
  upsertEnumProp(where: EnumPropWhereUniqueInput!, create: EnumPropCreateInput!, update: EnumPropUpdateInput!): EnumProp!
  deleteEnumProp(where: EnumPropWhereUniqueInput!): EnumProp
  deleteManyEnumProps(where: EnumPropWhereInput): BatchPayload!
  createEnumType(data: EnumTypeCreateInput!): EnumType!
  updateEnumType(data: EnumTypeUpdateInput!, where: EnumTypeWhereUniqueInput!): EnumType
  updateManyEnumTypes(data: EnumTypeUpdateManyMutationInput!, where: EnumTypeWhereInput): BatchPayload!
  upsertEnumType(where: EnumTypeWhereUniqueInput!, create: EnumTypeCreateInput!, update: EnumTypeUpdateInput!): EnumType!
  deleteEnumType(where: EnumTypeWhereUniqueInput!): EnumType
  deleteManyEnumTypes(where: EnumTypeWhereInput): BatchPayload!
  createPage(data: PageCreateInput!): Page!
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updateManyPages(data: PageUpdateManyMutationInput!, where: PageWhereInput): BatchPayload!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  deletePage(where: PageWhereUniqueInput!): Page
  deleteManyPages(where: PageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Page {
  id: ID!
  name: String
  desc: String
  project: String
  system: String
  domain: String
  type: String
  wikiUrl: String
  bos(where: BoWhereInput, orderBy: BoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bo!]
  enums(where: EnumTypeWhereInput, orderBy: EnumTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnumType!]
}

type PageConnection {
  pageInfo: PageInfo!
  edges: [PageEdge]!
  aggregate: AggregatePage!
}

input PageCreateInput {
  name: String
  desc: String
  project: String
  system: String
  domain: String
  type: String
  wikiUrl: String
  bos: BoCreateManyInput
  enums: EnumTypeCreateManyInput
}

type PageEdge {
  node: Page!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PageOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  desc_ASC
  desc_DESC
  project_ASC
  project_DESC
  system_ASC
  system_DESC
  domain_ASC
  domain_DESC
  type_ASC
  type_DESC
  wikiUrl_ASC
  wikiUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PagePreviousValues {
  id: ID!
  name: String
  desc: String
  project: String
  system: String
  domain: String
  type: String
  wikiUrl: String
}

type PageSubscriptionPayload {
  mutation: MutationType!
  node: Page
  updatedFields: [String!]
  previousValues: PagePreviousValues
}

input PageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PageWhereInput
  AND: [PageSubscriptionWhereInput!]
  OR: [PageSubscriptionWhereInput!]
  NOT: [PageSubscriptionWhereInput!]
}

input PageUpdateInput {
  name: String
  desc: String
  project: String
  system: String
  domain: String
  type: String
  wikiUrl: String
  bos: BoUpdateManyInput
  enums: EnumTypeUpdateManyInput
}

input PageUpdateManyMutationInput {
  name: String
  desc: String
  project: String
  system: String
  domain: String
  type: String
  wikiUrl: String
}

input PageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  project: String
  project_not: String
  project_in: [String!]
  project_not_in: [String!]
  project_lt: String
  project_lte: String
  project_gt: String
  project_gte: String
  project_contains: String
  project_not_contains: String
  project_starts_with: String
  project_not_starts_with: String
  project_ends_with: String
  project_not_ends_with: String
  system: String
  system_not: String
  system_in: [String!]
  system_not_in: [String!]
  system_lt: String
  system_lte: String
  system_gt: String
  system_gte: String
  system_contains: String
  system_not_contains: String
  system_starts_with: String
  system_not_starts_with: String
  system_ends_with: String
  system_not_ends_with: String
  domain: String
  domain_not: String
  domain_in: [String!]
  domain_not_in: [String!]
  domain_lt: String
  domain_lte: String
  domain_gt: String
  domain_gte: String
  domain_contains: String
  domain_not_contains: String
  domain_starts_with: String
  domain_not_starts_with: String
  domain_ends_with: String
  domain_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  wikiUrl: String
  wikiUrl_not: String
  wikiUrl_in: [String!]
  wikiUrl_not_in: [String!]
  wikiUrl_lt: String
  wikiUrl_lte: String
  wikiUrl_gt: String
  wikiUrl_gte: String
  wikiUrl_contains: String
  wikiUrl_not_contains: String
  wikiUrl_starts_with: String
  wikiUrl_not_starts_with: String
  wikiUrl_ends_with: String
  wikiUrl_not_ends_with: String
  bos_every: BoWhereInput
  bos_some: BoWhereInput
  bos_none: BoWhereInput
  enums_every: EnumTypeWhereInput
  enums_some: EnumTypeWhereInput
  enums_none: EnumTypeWhereInput
  AND: [PageWhereInput!]
  OR: [PageWhereInput!]
  NOT: [PageWhereInput!]
}

input PageWhereUniqueInput {
  id: ID
}

type Query {
  bo(where: BoWhereUniqueInput!): Bo
  boes(where: BoWhereInput, orderBy: BoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bo]!
  boesConnection(where: BoWhereInput, orderBy: BoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoConnection!
  boProp(where: BoPropWhereUniqueInput!): BoProp
  boProps(where: BoPropWhereInput, orderBy: BoPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BoProp]!
  boPropsConnection(where: BoPropWhereInput, orderBy: BoPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoPropConnection!
  enumProp(where: EnumPropWhereUniqueInput!): EnumProp
  enumProps(where: EnumPropWhereInput, orderBy: EnumPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnumProp]!
  enumPropsConnection(where: EnumPropWhereInput, orderBy: EnumPropOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EnumPropConnection!
  enumType(where: EnumTypeWhereUniqueInput!): EnumType
  enumTypes(where: EnumTypeWhereInput, orderBy: EnumTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EnumType]!
  enumTypesConnection(where: EnumTypeWhereInput, orderBy: EnumTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EnumTypeConnection!
  page(where: PageWhereUniqueInput!): Page
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  node(id: ID!): Node
}

type Subscription {
  bo(where: BoSubscriptionWhereInput): BoSubscriptionPayload
  boProp(where: BoPropSubscriptionWhereInput): BoPropSubscriptionPayload
  enumProp(where: EnumPropSubscriptionWhereInput): EnumPropSubscriptionPayload
  enumType(where: EnumTypeSubscriptionWhereInput): EnumTypeSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
}
`