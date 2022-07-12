import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CompileOptionsInput = {
  /** Whether to keep JSX. */
  jsx?: InputMaybe<Scalars['Boolean']>;
  /** sss */
  jsxImportSource?: InputMaybe<Scalars['String']>;
  /** Whether to compile to a whole program or a function body. */
  outputFormat?: InputMaybe<OutputFormat>;
};

export type File = {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  node: Text;
  resource: Scalars['String'];
  type: Type;
  value: Scalars['String'];
};

export type Mdx = {
  __typename?: 'Mdx';
  jsx: Scalars['String'];
  raw: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  baseUrl: Scalars['String'];
};

export type OutputFormat =
  | 'FUNCTION_BODY'
  | 'PROGRAM';

export type Query = {
  __typename?: 'Query';
  allMdx: Array<Mdx>;
  mdx?: Maybe<Mdx>;
  mdxInputs: Array<Maybe<File>>;
  meta?: Maybe<Meta>;
};


export type QueryMdxArgs = {
  compilerOptions?: InputMaybe<CompileOptionsInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Text = {
  __typename?: 'Text';
  type: Type;
  value: Scalars['String'];
};

export type Type =
  | 'FILE'
  | 'TEXT';



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CompileOptionsInput: CompileOptionsInput;
  File: ResolverTypeWrapper<File>;
  Mdx: ResolverTypeWrapper<Mdx>;
  Meta: ResolverTypeWrapper<Meta>;
  OutputFormat: OutputFormat;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Text: ResolverTypeWrapper<Text>;
  Type: Type;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CompileOptionsInput: CompileOptionsInput;
  File: File;
  Mdx: Mdx;
  Meta: Meta;
  Query: {};
  String: Scalars['String'];
  Text: Text;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Text'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MdxResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mdx'] = ResolversParentTypes['Mdx']> = {
  jsx?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  baseUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMdx?: Resolver<Array<ResolversTypes['Mdx']>, ParentType, ContextType>;
  mdx?: Resolver<Maybe<ResolversTypes['Mdx']>, ParentType, ContextType, Partial<QueryMdxArgs>>;
  mdxInputs?: Resolver<Array<Maybe<ResolversTypes['File']>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
};

export type TextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Text'] = ResolversParentTypes['Text']> = {
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  File?: FileResolvers<ContextType>;
  Mdx?: MdxResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Text?: TextResolvers<ContextType>;
};


export type MdxQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type MdxQuery = { __typename?: 'Query', mdx?: { __typename?: 'Mdx', jsx: string } | null };

export type AllMdxQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMdxQuery = { __typename?: 'Query', allMdx: Array<{ __typename?: 'Mdx', slug?: string | null }> };
