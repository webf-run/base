/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputToken: { // input type
    password: string; // String!
    username: string; // String!
  }
  NewPublication: { // input type
    firstUser?: NexusGenInputs['UserInput'] | null; // UserInput
    fromEmail: string; // String!
    name: string; // String!
    publicUrl: string; // String!
  }
  TagInput: { // input type
    description?: string | null; // String
    name: string; // String!
    slug?: string | null; // String
  }
  UserInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: Date
}

export interface NexusGenObjects {
  AppError: { // root type
    errors: NexusGenRootTypes['Error'][]; // [Error!]!
  }
  AuthToken: { // root type
    duration: number; // Int!
    generatedAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    type: string; // String!
  }
  Error: { // root type
    code: string; // String!
    message: string; // String!
  }
  Mutation: {};
  Publication: { // root type
    fromEmail: string; // String!
    id: string; // ID!
    name: string; // String!
    publicUrl: string; // String!
  }
  Query: {};
  Tag: { // root type
    approved: boolean; // Boolean!
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    slug: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
  AuthTokenReponse: NexusGenRootTypes['AppError'] | NexusGenRootTypes['AuthToken'];
  NewPublicationResponse: NexusGenRootTypes['AppError'] | NexusGenRootTypes['Publication'];
  TagResponse: NexusGenRootTypes['AppError'] | NexusGenRootTypes['Tag'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AppError: { // field return type
    errors: NexusGenRootTypes['Error'][]; // [Error!]!
  }
  AuthToken: { // field return type
    duration: number; // Int!
    generatedAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    type: string; // String!
  }
  Error: { // field return type
    code: string; // String!
    message: string; // String!
  }
  Mutation: { // field return type
    approveTag: NexusGenRootTypes['Tag']; // Tag!
    authenticateUser: NexusGenRootTypes['AuthTokenReponse']; // AuthTokenReponse!
    createPublication: NexusGenRootTypes['NewPublicationResponse']; // NewPublicationResponse!
    createTag: NexusGenRootTypes['TagResponse']; // TagResponse!
    forgotPassword: boolean; // Boolean!
    resetPassword: boolean; // Boolean!
    updateTag: NexusGenRootTypes['Tag']; // Tag!
  }
  Publication: { // field return type
    fromEmail: string; // String!
    id: string; // ID!
    name: string; // String!
    publicUrl: string; // String!
  }
  Query: { // field return type
    getPublications: NexusGenRootTypes['Publication'][]; // [Publication!]!
    getTags: NexusGenRootTypes['Tag'][]; // [Tag!]!
  }
  Tag: { // field return type
    approved: boolean; // Boolean!
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    slug: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AppError: { // field return type name
    errors: 'Error'
  }
  AuthToken: { // field return type name
    duration: 'Int'
    generatedAt: 'DateTime'
    id: 'String'
    type: 'String'
  }
  Error: { // field return type name
    code: 'String'
    message: 'String'
  }
  Mutation: { // field return type name
    approveTag: 'Tag'
    authenticateUser: 'AuthTokenReponse'
    createPublication: 'NewPublicationResponse'
    createTag: 'TagResponse'
    forgotPassword: 'Boolean'
    resetPassword: 'Boolean'
    updateTag: 'Tag'
  }
  Publication: { // field return type name
    fromEmail: 'String'
    id: 'ID'
    name: 'String'
    publicUrl: 'String'
  }
  Query: { // field return type name
    getPublications: 'Publication'
    getTags: 'Tag'
  }
  Tag: { // field return type name
    approved: 'Boolean'
    description: 'String'
    id: 'ID'
    name: 'String'
    slug: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    approveTag: { // args
      approved: boolean; // Boolean!
      tagId: string; // ID!
    }
    authenticateUser: { // args
      input: NexusGenInputs['InputToken']; // InputToken!
    }
    createPublication: { // args
      input: NexusGenInputs['NewPublication']; // NewPublication!
    }
    createTag: { // args
      tag: NexusGenInputs['TagInput']; // TagInput!
    }
    forgotPassword: { // args
      username: string; // String!
    }
    resetPassword: { // args
      code: string; // String!
      password: string; // String!
    }
    updateTag: { // args
      tag: NexusGenInputs['TagInput']; // TagInput!
    }
  }
  Query: {
    getTags: { // args
      approved: boolean; // Boolean!
      search?: string | null; // String
      skip: number; // Int!
      top: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  AuthTokenReponse: "AppError" | "AuthToken"
  NewPublicationResponse: "AppError" | "Publication"
  TagResponse: "AppError" | "Tag"
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "AuthTokenReponse" | "NewPublicationResponse" | "TagResponse";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}