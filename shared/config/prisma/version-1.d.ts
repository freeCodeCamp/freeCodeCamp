
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model CompletedChallenge
 * 
 */
export type CompletedChallenge = $Result.DefaultSelection<Prisma.$CompletedChallengePayload>
/**
 * Model PartiallyCompletedChallenge
 * 
 */
export type PartiallyCompletedChallenge = $Result.DefaultSelection<Prisma.$PartiallyCompletedChallengePayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model ProfileUI
 * 
 */
export type ProfileUI = $Result.DefaultSelection<Prisma.$ProfileUIPayload>
/**
 * Model SavedChallengeFile
 * 
 */
export type SavedChallengeFile = $Result.DefaultSelection<Prisma.$SavedChallengeFilePayload>
/**
 * Model SavedChallenge
 * 
 */
export type SavedChallenge = $Result.DefaultSelection<Prisma.$SavedChallengePayload>
/**
 * Model CompletedExam
 * 
 */
export type CompletedExam = $Result.DefaultSelection<Prisma.$CompletedExamPayload>
/**
 * Model ExamResults
 * 
 */
export type ExamResults = $Result.DefaultSelection<Prisma.$ExamResultsPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>
/**
 * Model DonationEndDate
 * 
 */
export type DonationEndDate = $Result.DefaultSelection<Prisma.$DonationEndDatePayload>
/**
 * Model DonationStartDate
 * 
 */
export type DonationStartDate = $Result.DefaultSelection<Prisma.$DonationStartDatePayload>
/**
 * Model SurveyResponse
 * 
 */
export type SurveyResponse = $Result.DefaultSelection<Prisma.$SurveyResponsePayload>
/**
 * Model user
 * Corresponds to the `user` collection.
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model AccessToken
 * 
 */
export type AccessToken = $Result.DefaultSelection<Prisma.$AccessTokenPayload>
/**
 * Model AuthToken
 * 
 */
export type AuthToken = $Result.DefaultSelection<Prisma.$AuthTokenPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model UserRateLimit
 * 
 */
export type UserRateLimit = $Result.DefaultSelection<Prisma.$UserRateLimitPayload>
/**
 * Model UserToken
 * 
 */
export type UserToken = $Result.DefaultSelection<Prisma.$UserTokenPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model MsUsername
 * 
 */
export type MsUsername = $Result.DefaultSelection<Prisma.$MsUsernamePayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Survey
 * 
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.accessToken`: Exposes CRUD operations for the **AccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessTokens
    * const accessTokens = await prisma.accessToken.findMany()
    * ```
    */
  get accessToken(): Prisma.AccessTokenDelegate<ExtArgs>;

  /**
   * `prisma.authToken`: Exposes CRUD operations for the **AuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthTokens
    * const authTokens = await prisma.authToken.findMany()
    * ```
    */
  get authToken(): Prisma.AuthTokenDelegate<ExtArgs>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs>;

  /**
   * `prisma.userRateLimit`: Exposes CRUD operations for the **UserRateLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRateLimits
    * const userRateLimits = await prisma.userRateLimit.findMany()
    * ```
    */
  get userRateLimit(): Prisma.UserRateLimitDelegate<ExtArgs>;

  /**
   * `prisma.userToken`: Exposes CRUD operations for the **UserToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTokens
    * const userTokens = await prisma.userToken.findMany()
    * ```
    */
  get userToken(): Prisma.UserTokenDelegate<ExtArgs>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs>;

  /**
   * `prisma.msUsername`: Exposes CRUD operations for the **MsUsername** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MsUsernames
    * const msUsernames = await prisma.msUsername.findMany()
    * ```
    */
  get msUsername(): Prisma.MsUsernameDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    AccessToken: 'AccessToken',
    AuthToken: 'AuthToken',
    Donation: 'Donation',
    UserRateLimit: 'UserRateLimit',
    UserToken: 'UserToken',
    sessions: 'sessions',
    MsUsername: 'MsUsername',
    Exam: 'Exam',
    Survey: 'Survey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'accessToken' | 'authToken' | 'donation' | 'userRateLimit' | 'userToken' | 'sessions' | 'msUsername' | 'exam' | 'survey'
      txIsolationLevel: never
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AccessToken: {
        payload: Prisma.$AccessTokenPayload<ExtArgs>
        fields: Prisma.AccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findFirst: {
            args: Prisma.AccessTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findMany: {
            args: Prisma.AccessTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          create: {
            args: Prisma.AccessTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          createMany: {
            args: Prisma.AccessTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccessTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          update: {
            args: Prisma.AccessTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccessTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccessTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccessTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          aggregate: {
            args: Prisma.AccessTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccessToken>
          }
          groupBy: {
            args: Prisma.AccessTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccessTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccessTokenFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccessTokenAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AccessTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<AccessTokenCountAggregateOutputType> | number
          }
        }
      }
      AuthToken: {
        payload: Prisma.$AuthTokenPayload<ExtArgs>
        fields: Prisma.AuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          findFirst: {
            args: Prisma.AuthTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          findMany: {
            args: Prisma.AuthTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>[]
          }
          create: {
            args: Prisma.AuthTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          createMany: {
            args: Prisma.AuthTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AuthTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          update: {
            args: Prisma.AuthTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.AuthTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AuthTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AuthTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AuthTokenPayload>
          }
          aggregate: {
            args: Prisma.AuthTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthToken>
          }
          groupBy: {
            args: Prisma.AuthTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AuthTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AuthTokenFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AuthTokenAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AuthTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<AuthTokenCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DonationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DonationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>,
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      UserRateLimit: {
        payload: Prisma.$UserRateLimitPayload<ExtArgs>
        fields: Prisma.UserRateLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRateLimitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRateLimitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          findFirst: {
            args: Prisma.UserRateLimitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRateLimitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          findMany: {
            args: Prisma.UserRateLimitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>[]
          }
          create: {
            args: Prisma.UserRateLimitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          createMany: {
            args: Prisma.UserRateLimitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserRateLimitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          update: {
            args: Prisma.UserRateLimitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          deleteMany: {
            args: Prisma.UserRateLimitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserRateLimitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserRateLimitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRateLimitPayload>
          }
          aggregate: {
            args: Prisma.UserRateLimitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserRateLimit>
          }
          groupBy: {
            args: Prisma.UserRateLimitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserRateLimitGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserRateLimitFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserRateLimitAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserRateLimitCountArgs<ExtArgs>,
            result: $Utils.Optional<UserRateLimitCountAggregateOutputType> | number
          }
        }
      }
      UserToken: {
        payload: Prisma.$UserTokenPayload<ExtArgs>
        fields: Prisma.UserTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findFirst: {
            args: Prisma.UserTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findMany: {
            args: Prisma.UserTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          create: {
            args: Prisma.UserTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          createMany: {
            args: Prisma.UserTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          update: {
            args: Prisma.UserTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          aggregate: {
            args: Prisma.UserTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserToken>
          }
          groupBy: {
            args: Prisma.UserTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserTokenFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserTokenAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<UserTokenCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.sessionsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.sessionsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      MsUsername: {
        payload: Prisma.$MsUsernamePayload<ExtArgs>
        fields: Prisma.MsUsernameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsUsernameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsUsernameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          findFirst: {
            args: Prisma.MsUsernameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsUsernameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          findMany: {
            args: Prisma.MsUsernameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>[]
          }
          create: {
            args: Prisma.MsUsernameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          createMany: {
            args: Prisma.MsUsernameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MsUsernameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          update: {
            args: Prisma.MsUsernameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          deleteMany: {
            args: Prisma.MsUsernameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MsUsernameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MsUsernameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MsUsernamePayload>
          }
          aggregate: {
            args: Prisma.MsUsernameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMsUsername>
          }
          groupBy: {
            args: Prisma.MsUsernameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MsUsernameGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MsUsernameFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MsUsernameAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MsUsernameCountArgs<ExtArgs>,
            result: $Utils.Optional<MsUsernameCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExamFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExamAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>,
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SurveyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SurveyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>,
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model File
   */





  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contents?: boolean
    ext?: boolean
    key?: boolean
    name?: boolean
    path?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    contents?: boolean
    ext?: boolean
    key?: boolean
    name?: boolean
    path?: boolean
  }


  export type $FilePayload = {
    name: "File"
    objects: {}
    scalars: {
      contents: string
      ext: string
      key: string
      name: string
      path: string | null
    }
    composites: {}
  }


  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>





  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly contents: FieldRef<"File", 'String'>
    readonly ext: FieldRef<"File", 'String'>
    readonly key: FieldRef<"File", 'String'>
    readonly name: FieldRef<"File", 'String'>
    readonly path: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
  }



  /**
   * Model CompletedChallenge
   */





  export type CompletedChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challengeType?: boolean
    completedDate?: boolean
    files?: boolean | FileDefaultArgs<ExtArgs>
    githubLink?: boolean
    id?: boolean
    isManuallyApproved?: boolean
    solution?: boolean
    examResults?: boolean | ExamResultsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedChallenge"]>

  export type CompletedChallengeSelectScalar = {
    challengeType?: boolean
    completedDate?: boolean
    githubLink?: boolean
    id?: boolean
    isManuallyApproved?: boolean
    solution?: boolean
  }

  export type CompletedChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $CompletedChallengePayload = {
    name: "CompletedChallenge"
    objects: {}
    scalars: {
      challengeType: number | null
      completedDate: number
      githubLink: string | null
      id: string
      isManuallyApproved: boolean | null
      solution: string | null
    }
    composites: {
      files: Prisma.$FilePayload[]
      examResults: Prisma.$ExamResultsPayload | null
    }
  }


  type CompletedChallengeGetPayload<S extends boolean | null | undefined | CompletedChallengeDefaultArgs> = $Result.GetResult<Prisma.$CompletedChallengePayload, S>





  /**
   * Fields of the CompletedChallenge model
   */ 
  interface CompletedChallengeFieldRefs {
    readonly challengeType: FieldRef<"CompletedChallenge", 'Int'>
    readonly completedDate: FieldRef<"CompletedChallenge", 'Float'>
    readonly githubLink: FieldRef<"CompletedChallenge", 'String'>
    readonly id: FieldRef<"CompletedChallenge", 'String'>
    readonly isManuallyApproved: FieldRef<"CompletedChallenge", 'Boolean'>
    readonly solution: FieldRef<"CompletedChallenge", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CompletedChallenge without action
   */
  export type CompletedChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedChallenge
     */
    select?: CompletedChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompletedChallengeInclude<ExtArgs> | null
  }



  /**
   * Model PartiallyCompletedChallenge
   */





  export type PartiallyCompletedChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedDate?: boolean
  }, ExtArgs["result"]["partiallyCompletedChallenge"]>

  export type PartiallyCompletedChallengeSelectScalar = {
    id?: boolean
    completedDate?: boolean
  }


  export type $PartiallyCompletedChallengePayload = {
    name: "PartiallyCompletedChallenge"
    objects: {}
    scalars: {
      id: string
      completedDate: number
    }
    composites: {}
  }


  type PartiallyCompletedChallengeGetPayload<S extends boolean | null | undefined | PartiallyCompletedChallengeDefaultArgs> = $Result.GetResult<Prisma.$PartiallyCompletedChallengePayload, S>





  /**
   * Fields of the PartiallyCompletedChallenge model
   */ 
  interface PartiallyCompletedChallengeFieldRefs {
    readonly id: FieldRef<"PartiallyCompletedChallenge", 'String'>
    readonly completedDate: FieldRef<"PartiallyCompletedChallenge", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * PartiallyCompletedChallenge without action
   */
  export type PartiallyCompletedChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartiallyCompletedChallenge
     */
    select?: PartiallyCompletedChallengeSelect<ExtArgs> | null
  }



  /**
   * Model Portfolio
   */





  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean
    id?: boolean
    image?: boolean
    title?: boolean
    url?: boolean
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    description?: boolean
    id?: boolean
    image?: boolean
    title?: boolean
    url?: boolean
  }


  export type $PortfolioPayload = {
    name: "Portfolio"
    objects: {}
    scalars: {
      description: string
      id: string
      image: string
      title: string
      url: string
    }
    composites: {}
  }


  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>





  /**
   * Fields of the Portfolio model
   */ 
  interface PortfolioFieldRefs {
    readonly description: FieldRef<"Portfolio", 'String'>
    readonly id: FieldRef<"Portfolio", 'String'>
    readonly image: FieldRef<"Portfolio", 'String'>
    readonly title: FieldRef<"Portfolio", 'String'>
    readonly url: FieldRef<"Portfolio", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
  }



  /**
   * Model ProfileUI
   */





  export type ProfileUISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isLocked?: boolean
    showAbout?: boolean
    showCerts?: boolean
    showDonation?: boolean
    showHeatMap?: boolean
    showLocation?: boolean
    showName?: boolean
    showPoints?: boolean
    showPortfolio?: boolean
    showTimeLine?: boolean
  }, ExtArgs["result"]["profileUI"]>

  export type ProfileUISelectScalar = {
    isLocked?: boolean
    showAbout?: boolean
    showCerts?: boolean
    showDonation?: boolean
    showHeatMap?: boolean
    showLocation?: boolean
    showName?: boolean
    showPoints?: boolean
    showPortfolio?: boolean
    showTimeLine?: boolean
  }


  export type $ProfileUIPayload = {
    name: "ProfileUI"
    objects: {}
    scalars: {
      isLocked: boolean | null
      showAbout: boolean | null
      showCerts: boolean | null
      showDonation: boolean | null
      showHeatMap: boolean | null
      showLocation: boolean | null
      showName: boolean | null
      showPoints: boolean | null
      showPortfolio: boolean | null
      showTimeLine: boolean | null
    }
    composites: {}
  }


  type ProfileUIGetPayload<S extends boolean | null | undefined | ProfileUIDefaultArgs> = $Result.GetResult<Prisma.$ProfileUIPayload, S>





  /**
   * Fields of the ProfileUI model
   */ 
  interface ProfileUIFieldRefs {
    readonly isLocked: FieldRef<"ProfileUI", 'Boolean'>
    readonly showAbout: FieldRef<"ProfileUI", 'Boolean'>
    readonly showCerts: FieldRef<"ProfileUI", 'Boolean'>
    readonly showDonation: FieldRef<"ProfileUI", 'Boolean'>
    readonly showHeatMap: FieldRef<"ProfileUI", 'Boolean'>
    readonly showLocation: FieldRef<"ProfileUI", 'Boolean'>
    readonly showName: FieldRef<"ProfileUI", 'Boolean'>
    readonly showPoints: FieldRef<"ProfileUI", 'Boolean'>
    readonly showPortfolio: FieldRef<"ProfileUI", 'Boolean'>
    readonly showTimeLine: FieldRef<"ProfileUI", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ProfileUI without action
   */
  export type ProfileUIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileUI
     */
    select?: ProfileUISelect<ExtArgs> | null
  }



  /**
   * Model SavedChallengeFile
   */





  export type SavedChallengeFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contents?: boolean
    ext?: boolean
    history?: boolean
    key?: boolean
    name?: boolean
  }, ExtArgs["result"]["savedChallengeFile"]>

  export type SavedChallengeFileSelectScalar = {
    contents?: boolean
    ext?: boolean
    history?: boolean
    key?: boolean
    name?: boolean
  }


  export type $SavedChallengeFilePayload = {
    name: "SavedChallengeFile"
    objects: {}
    scalars: {
      contents: string
      ext: string
      history: string[]
      key: string
      name: string
    }
    composites: {}
  }


  type SavedChallengeFileGetPayload<S extends boolean | null | undefined | SavedChallengeFileDefaultArgs> = $Result.GetResult<Prisma.$SavedChallengeFilePayload, S>





  /**
   * Fields of the SavedChallengeFile model
   */ 
  interface SavedChallengeFileFieldRefs {
    readonly contents: FieldRef<"SavedChallengeFile", 'String'>
    readonly ext: FieldRef<"SavedChallengeFile", 'String'>
    readonly history: FieldRef<"SavedChallengeFile", 'String[]'>
    readonly key: FieldRef<"SavedChallengeFile", 'String'>
    readonly name: FieldRef<"SavedChallengeFile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SavedChallengeFile without action
   */
  export type SavedChallengeFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedChallengeFile
     */
    select?: SavedChallengeFileSelect<ExtArgs> | null
  }



  /**
   * Model SavedChallenge
   */





  export type SavedChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    files?: boolean | SavedChallengeFileDefaultArgs<ExtArgs>
    id?: boolean
    lastSavedDate?: boolean
  }, ExtArgs["result"]["savedChallenge"]>

  export type SavedChallengeSelectScalar = {
    id?: boolean
    lastSavedDate?: boolean
  }

  export type SavedChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $SavedChallengePayload = {
    name: "SavedChallenge"
    objects: {}
    scalars: {
      id: string
      lastSavedDate: number
    }
    composites: {
      files: Prisma.$SavedChallengeFilePayload[]
    }
  }


  type SavedChallengeGetPayload<S extends boolean | null | undefined | SavedChallengeDefaultArgs> = $Result.GetResult<Prisma.$SavedChallengePayload, S>





  /**
   * Fields of the SavedChallenge model
   */ 
  interface SavedChallengeFieldRefs {
    readonly id: FieldRef<"SavedChallenge", 'String'>
    readonly lastSavedDate: FieldRef<"SavedChallenge", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * SavedChallenge without action
   */
  export type SavedChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedChallenge
     */
    select?: SavedChallengeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SavedChallengeInclude<ExtArgs> | null
  }



  /**
   * Model CompletedExam
   */





  export type CompletedExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeType?: boolean
    completedDate?: boolean
    examResults?: boolean | ExamResultsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedExam"]>

  export type CompletedExamSelectScalar = {
    id?: boolean
    challengeType?: boolean
    completedDate?: boolean
  }

  export type CompletedExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $CompletedExamPayload = {
    name: "CompletedExam"
    objects: {}
    scalars: {
      id: string
      challengeType: number
      completedDate: number
    }
    composites: {
      examResults: Prisma.$ExamResultsPayload
    }
  }


  type CompletedExamGetPayload<S extends boolean | null | undefined | CompletedExamDefaultArgs> = $Result.GetResult<Prisma.$CompletedExamPayload, S>





  /**
   * Fields of the CompletedExam model
   */ 
  interface CompletedExamFieldRefs {
    readonly id: FieldRef<"CompletedExam", 'String'>
    readonly challengeType: FieldRef<"CompletedExam", 'Int'>
    readonly completedDate: FieldRef<"CompletedExam", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * CompletedExam without action
   */
  export type CompletedExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExam
     */
    select?: CompletedExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompletedExamInclude<ExtArgs> | null
  }



  /**
   * Model ExamResults
   */





  export type ExamResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numberOfCorrectAnswers?: boolean
    numberOfQuestionsInExam?: boolean
    percentCorrect?: boolean
    passingPercent?: boolean
    passed?: boolean
    examTimeInSeconds?: boolean
  }, ExtArgs["result"]["examResults"]>

  export type ExamResultsSelectScalar = {
    numberOfCorrectAnswers?: boolean
    numberOfQuestionsInExam?: boolean
    percentCorrect?: boolean
    passingPercent?: boolean
    passed?: boolean
    examTimeInSeconds?: boolean
  }


  export type $ExamResultsPayload = {
    name: "ExamResults"
    objects: {}
    scalars: {
      numberOfCorrectAnswers: number
      numberOfQuestionsInExam: number
      percentCorrect: number
      passingPercent: number
      passed: boolean
      examTimeInSeconds: number
    }
    composites: {}
  }


  type ExamResultsGetPayload<S extends boolean | null | undefined | ExamResultsDefaultArgs> = $Result.GetResult<Prisma.$ExamResultsPayload, S>





  /**
   * Fields of the ExamResults model
   */ 
  interface ExamResultsFieldRefs {
    readonly numberOfCorrectAnswers: FieldRef<"ExamResults", 'Int'>
    readonly numberOfQuestionsInExam: FieldRef<"ExamResults", 'Int'>
    readonly percentCorrect: FieldRef<"ExamResults", 'Float'>
    readonly passingPercent: FieldRef<"ExamResults", 'Int'>
    readonly passed: FieldRef<"ExamResults", 'Boolean'>
    readonly examTimeInSeconds: FieldRef<"ExamResults", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ExamResults without action
   */
  export type ExamResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResults
     */
    select?: ExamResultsSelect<ExtArgs> | null
  }



  /**
   * Model Question
   */





  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    wrongAnswers?: boolean | AnswerDefaultArgs<ExtArgs>
    correctAnswers?: boolean | AnswerDefaultArgs<ExtArgs>
    deprecated?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    question?: boolean
    deprecated?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $QuestionPayload = {
    name: "Question"
    objects: {}
    scalars: {
      id: string
      question: string
      deprecated: boolean | null
    }
    composites: {
      wrongAnswers: Prisma.$AnswerPayload[]
      correctAnswers: Prisma.$AnswerPayload[]
    }
  }


  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>





  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly deprecated: FieldRef<"Question", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
  }



  /**
   * Model Answer
   */





  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer?: boolean
    deprecated?: boolean
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    answer?: boolean
    deprecated?: boolean
  }


  export type $AnswerPayload = {
    name: "Answer"
    objects: {}
    scalars: {
      id: string
      answer: string
      deprecated: boolean | null
    }
    composites: {}
  }


  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>





  /**
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly answer: FieldRef<"Answer", 'String'>
    readonly deprecated: FieldRef<"Answer", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
  }



  /**
   * Model Prerequisite
   */





  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectScalar = {
    id?: boolean
    title?: boolean
  }


  export type $PrerequisitePayload = {
    name: "Prerequisite"
    objects: {}
    scalars: {
      id: string
      title: string
    }
    composites: {}
  }


  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>





  /**
   * Fields of the Prerequisite model
   */ 
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'String'>
    readonly title: FieldRef<"Prerequisite", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
  }



  /**
   * Model DonationEndDate
   */





  export type DonationEndDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    when?: boolean
  }, ExtArgs["result"]["donationEndDate"]>

  export type DonationEndDateSelectScalar = {
    date?: boolean
    when?: boolean
  }


  export type $DonationEndDatePayload = {
    name: "DonationEndDate"
    objects: {}
    scalars: {
      date: Date
      when: string
    }
    composites: {}
  }


  type DonationEndDateGetPayload<S extends boolean | null | undefined | DonationEndDateDefaultArgs> = $Result.GetResult<Prisma.$DonationEndDatePayload, S>





  /**
   * Fields of the DonationEndDate model
   */ 
  interface DonationEndDateFieldRefs {
    readonly date: FieldRef<"DonationEndDate", 'DateTime'>
    readonly when: FieldRef<"DonationEndDate", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DonationEndDate without action
   */
  export type DonationEndDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationEndDate
     */
    select?: DonationEndDateSelect<ExtArgs> | null
  }



  /**
   * Model DonationStartDate
   */





  export type DonationStartDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    when?: boolean
  }, ExtArgs["result"]["donationStartDate"]>

  export type DonationStartDateSelectScalar = {
    date?: boolean
    when?: boolean
  }


  export type $DonationStartDatePayload = {
    name: "DonationStartDate"
    objects: {}
    scalars: {
      date: Date
      when: string
    }
    composites: {}
  }


  type DonationStartDateGetPayload<S extends boolean | null | undefined | DonationStartDateDefaultArgs> = $Result.GetResult<Prisma.$DonationStartDatePayload, S>





  /**
   * Fields of the DonationStartDate model
   */ 
  interface DonationStartDateFieldRefs {
    readonly date: FieldRef<"DonationStartDate", 'DateTime'>
    readonly when: FieldRef<"DonationStartDate", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DonationStartDate without action
   */
  export type DonationStartDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationStartDate
     */
    select?: DonationStartDateSelect<ExtArgs> | null
  }



  /**
   * Model SurveyResponse
   */





  export type SurveyResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    question?: boolean
    response?: boolean
  }, ExtArgs["result"]["surveyResponse"]>

  export type SurveyResponseSelectScalar = {
    question?: boolean
    response?: boolean
  }


  export type $SurveyResponsePayload = {
    name: "SurveyResponse"
    objects: {}
    scalars: {
      question: string
      response: string
    }
    composites: {}
  }


  type SurveyResponseGetPayload<S extends boolean | null | undefined | SurveyResponseDefaultArgs> = $Result.GetResult<Prisma.$SurveyResponsePayload, S>





  /**
   * Fields of the SurveyResponse model
   */ 
  interface SurveyResponseFieldRefs {
    readonly question: FieldRef<"SurveyResponse", 'String'>
    readonly response: FieldRef<"SurveyResponse", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SurveyResponse without action
   */
  export type SurveyResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponse
     */
    select?: SurveyResponseSelect<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rand: number | null
    updateCount: number | null
    schemaVersion: number | null
    lastUpdatedAtInMS: number | null
  }

  export type UserSumAggregateOutputType = {
    rand: number | null
    updateCount: number | null
    schemaVersion: number | null
    lastUpdatedAtInMS: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    about: string | null
    acceptedPrivacyTerms: boolean | null
    currentChallengeId: string | null
    email: string | null
    emailAuthLinkTTL: Date | null
    emailVerified: boolean | null
    emailVerifyTTL: Date | null
    externalId: string | null
    githubProfile: string | null
    isApisMicroservicesCert: boolean | null
    isBackEndCert: boolean | null
    isBanned: boolean | null
    isCheater: boolean | null
    isDataAnalysisPyCertV7: boolean | null
    isDataVisCert: boolean | null
    isDonating: boolean | null
    isFoundationalCSharpCertV8: boolean | null
    isFrontEndCert: boolean | null
    isFrontEndLibsCert: boolean | null
    isFullStackCert: boolean | null
    isHonest: boolean | null
    isInfosecCertV7: boolean | null
    isInfosecQaCert: boolean | null
    isJsAlgoDataStructCert: boolean | null
    isJsAlgoDataStructCertV8: boolean | null
    isMachineLearningPyCertV7: boolean | null
    isQaCertV7: boolean | null
    isRelationalDatabaseCertV8: boolean | null
    isRespWebDesignCert: boolean | null
    isSciCompPyCertV7: boolean | null
    is2018DataVisCert: boolean | null
    is2018FullStackCert: boolean | null
    isCollegeAlgebraPyCertV8: boolean | null
    isUpcomingPythonCertV8: boolean | null
    keyboardShortcuts: boolean | null
    linkedin: string | null
    location: string | null
    name: string | null
    needsModeration: boolean | null
    newEmail: string | null
    password: string | null
    picture: string | null
    rand: number | null
    sendQuincyEmail: boolean | null
    theme: string | null
    timezone: string | null
    twitter: string | null
    unsubscribeId: string | null
    updateCount: number | null
    username: string | null
    usernameDisplay: string | null
    verificationToken: string | null
    website: string | null
    isClassroomAccount: boolean | null
    schemaVersion: number | null
    lastUpdatedAtInMS: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    about: string | null
    acceptedPrivacyTerms: boolean | null
    currentChallengeId: string | null
    email: string | null
    emailAuthLinkTTL: Date | null
    emailVerified: boolean | null
    emailVerifyTTL: Date | null
    externalId: string | null
    githubProfile: string | null
    isApisMicroservicesCert: boolean | null
    isBackEndCert: boolean | null
    isBanned: boolean | null
    isCheater: boolean | null
    isDataAnalysisPyCertV7: boolean | null
    isDataVisCert: boolean | null
    isDonating: boolean | null
    isFoundationalCSharpCertV8: boolean | null
    isFrontEndCert: boolean | null
    isFrontEndLibsCert: boolean | null
    isFullStackCert: boolean | null
    isHonest: boolean | null
    isInfosecCertV7: boolean | null
    isInfosecQaCert: boolean | null
    isJsAlgoDataStructCert: boolean | null
    isJsAlgoDataStructCertV8: boolean | null
    isMachineLearningPyCertV7: boolean | null
    isQaCertV7: boolean | null
    isRelationalDatabaseCertV8: boolean | null
    isRespWebDesignCert: boolean | null
    isSciCompPyCertV7: boolean | null
    is2018DataVisCert: boolean | null
    is2018FullStackCert: boolean | null
    isCollegeAlgebraPyCertV8: boolean | null
    isUpcomingPythonCertV8: boolean | null
    keyboardShortcuts: boolean | null
    linkedin: string | null
    location: string | null
    name: string | null
    needsModeration: boolean | null
    newEmail: string | null
    password: string | null
    picture: string | null
    rand: number | null
    sendQuincyEmail: boolean | null
    theme: string | null
    timezone: string | null
    twitter: string | null
    unsubscribeId: string | null
    updateCount: number | null
    username: string | null
    usernameDisplay: string | null
    verificationToken: string | null
    website: string | null
    isClassroomAccount: boolean | null
    schemaVersion: number | null
    lastUpdatedAtInMS: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    about: number
    acceptedPrivacyTerms: number
    currentChallengeId: number
    donationEmails: number
    email: number
    emailAuthLinkTTL: number
    emailVerified: number
    emailVerifyTTL: number
    externalId: number
    githubProfile: number
    isApisMicroservicesCert: number
    isBackEndCert: number
    isBanned: number
    isCheater: number
    isDataAnalysisPyCertV7: number
    isDataVisCert: number
    isDonating: number
    isFoundationalCSharpCertV8: number
    isFrontEndCert: number
    isFrontEndLibsCert: number
    isFullStackCert: number
    isHonest: number
    isInfosecCertV7: number
    isInfosecQaCert: number
    isJsAlgoDataStructCert: number
    isJsAlgoDataStructCertV8: number
    isMachineLearningPyCertV7: number
    isQaCertV7: number
    isRelationalDatabaseCertV8: number
    isRespWebDesignCert: number
    isSciCompPyCertV7: number
    is2018DataVisCert: number
    is2018FullStackCert: number
    isCollegeAlgebraPyCertV8: number
    isUpcomingPythonCertV8: number
    keyboardShortcuts: number
    linkedin: number
    location: number
    name: number
    needsModeration: number
    newEmail: number
    password: number
    picture: number
    progressTimestamps: number
    rand: number
    sendQuincyEmail: number
    theme: number
    timezone: number
    twitter: number
    unsubscribeId: number
    updateCount: number
    username: number
    usernameDisplay: number
    verificationToken: number
    website: number
    yearsTopContributor: number
    isClassroomAccount: number
    schemaVersion: number
    lastUpdatedAtInMS: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rand?: true
    updateCount?: true
    schemaVersion?: true
    lastUpdatedAtInMS?: true
  }

  export type UserSumAggregateInputType = {
    rand?: true
    updateCount?: true
    schemaVersion?: true
    lastUpdatedAtInMS?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    about?: true
    acceptedPrivacyTerms?: true
    currentChallengeId?: true
    email?: true
    emailAuthLinkTTL?: true
    emailVerified?: true
    emailVerifyTTL?: true
    externalId?: true
    githubProfile?: true
    isApisMicroservicesCert?: true
    isBackEndCert?: true
    isBanned?: true
    isCheater?: true
    isDataAnalysisPyCertV7?: true
    isDataVisCert?: true
    isDonating?: true
    isFoundationalCSharpCertV8?: true
    isFrontEndCert?: true
    isFrontEndLibsCert?: true
    isFullStackCert?: true
    isHonest?: true
    isInfosecCertV7?: true
    isInfosecQaCert?: true
    isJsAlgoDataStructCert?: true
    isJsAlgoDataStructCertV8?: true
    isMachineLearningPyCertV7?: true
    isQaCertV7?: true
    isRelationalDatabaseCertV8?: true
    isRespWebDesignCert?: true
    isSciCompPyCertV7?: true
    is2018DataVisCert?: true
    is2018FullStackCert?: true
    isCollegeAlgebraPyCertV8?: true
    isUpcomingPythonCertV8?: true
    keyboardShortcuts?: true
    linkedin?: true
    location?: true
    name?: true
    needsModeration?: true
    newEmail?: true
    password?: true
    picture?: true
    rand?: true
    sendQuincyEmail?: true
    theme?: true
    timezone?: true
    twitter?: true
    unsubscribeId?: true
    updateCount?: true
    username?: true
    usernameDisplay?: true
    verificationToken?: true
    website?: true
    isClassroomAccount?: true
    schemaVersion?: true
    lastUpdatedAtInMS?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    about?: true
    acceptedPrivacyTerms?: true
    currentChallengeId?: true
    email?: true
    emailAuthLinkTTL?: true
    emailVerified?: true
    emailVerifyTTL?: true
    externalId?: true
    githubProfile?: true
    isApisMicroservicesCert?: true
    isBackEndCert?: true
    isBanned?: true
    isCheater?: true
    isDataAnalysisPyCertV7?: true
    isDataVisCert?: true
    isDonating?: true
    isFoundationalCSharpCertV8?: true
    isFrontEndCert?: true
    isFrontEndLibsCert?: true
    isFullStackCert?: true
    isHonest?: true
    isInfosecCertV7?: true
    isInfosecQaCert?: true
    isJsAlgoDataStructCert?: true
    isJsAlgoDataStructCertV8?: true
    isMachineLearningPyCertV7?: true
    isQaCertV7?: true
    isRelationalDatabaseCertV8?: true
    isRespWebDesignCert?: true
    isSciCompPyCertV7?: true
    is2018DataVisCert?: true
    is2018FullStackCert?: true
    isCollegeAlgebraPyCertV8?: true
    isUpcomingPythonCertV8?: true
    keyboardShortcuts?: true
    linkedin?: true
    location?: true
    name?: true
    needsModeration?: true
    newEmail?: true
    password?: true
    picture?: true
    rand?: true
    sendQuincyEmail?: true
    theme?: true
    timezone?: true
    twitter?: true
    unsubscribeId?: true
    updateCount?: true
    username?: true
    usernameDisplay?: true
    verificationToken?: true
    website?: true
    isClassroomAccount?: true
    schemaVersion?: true
    lastUpdatedAtInMS?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    about?: true
    acceptedPrivacyTerms?: true
    currentChallengeId?: true
    donationEmails?: true
    email?: true
    emailAuthLinkTTL?: true
    emailVerified?: true
    emailVerifyTTL?: true
    externalId?: true
    githubProfile?: true
    isApisMicroservicesCert?: true
    isBackEndCert?: true
    isBanned?: true
    isCheater?: true
    isDataAnalysisPyCertV7?: true
    isDataVisCert?: true
    isDonating?: true
    isFoundationalCSharpCertV8?: true
    isFrontEndCert?: true
    isFrontEndLibsCert?: true
    isFullStackCert?: true
    isHonest?: true
    isInfosecCertV7?: true
    isInfosecQaCert?: true
    isJsAlgoDataStructCert?: true
    isJsAlgoDataStructCertV8?: true
    isMachineLearningPyCertV7?: true
    isQaCertV7?: true
    isRelationalDatabaseCertV8?: true
    isRespWebDesignCert?: true
    isSciCompPyCertV7?: true
    is2018DataVisCert?: true
    is2018FullStackCert?: true
    isCollegeAlgebraPyCertV8?: true
    isUpcomingPythonCertV8?: true
    keyboardShortcuts?: true
    linkedin?: true
    location?: true
    name?: true
    needsModeration?: true
    newEmail?: true
    password?: true
    picture?: true
    progressTimestamps?: true
    rand?: true
    sendQuincyEmail?: true
    theme?: true
    timezone?: true
    twitter?: true
    unsubscribeId?: true
    updateCount?: true
    username?: true
    usernameDisplay?: true
    verificationToken?: true
    website?: true
    yearsTopContributor?: true
    isClassroomAccount?: true
    schemaVersion?: true
    lastUpdatedAtInMS?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    about: string
    acceptedPrivacyTerms: boolean
    currentChallengeId: string | null
    donationEmails: string[]
    email: string
    emailAuthLinkTTL: Date | null
    emailVerified: boolean
    emailVerifyTTL: Date | null
    externalId: string
    githubProfile: string | null
    isApisMicroservicesCert: boolean | null
    isBackEndCert: boolean | null
    isBanned: boolean | null
    isCheater: boolean | null
    isDataAnalysisPyCertV7: boolean | null
    isDataVisCert: boolean | null
    isDonating: boolean
    isFoundationalCSharpCertV8: boolean | null
    isFrontEndCert: boolean | null
    isFrontEndLibsCert: boolean | null
    isFullStackCert: boolean | null
    isHonest: boolean | null
    isInfosecCertV7: boolean | null
    isInfosecQaCert: boolean | null
    isJsAlgoDataStructCert: boolean | null
    isJsAlgoDataStructCertV8: boolean | null
    isMachineLearningPyCertV7: boolean | null
    isQaCertV7: boolean | null
    isRelationalDatabaseCertV8: boolean | null
    isRespWebDesignCert: boolean | null
    isSciCompPyCertV7: boolean | null
    is2018DataVisCert: boolean | null
    is2018FullStackCert: boolean | null
    isCollegeAlgebraPyCertV8: boolean | null
    isUpcomingPythonCertV8: boolean | null
    keyboardShortcuts: boolean | null
    linkedin: string | null
    location: string | null
    name: string | null
    needsModeration: boolean | null
    newEmail: string | null
    password: string | null
    picture: string
    progressTimestamps: JsonValue | null
    rand: number | null
    sendQuincyEmail: boolean
    theme: string | null
    timezone: string | null
    twitter: string | null
    unsubscribeId: string
    updateCount: number | null
    username: string
    usernameDisplay: string | null
    verificationToken: string | null
    website: string | null
    yearsTopContributor: string[]
    isClassroomAccount: boolean | null
    schemaVersion: number
    lastUpdatedAtInMS: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    about?: boolean
    acceptedPrivacyTerms?: boolean
    completedChallenges?: boolean | CompletedChallengeDefaultArgs<ExtArgs>
    completedExams?: boolean | CompletedExamDefaultArgs<ExtArgs>
    currentChallengeId?: boolean
    donationEmails?: boolean
    email?: boolean
    emailAuthLinkTTL?: boolean
    emailVerified?: boolean
    emailVerifyTTL?: boolean
    externalId?: boolean
    githubProfile?: boolean
    isApisMicroservicesCert?: boolean
    isBackEndCert?: boolean
    isBanned?: boolean
    isCheater?: boolean
    isDataAnalysisPyCertV7?: boolean
    isDataVisCert?: boolean
    isDonating?: boolean
    isFoundationalCSharpCertV8?: boolean
    isFrontEndCert?: boolean
    isFrontEndLibsCert?: boolean
    isFullStackCert?: boolean
    isHonest?: boolean
    isInfosecCertV7?: boolean
    isInfosecQaCert?: boolean
    isJsAlgoDataStructCert?: boolean
    isJsAlgoDataStructCertV8?: boolean
    isMachineLearningPyCertV7?: boolean
    isQaCertV7?: boolean
    isRelationalDatabaseCertV8?: boolean
    isRespWebDesignCert?: boolean
    isSciCompPyCertV7?: boolean
    is2018DataVisCert?: boolean
    is2018FullStackCert?: boolean
    isCollegeAlgebraPyCertV8?: boolean
    isUpcomingPythonCertV8?: boolean
    keyboardShortcuts?: boolean
    linkedin?: boolean
    location?: boolean
    name?: boolean
    needsModeration?: boolean
    newEmail?: boolean
    partiallyCompletedChallenges?: boolean | PartiallyCompletedChallengeDefaultArgs<ExtArgs>
    password?: boolean
    picture?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    profileUI?: boolean | ProfileUIDefaultArgs<ExtArgs>
    progressTimestamps?: boolean
    rand?: boolean
    savedChallenges?: boolean | SavedChallengeDefaultArgs<ExtArgs>
    sendQuincyEmail?: boolean
    theme?: boolean
    timezone?: boolean
    twitter?: boolean
    unsubscribeId?: boolean
    updateCount?: boolean
    username?: boolean
    usernameDisplay?: boolean
    verificationToken?: boolean
    website?: boolean
    yearsTopContributor?: boolean
    isClassroomAccount?: boolean
    schemaVersion?: boolean
    lastUpdatedAtInMS?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    about?: boolean
    acceptedPrivacyTerms?: boolean
    currentChallengeId?: boolean
    donationEmails?: boolean
    email?: boolean
    emailAuthLinkTTL?: boolean
    emailVerified?: boolean
    emailVerifyTTL?: boolean
    externalId?: boolean
    githubProfile?: boolean
    isApisMicroservicesCert?: boolean
    isBackEndCert?: boolean
    isBanned?: boolean
    isCheater?: boolean
    isDataAnalysisPyCertV7?: boolean
    isDataVisCert?: boolean
    isDonating?: boolean
    isFoundationalCSharpCertV8?: boolean
    isFrontEndCert?: boolean
    isFrontEndLibsCert?: boolean
    isFullStackCert?: boolean
    isHonest?: boolean
    isInfosecCertV7?: boolean
    isInfosecQaCert?: boolean
    isJsAlgoDataStructCert?: boolean
    isJsAlgoDataStructCertV8?: boolean
    isMachineLearningPyCertV7?: boolean
    isQaCertV7?: boolean
    isRelationalDatabaseCertV8?: boolean
    isRespWebDesignCert?: boolean
    isSciCompPyCertV7?: boolean
    is2018DataVisCert?: boolean
    is2018FullStackCert?: boolean
    isCollegeAlgebraPyCertV8?: boolean
    isUpcomingPythonCertV8?: boolean
    keyboardShortcuts?: boolean
    linkedin?: boolean
    location?: boolean
    name?: boolean
    needsModeration?: boolean
    newEmail?: boolean
    password?: boolean
    picture?: boolean
    progressTimestamps?: boolean
    rand?: boolean
    sendQuincyEmail?: boolean
    theme?: boolean
    timezone?: boolean
    twitter?: boolean
    unsubscribeId?: boolean
    updateCount?: boolean
    username?: boolean
    usernameDisplay?: boolean
    verificationToken?: boolean
    website?: boolean
    yearsTopContributor?: boolean
    isClassroomAccount?: boolean
    schemaVersion?: boolean
    lastUpdatedAtInMS?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      about: string
      acceptedPrivacyTerms: boolean
      currentChallengeId: string | null
      donationEmails: string[]
      email: string
      emailAuthLinkTTL: Date | null
      emailVerified: boolean
      emailVerifyTTL: Date | null
      externalId: string
      githubProfile: string | null
      isApisMicroservicesCert: boolean | null
      isBackEndCert: boolean | null
      isBanned: boolean | null
      isCheater: boolean | null
      isDataAnalysisPyCertV7: boolean | null
      isDataVisCert: boolean | null
      isDonating: boolean
      isFoundationalCSharpCertV8: boolean | null
      isFrontEndCert: boolean | null
      isFrontEndLibsCert: boolean | null
      isFullStackCert: boolean | null
      isHonest: boolean | null
      isInfosecCertV7: boolean | null
      isInfosecQaCert: boolean | null
      isJsAlgoDataStructCert: boolean | null
      isJsAlgoDataStructCertV8: boolean | null
      isMachineLearningPyCertV7: boolean | null
      isQaCertV7: boolean | null
      isRelationalDatabaseCertV8: boolean | null
      isRespWebDesignCert: boolean | null
      isSciCompPyCertV7: boolean | null
      is2018DataVisCert: boolean | null
      is2018FullStackCert: boolean | null
      isCollegeAlgebraPyCertV8: boolean | null
      isUpcomingPythonCertV8: boolean | null
      keyboardShortcuts: boolean | null
      linkedin: string | null
      location: string | null
      name: string | null
      needsModeration: boolean | null
      newEmail: string | null
      password: string | null
      picture: string
      progressTimestamps: Prisma.JsonValue | null
      /**
       * A random number between 0 and 1.
       * 
       * Valuable for selectively performing random logic.
       */
      rand: number | null
      sendQuincyEmail: boolean
      theme: string | null
      timezone: string | null
      twitter: string | null
      unsubscribeId: string
      /**
       * Used to track the number of times the user's record was written to.
       * 
       * This has the main benefit of allowing concurrent ops to check for race conditions.
       */
      updateCount: number | null
      username: string
      usernameDisplay: string | null
      verificationToken: string | null
      website: string | null
      yearsTopContributor: string[]
      isClassroomAccount: boolean | null
      /**
       * The record's last migrated version.
       * 
       * A version of `0` indicates that the record has never been migrated/normalized.
       */
      schemaVersion: number
      /**
       * The last time in milliseconds since epoch that the record was updated.
       */
      lastUpdatedAtInMS: number | null
    }, ExtArgs["result"]["user"]>
    composites: {
      completedChallenges: Prisma.$CompletedChallengePayload[]
      completedExams: Prisma.$CompletedExamPayload[]
      partiallyCompletedChallenges: Prisma.$PartiallyCompletedChallengePayload[]
      portfolio: Prisma.$PortfolioPayload[]
      profileUI: Prisma.$ProfileUIPayload | null
      savedChallenges: Prisma.$SavedChallengePayload[]
    }
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: userFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: userAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly about: FieldRef<"user", 'String'>
    readonly acceptedPrivacyTerms: FieldRef<"user", 'Boolean'>
    readonly currentChallengeId: FieldRef<"user", 'String'>
    readonly donationEmails: FieldRef<"user", 'String[]'>
    readonly email: FieldRef<"user", 'String'>
    readonly emailAuthLinkTTL: FieldRef<"user", 'DateTime'>
    readonly emailVerified: FieldRef<"user", 'Boolean'>
    readonly emailVerifyTTL: FieldRef<"user", 'DateTime'>
    readonly externalId: FieldRef<"user", 'String'>
    readonly githubProfile: FieldRef<"user", 'String'>
    readonly isApisMicroservicesCert: FieldRef<"user", 'Boolean'>
    readonly isBackEndCert: FieldRef<"user", 'Boolean'>
    readonly isBanned: FieldRef<"user", 'Boolean'>
    readonly isCheater: FieldRef<"user", 'Boolean'>
    readonly isDataAnalysisPyCertV7: FieldRef<"user", 'Boolean'>
    readonly isDataVisCert: FieldRef<"user", 'Boolean'>
    readonly isDonating: FieldRef<"user", 'Boolean'>
    readonly isFoundationalCSharpCertV8: FieldRef<"user", 'Boolean'>
    readonly isFrontEndCert: FieldRef<"user", 'Boolean'>
    readonly isFrontEndLibsCert: FieldRef<"user", 'Boolean'>
    readonly isFullStackCert: FieldRef<"user", 'Boolean'>
    readonly isHonest: FieldRef<"user", 'Boolean'>
    readonly isInfosecCertV7: FieldRef<"user", 'Boolean'>
    readonly isInfosecQaCert: FieldRef<"user", 'Boolean'>
    readonly isJsAlgoDataStructCert: FieldRef<"user", 'Boolean'>
    readonly isJsAlgoDataStructCertV8: FieldRef<"user", 'Boolean'>
    readonly isMachineLearningPyCertV7: FieldRef<"user", 'Boolean'>
    readonly isQaCertV7: FieldRef<"user", 'Boolean'>
    readonly isRelationalDatabaseCertV8: FieldRef<"user", 'Boolean'>
    readonly isRespWebDesignCert: FieldRef<"user", 'Boolean'>
    readonly isSciCompPyCertV7: FieldRef<"user", 'Boolean'>
    readonly is2018DataVisCert: FieldRef<"user", 'Boolean'>
    readonly is2018FullStackCert: FieldRef<"user", 'Boolean'>
    readonly isCollegeAlgebraPyCertV8: FieldRef<"user", 'Boolean'>
    readonly isUpcomingPythonCertV8: FieldRef<"user", 'Boolean'>
    readonly keyboardShortcuts: FieldRef<"user", 'Boolean'>
    readonly linkedin: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly needsModeration: FieldRef<"user", 'Boolean'>
    readonly newEmail: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly picture: FieldRef<"user", 'String'>
    readonly progressTimestamps: FieldRef<"user", 'Json'>
    readonly rand: FieldRef<"user", 'Float'>
    readonly sendQuincyEmail: FieldRef<"user", 'Boolean'>
    readonly theme: FieldRef<"user", 'String'>
    readonly timezone: FieldRef<"user", 'String'>
    readonly twitter: FieldRef<"user", 'String'>
    readonly unsubscribeId: FieldRef<"user", 'String'>
    readonly updateCount: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly usernameDisplay: FieldRef<"user", 'String'>
    readonly verificationToken: FieldRef<"user", 'String'>
    readonly website: FieldRef<"user", 'String'>
    readonly yearsTopContributor: FieldRef<"user", 'String[]'>
    readonly isClassroomAccount: FieldRef<"user", 'Boolean'>
    readonly schemaVersion: FieldRef<"user", 'Int'>
    readonly lastUpdatedAtInMS: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model AccessToken
   */

  export type AggregateAccessToken = {
    _count: AccessTokenCountAggregateOutputType | null
    _avg: AccessTokenAvgAggregateOutputType | null
    _sum: AccessTokenSumAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  export type AccessTokenAvgAggregateOutputType = {
    ttl: number | null
  }

  export type AccessTokenSumAggregateOutputType = {
    ttl: number | null
  }

  export type AccessTokenMinAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type AccessTokenMaxAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type AccessTokenCountAggregateOutputType = {
    id: number
    created: number
    ttl: number
    userId: number
    _all: number
  }


  export type AccessTokenAvgAggregateInputType = {
    ttl?: true
  }

  export type AccessTokenSumAggregateInputType = {
    ttl?: true
  }

  export type AccessTokenMinAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type AccessTokenMaxAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type AccessTokenCountAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
    _all?: true
  }

  export type AccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessToken to aggregate.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessTokens
    **/
    _count?: true | AccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessTokenMaxAggregateInputType
  }

  export type GetAccessTokenAggregateType<T extends AccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessToken[P]>
      : GetScalarType<T[P], AggregateAccessToken[P]>
  }




  export type AccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithAggregationInput | AccessTokenOrderByWithAggregationInput[]
    by: AccessTokenScalarFieldEnum[] | AccessTokenScalarFieldEnum
    having?: AccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessTokenCountAggregateInputType | true
    _avg?: AccessTokenAvgAggregateInputType
    _sum?: AccessTokenSumAggregateInputType
    _min?: AccessTokenMinAggregateInputType
    _max?: AccessTokenMaxAggregateInputType
  }

  export type AccessTokenGroupByOutputType = {
    id: string
    created: Date
    ttl: number
    userId: string
    _count: AccessTokenCountAggregateOutputType | null
    _avg: AccessTokenAvgAggregateOutputType | null
    _sum: AccessTokenSumAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  type GetAccessTokenGroupByPayload<T extends AccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }, ExtArgs["result"]["accessToken"]>

  export type AccessTokenSelectScalar = {
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }


  export type $AccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created: Date
      ttl: number
      userId: string
    }, ExtArgs["result"]["accessToken"]>
    composites: {}
  }


  type AccessTokenGetPayload<S extends boolean | null | undefined | AccessTokenDefaultArgs> = $Result.GetResult<Prisma.$AccessTokenPayload, S>

  type AccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccessTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccessTokenCountAggregateInputType | true
    }

  export interface AccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessToken'], meta: { name: 'AccessToken' } }
    /**
     * Find zero or one AccessToken that matches the filter.
     * @param {AccessTokenFindUniqueArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccessTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccessToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccessTokenFindUniqueOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccessTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccessTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindFirstArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccessTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessTokens
     * const accessTokens = await prisma.accessToken.findMany()
     * 
     * // Get first 10 AccessTokens
     * const accessTokens = await prisma.accessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccessTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccessToken.
     * @param {AccessTokenCreateArgs} args - Arguments to create a AccessToken.
     * @example
     * // Create one AccessToken
     * const AccessToken = await prisma.accessToken.create({
     *   data: {
     *     // ... data to create a AccessToken
     *   }
     * })
     * 
    **/
    create<T extends AccessTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenCreateArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccessTokens.
     *     @param {AccessTokenCreateManyArgs} args - Arguments to create many AccessTokens.
     *     @example
     *     // Create many AccessTokens
     *     const accessToken = await prisma.accessToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccessTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessToken.
     * @param {AccessTokenDeleteArgs} args - Arguments to delete one AccessToken.
     * @example
     * // Delete one AccessToken
     * const AccessToken = await prisma.accessToken.delete({
     *   where: {
     *     // ... filter to delete one AccessToken
     *   }
     * })
     * 
    **/
    delete<T extends AccessTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenDeleteArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccessToken.
     * @param {AccessTokenUpdateArgs} args - Arguments to update one AccessToken.
     * @example
     * // Update one AccessToken
     * const accessToken = await prisma.accessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccessTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpdateArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccessTokens.
     * @param {AccessTokenDeleteManyArgs} args - Arguments to filter AccessTokens to delete.
     * @example
     * // Delete a few AccessTokens
     * const { count } = await prisma.accessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccessTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessTokens
     * const accessToken = await prisma.accessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccessTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessToken.
     * @param {AccessTokenUpsertArgs} args - Arguments to update or create a AccessToken.
     * @example
     * // Update or create a AccessToken
     * const accessToken = await prisma.accessToken.upsert({
     *   create: {
     *     // ... data to create a AccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessToken we want to update
     *   }
     * })
    **/
    upsert<T extends AccessTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccessTokenUpsertArgs<ExtArgs>>
    ): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * @param {AccessTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AccessTokenFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccessToken.
     * @param {AccessTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AccessTokenAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenCountArgs} args - Arguments to filter AccessTokens to count.
     * @example
     * // Count the number of AccessTokens
     * const count = await prisma.accessToken.count({
     *   where: {
     *     // ... the filter for the AccessTokens we want to count
     *   }
     * })
    **/
    count<T extends AccessTokenCountArgs>(
      args?: Subset<T, AccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessTokenAggregateArgs>(args: Subset<T, AccessTokenAggregateArgs>): Prisma.PrismaPromise<GetAccessTokenAggregateType<T>>

    /**
     * Group by AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccessTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessToken model
   */
  readonly fields: AccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccessToken model
   */ 
  interface AccessTokenFieldRefs {
    readonly id: FieldRef<"AccessToken", 'String'>
    readonly created: FieldRef<"AccessToken", 'DateTime'>
    readonly ttl: FieldRef<"AccessToken", 'Int'>
    readonly userId: FieldRef<"AccessToken", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AccessToken findUnique
   */
  export type AccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken findUniqueOrThrow
   */
  export type AccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken findFirst
   */
  export type AccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken findFirstOrThrow
   */
  export type AccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken findMany
   */
  export type AccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }


  /**
   * AccessToken create
   */
  export type AccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a AccessToken.
     */
    data: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
  }


  /**
   * AccessToken createMany
   */
  export type AccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokenCreateManyInput | AccessTokenCreateManyInput[]
  }


  /**
   * AccessToken update
   */
  export type AccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a AccessToken.
     */
    data: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
    /**
     * Choose, which AccessToken to update.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken updateMany
   */
  export type AccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokenWhereInput
  }


  /**
   * AccessToken upsert
   */
  export type AccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the AccessToken to update in case it exists.
     */
    where: AccessTokenWhereUniqueInput
    /**
     * In case the AccessToken found by the `where` argument doesn't exist, create a new AccessToken with this data.
     */
    create: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
    /**
     * In case the AccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
  }


  /**
   * AccessToken delete
   */
  export type AccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Filter which AccessToken to delete.
     */
    where: AccessTokenWhereUniqueInput
  }


  /**
   * AccessToken deleteMany
   */
  export type AccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to delete
     */
    where?: AccessTokenWhereInput
  }


  /**
   * AccessToken findRaw
   */
  export type AccessTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccessToken aggregateRaw
   */
  export type AccessTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AccessToken without action
   */
  export type AccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
  }



  /**
   * Model AuthToken
   */

  export type AggregateAuthToken = {
    _count: AuthTokenCountAggregateOutputType | null
    _avg: AuthTokenAvgAggregateOutputType | null
    _sum: AuthTokenSumAggregateOutputType | null
    _min: AuthTokenMinAggregateOutputType | null
    _max: AuthTokenMaxAggregateOutputType | null
  }

  export type AuthTokenAvgAggregateOutputType = {
    ttl: number | null
  }

  export type AuthTokenSumAggregateOutputType = {
    ttl: number | null
  }

  export type AuthTokenMinAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type AuthTokenMaxAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type AuthTokenCountAggregateOutputType = {
    id: number
    created: number
    ttl: number
    userId: number
    _all: number
  }


  export type AuthTokenAvgAggregateInputType = {
    ttl?: true
  }

  export type AuthTokenSumAggregateInputType = {
    ttl?: true
  }

  export type AuthTokenMinAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type AuthTokenMaxAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type AuthTokenCountAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
    _all?: true
  }

  export type AuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthToken to aggregate.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthTokens
    **/
    _count?: true | AuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthTokenMaxAggregateInputType
  }

  export type GetAuthTokenAggregateType<T extends AuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthToken[P]>
      : GetScalarType<T[P], AggregateAuthToken[P]>
  }




  export type AuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthTokenWhereInput
    orderBy?: AuthTokenOrderByWithAggregationInput | AuthTokenOrderByWithAggregationInput[]
    by: AuthTokenScalarFieldEnum[] | AuthTokenScalarFieldEnum
    having?: AuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthTokenCountAggregateInputType | true
    _avg?: AuthTokenAvgAggregateInputType
    _sum?: AuthTokenSumAggregateInputType
    _min?: AuthTokenMinAggregateInputType
    _max?: AuthTokenMaxAggregateInputType
  }

  export type AuthTokenGroupByOutputType = {
    id: string
    created: Date
    ttl: number
    userId: string
    _count: AuthTokenCountAggregateOutputType | null
    _avg: AuthTokenAvgAggregateOutputType | null
    _sum: AuthTokenSumAggregateOutputType | null
    _min: AuthTokenMinAggregateOutputType | null
    _max: AuthTokenMaxAggregateOutputType | null
  }

  type GetAuthTokenGroupByPayload<T extends AuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type AuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }, ExtArgs["result"]["authToken"]>

  export type AuthTokenSelectScalar = {
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }


  export type $AuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created: Date
      ttl: number
      userId: string
    }, ExtArgs["result"]["authToken"]>
    composites: {}
  }


  type AuthTokenGetPayload<S extends boolean | null | undefined | AuthTokenDefaultArgs> = $Result.GetResult<Prisma.$AuthTokenPayload, S>

  type AuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AuthTokenCountAggregateInputType | true
    }

  export interface AuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthToken'], meta: { name: 'AuthToken' } }
    /**
     * Find zero or one AuthToken that matches the filter.
     * @param {AuthTokenFindUniqueArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AuthToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthTokenFindUniqueOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenFindFirstArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthTokens
     * const authTokens = await prisma.authToken.findMany()
     * 
     * // Get first 10 AuthTokens
     * const authTokens = await prisma.authToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authTokenWithIdOnly = await prisma.authToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AuthToken.
     * @param {AuthTokenCreateArgs} args - Arguments to create a AuthToken.
     * @example
     * // Create one AuthToken
     * const AuthToken = await prisma.authToken.create({
     *   data: {
     *     // ... data to create a AuthToken
     *   }
     * })
     * 
    **/
    create<T extends AuthTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenCreateArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AuthTokens.
     *     @param {AuthTokenCreateManyArgs} args - Arguments to create many AuthTokens.
     *     @example
     *     // Create many AuthTokens
     *     const authToken = await prisma.authToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthToken.
     * @param {AuthTokenDeleteArgs} args - Arguments to delete one AuthToken.
     * @example
     * // Delete one AuthToken
     * const AuthToken = await prisma.authToken.delete({
     *   where: {
     *     // ... filter to delete one AuthToken
     *   }
     * })
     * 
    **/
    delete<T extends AuthTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenDeleteArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AuthToken.
     * @param {AuthTokenUpdateArgs} args - Arguments to update one AuthToken.
     * @example
     * // Update one AuthToken
     * const authToken = await prisma.authToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenUpdateArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AuthTokens.
     * @param {AuthTokenDeleteManyArgs} args - Arguments to filter AuthTokens to delete.
     * @example
     * // Delete a few AuthTokens
     * const { count } = await prisma.authToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthTokens
     * const authToken = await prisma.authToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthToken.
     * @param {AuthTokenUpsertArgs} args - Arguments to update or create a AuthToken.
     * @example
     * // Update or create a AuthToken
     * const authToken = await prisma.authToken.upsert({
     *   create: {
     *     // ... data to create a AuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthToken we want to update
     *   }
     * })
    **/
    upsert<T extends AuthTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthTokenUpsertArgs<ExtArgs>>
    ): Prisma__AuthTokenClient<$Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AuthTokens that matches the filter.
     * @param {AuthTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const authToken = await prisma.authToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AuthTokenFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AuthToken.
     * @param {AuthTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const authToken = await prisma.authToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AuthTokenAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenCountArgs} args - Arguments to filter AuthTokens to count.
     * @example
     * // Count the number of AuthTokens
     * const count = await prisma.authToken.count({
     *   where: {
     *     // ... the filter for the AuthTokens we want to count
     *   }
     * })
    **/
    count<T extends AuthTokenCountArgs>(
      args?: Subset<T, AuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthTokenAggregateArgs>(args: Subset<T, AuthTokenAggregateArgs>): Prisma.PrismaPromise<GetAuthTokenAggregateType<T>>

    /**
     * Group by AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: AuthTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthToken model
   */
  readonly fields: AuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AuthToken model
   */ 
  interface AuthTokenFieldRefs {
    readonly id: FieldRef<"AuthToken", 'String'>
    readonly created: FieldRef<"AuthToken", 'DateTime'>
    readonly ttl: FieldRef<"AuthToken", 'Int'>
    readonly userId: FieldRef<"AuthToken", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AuthToken findUnique
   */
  export type AuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where: AuthTokenWhereUniqueInput
  }


  /**
   * AuthToken findUniqueOrThrow
   */
  export type AuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where: AuthTokenWhereUniqueInput
  }


  /**
   * AuthToken findFirst
   */
  export type AuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }


  /**
   * AuthToken findFirstOrThrow
   */
  export type AuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }


  /**
   * AuthToken findMany
   */
  export type AuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter, which AuthTokens to fetch.
     */
    where?: AuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: AuthTokenOrderByWithRelationInput | AuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthTokens.
     */
    cursor?: AuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthTokens.
     */
    skip?: number
    distinct?: AuthTokenScalarFieldEnum | AuthTokenScalarFieldEnum[]
  }


  /**
   * AuthToken create
   */
  export type AuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a AuthToken.
     */
    data: XOR<AuthTokenCreateInput, AuthTokenUncheckedCreateInput>
  }


  /**
   * AuthToken createMany
   */
  export type AuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthTokens.
     */
    data: AuthTokenCreateManyInput | AuthTokenCreateManyInput[]
  }


  /**
   * AuthToken update
   */
  export type AuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a AuthToken.
     */
    data: XOR<AuthTokenUpdateInput, AuthTokenUncheckedUpdateInput>
    /**
     * Choose, which AuthToken to update.
     */
    where: AuthTokenWhereUniqueInput
  }


  /**
   * AuthToken updateMany
   */
  export type AuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthTokens.
     */
    data: XOR<AuthTokenUpdateManyMutationInput, AuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which AuthTokens to update
     */
    where?: AuthTokenWhereInput
  }


  /**
   * AuthToken upsert
   */
  export type AuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the AuthToken to update in case it exists.
     */
    where: AuthTokenWhereUniqueInput
    /**
     * In case the AuthToken found by the `where` argument doesn't exist, create a new AuthToken with this data.
     */
    create: XOR<AuthTokenCreateInput, AuthTokenUncheckedCreateInput>
    /**
     * In case the AuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthTokenUpdateInput, AuthTokenUncheckedUpdateInput>
  }


  /**
   * AuthToken delete
   */
  export type AuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
    /**
     * Filter which AuthToken to delete.
     */
    where: AuthTokenWhereUniqueInput
  }


  /**
   * AuthToken deleteMany
   */
  export type AuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthTokens to delete
     */
    where?: AuthTokenWhereInput
  }


  /**
   * AuthToken findRaw
   */
  export type AuthTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AuthToken aggregateRaw
   */
  export type AuthTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AuthToken without action
   */
  export type AuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: AuthTokenSelect<ExtArgs> | null
  }



  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    amount: number | null
  }

  export type DonationSumAggregateOutputType = {
    amount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    amount: number | null
    customerId: string | null
    duration: string | null
    email: string | null
    provider: string | null
    subscriptionId: string | null
    userId: string | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    customerId: string | null
    duration: string | null
    email: string | null
    provider: string | null
    subscriptionId: string | null
    userId: string | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    customerId: number
    duration: number
    email: number
    provider: number
    subscriptionId: number
    userId: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    amount?: true
  }

  export type DonationSumAggregateInputType = {
    amount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    customerId?: true
    duration?: true
    email?: true
    provider?: true
    subscriptionId?: true
    userId?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    customerId?: true
    duration?: true
    email?: true
    provider?: true
    subscriptionId?: true
    userId?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    customerId?: true
    duration?: true
    email?: true
    provider?: true
    subscriptionId?: true
    userId?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    amount: number
    customerId: string
    duration: string | null
    email: string
    provider: string
    subscriptionId: string
    userId: string
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    customerId?: boolean
    duration?: boolean
    email?: boolean
    endDate?: boolean | DonationEndDateDefaultArgs<ExtArgs>
    provider?: boolean
    startDate?: boolean | DonationStartDateDefaultArgs<ExtArgs>
    subscriptionId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    customerId?: boolean
    duration?: boolean
    email?: boolean
    provider?: boolean
    subscriptionId?: boolean
    userId?: boolean
  }

  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      customerId: string
      duration: string | null
      email: string
      provider: string
      subscriptionId: string
      userId: string
    }, ExtArgs["result"]["donation"]>
    composites: {
      endDate: Prisma.$DonationEndDatePayload | null
      startDate: Prisma.$DonationStartDatePayload
    }
  }


  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DonationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Donation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DonationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DonationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
    **/
    create<T extends DonationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DonationCreateArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Donations.
     *     @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     *     @example
     *     // Create many Donations
     *     const donation = await prisma.donation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DonationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
    **/
    delete<T extends DonationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DonationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DonationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DonationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
    **/
    upsert<T extends DonationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>
    ): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Donations that matches the filter.
     * @param {DonationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const donation = await prisma.donation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DonationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Donation.
     * @param {DonationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const donation = await prisma.donation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DonationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Donation model
   */ 
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'Int'>
    readonly customerId: FieldRef<"Donation", 'String'>
    readonly duration: FieldRef<"Donation", 'String'>
    readonly email: FieldRef<"Donation", 'String'>
    readonly provider: FieldRef<"Donation", 'String'>
    readonly subscriptionId: FieldRef<"Donation", 'String'>
    readonly userId: FieldRef<"Donation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }


  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }


  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }


  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }


  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }


  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }


  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
  }


  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }


  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
  }


  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }


  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }


  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
  }


  /**
   * Donation findRaw
   */
  export type DonationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Donation aggregateRaw
   */
  export type DonationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DonationInclude<ExtArgs> | null
  }



  /**
   * Model UserRateLimit
   */

  export type AggregateUserRateLimit = {
    _count: UserRateLimitCountAggregateOutputType | null
    _avg: UserRateLimitAvgAggregateOutputType | null
    _sum: UserRateLimitSumAggregateOutputType | null
    _min: UserRateLimitMinAggregateOutputType | null
    _max: UserRateLimitMaxAggregateOutputType | null
  }

  export type UserRateLimitAvgAggregateOutputType = {
    counter: number | null
  }

  export type UserRateLimitSumAggregateOutputType = {
    counter: number | null
  }

  export type UserRateLimitMinAggregateOutputType = {
    id: string | null
    counter: number | null
    expirationDate: Date | null
  }

  export type UserRateLimitMaxAggregateOutputType = {
    id: string | null
    counter: number | null
    expirationDate: Date | null
  }

  export type UserRateLimitCountAggregateOutputType = {
    id: number
    counter: number
    expirationDate: number
    _all: number
  }


  export type UserRateLimitAvgAggregateInputType = {
    counter?: true
  }

  export type UserRateLimitSumAggregateInputType = {
    counter?: true
  }

  export type UserRateLimitMinAggregateInputType = {
    id?: true
    counter?: true
    expirationDate?: true
  }

  export type UserRateLimitMaxAggregateInputType = {
    id?: true
    counter?: true
    expirationDate?: true
  }

  export type UserRateLimitCountAggregateInputType = {
    id?: true
    counter?: true
    expirationDate?: true
    _all?: true
  }

  export type UserRateLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRateLimit to aggregate.
     */
    where?: UserRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRateLimits to fetch.
     */
    orderBy?: UserRateLimitOrderByWithRelationInput | UserRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRateLimits
    **/
    _count?: true | UserRateLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRateLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRateLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRateLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRateLimitMaxAggregateInputType
  }

  export type GetUserRateLimitAggregateType<T extends UserRateLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRateLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRateLimit[P]>
      : GetScalarType<T[P], AggregateUserRateLimit[P]>
  }




  export type UserRateLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRateLimitWhereInput
    orderBy?: UserRateLimitOrderByWithAggregationInput | UserRateLimitOrderByWithAggregationInput[]
    by: UserRateLimitScalarFieldEnum[] | UserRateLimitScalarFieldEnum
    having?: UserRateLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRateLimitCountAggregateInputType | true
    _avg?: UserRateLimitAvgAggregateInputType
    _sum?: UserRateLimitSumAggregateInputType
    _min?: UserRateLimitMinAggregateInputType
    _max?: UserRateLimitMaxAggregateInputType
  }

  export type UserRateLimitGroupByOutputType = {
    id: string
    counter: number
    expirationDate: Date
    _count: UserRateLimitCountAggregateOutputType | null
    _avg: UserRateLimitAvgAggregateOutputType | null
    _sum: UserRateLimitSumAggregateOutputType | null
    _min: UserRateLimitMinAggregateOutputType | null
    _max: UserRateLimitMaxAggregateOutputType | null
  }

  type GetUserRateLimitGroupByPayload<T extends UserRateLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRateLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRateLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRateLimitGroupByOutputType[P]>
            : GetScalarType<T[P], UserRateLimitGroupByOutputType[P]>
        }
      >
    >


  export type UserRateLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counter?: boolean
    expirationDate?: boolean
  }, ExtArgs["result"]["userRateLimit"]>

  export type UserRateLimitSelectScalar = {
    id?: boolean
    counter?: boolean
    expirationDate?: boolean
  }


  export type $UserRateLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRateLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      counter: number
      expirationDate: Date
    }, ExtArgs["result"]["userRateLimit"]>
    composites: {}
  }


  type UserRateLimitGetPayload<S extends boolean | null | undefined | UserRateLimitDefaultArgs> = $Result.GetResult<Prisma.$UserRateLimitPayload, S>

  type UserRateLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRateLimitFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserRateLimitCountAggregateInputType | true
    }

  export interface UserRateLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRateLimit'], meta: { name: 'UserRateLimit' } }
    /**
     * Find zero or one UserRateLimit that matches the filter.
     * @param {UserRateLimitFindUniqueArgs} args - Arguments to find a UserRateLimit
     * @example
     * // Get one UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRateLimitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserRateLimit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserRateLimitFindUniqueOrThrowArgs} args - Arguments to find a UserRateLimit
     * @example
     * // Get one UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRateLimitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserRateLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitFindFirstArgs} args - Arguments to find a UserRateLimit
     * @example
     * // Get one UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRateLimitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitFindFirstArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserRateLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitFindFirstOrThrowArgs} args - Arguments to find a UserRateLimit
     * @example
     * // Get one UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRateLimitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserRateLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRateLimits
     * const userRateLimits = await prisma.userRateLimit.findMany()
     * 
     * // Get first 10 UserRateLimits
     * const userRateLimits = await prisma.userRateLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRateLimitWithIdOnly = await prisma.userRateLimit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserRateLimitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserRateLimit.
     * @param {UserRateLimitCreateArgs} args - Arguments to create a UserRateLimit.
     * @example
     * // Create one UserRateLimit
     * const UserRateLimit = await prisma.userRateLimit.create({
     *   data: {
     *     // ... data to create a UserRateLimit
     *   }
     * })
     * 
    **/
    create<T extends UserRateLimitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitCreateArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserRateLimits.
     *     @param {UserRateLimitCreateManyArgs} args - Arguments to create many UserRateLimits.
     *     @example
     *     // Create many UserRateLimits
     *     const userRateLimit = await prisma.userRateLimit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserRateLimitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRateLimit.
     * @param {UserRateLimitDeleteArgs} args - Arguments to delete one UserRateLimit.
     * @example
     * // Delete one UserRateLimit
     * const UserRateLimit = await prisma.userRateLimit.delete({
     *   where: {
     *     // ... filter to delete one UserRateLimit
     *   }
     * })
     * 
    **/
    delete<T extends UserRateLimitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitDeleteArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserRateLimit.
     * @param {UserRateLimitUpdateArgs} args - Arguments to update one UserRateLimit.
     * @example
     * // Update one UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRateLimitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitUpdateArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserRateLimits.
     * @param {UserRateLimitDeleteManyArgs} args - Arguments to filter UserRateLimits to delete.
     * @example
     * // Delete a few UserRateLimits
     * const { count } = await prisma.userRateLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRateLimitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRateLimitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRateLimits
     * const userRateLimit = await prisma.userRateLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRateLimitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRateLimit.
     * @param {UserRateLimitUpsertArgs} args - Arguments to update or create a UserRateLimit.
     * @example
     * // Update or create a UserRateLimit
     * const userRateLimit = await prisma.userRateLimit.upsert({
     *   create: {
     *     // ... data to create a UserRateLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRateLimit we want to update
     *   }
     * })
    **/
    upsert<T extends UserRateLimitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserRateLimitUpsertArgs<ExtArgs>>
    ): Prisma__UserRateLimitClient<$Result.GetResult<Prisma.$UserRateLimitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserRateLimits that matches the filter.
     * @param {UserRateLimitFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userRateLimit = await prisma.userRateLimit.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserRateLimitFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserRateLimit.
     * @param {UserRateLimitAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userRateLimit = await prisma.userRateLimit.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserRateLimitAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserRateLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitCountArgs} args - Arguments to filter UserRateLimits to count.
     * @example
     * // Count the number of UserRateLimits
     * const count = await prisma.userRateLimit.count({
     *   where: {
     *     // ... the filter for the UserRateLimits we want to count
     *   }
     * })
    **/
    count<T extends UserRateLimitCountArgs>(
      args?: Subset<T, UserRateLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRateLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRateLimitAggregateArgs>(args: Subset<T, UserRateLimitAggregateArgs>): Prisma.PrismaPromise<GetUserRateLimitAggregateType<T>>

    /**
     * Group by UserRateLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRateLimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRateLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRateLimitGroupByArgs['orderBy'] }
        : { orderBy?: UserRateLimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRateLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRateLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRateLimit model
   */
  readonly fields: UserRateLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRateLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRateLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserRateLimit model
   */ 
  interface UserRateLimitFieldRefs {
    readonly id: FieldRef<"UserRateLimit", 'String'>
    readonly counter: FieldRef<"UserRateLimit", 'Int'>
    readonly expirationDate: FieldRef<"UserRateLimit", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserRateLimit findUnique
   */
  export type UserRateLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter, which UserRateLimit to fetch.
     */
    where: UserRateLimitWhereUniqueInput
  }


  /**
   * UserRateLimit findUniqueOrThrow
   */
  export type UserRateLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter, which UserRateLimit to fetch.
     */
    where: UserRateLimitWhereUniqueInput
  }


  /**
   * UserRateLimit findFirst
   */
  export type UserRateLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter, which UserRateLimit to fetch.
     */
    where?: UserRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRateLimits to fetch.
     */
    orderBy?: UserRateLimitOrderByWithRelationInput | UserRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRateLimits.
     */
    cursor?: UserRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRateLimits.
     */
    distinct?: UserRateLimitScalarFieldEnum | UserRateLimitScalarFieldEnum[]
  }


  /**
   * UserRateLimit findFirstOrThrow
   */
  export type UserRateLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter, which UserRateLimit to fetch.
     */
    where?: UserRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRateLimits to fetch.
     */
    orderBy?: UserRateLimitOrderByWithRelationInput | UserRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRateLimits.
     */
    cursor?: UserRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRateLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRateLimits.
     */
    distinct?: UserRateLimitScalarFieldEnum | UserRateLimitScalarFieldEnum[]
  }


  /**
   * UserRateLimit findMany
   */
  export type UserRateLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter, which UserRateLimits to fetch.
     */
    where?: UserRateLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRateLimits to fetch.
     */
    orderBy?: UserRateLimitOrderByWithRelationInput | UserRateLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRateLimits.
     */
    cursor?: UserRateLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRateLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRateLimits.
     */
    skip?: number
    distinct?: UserRateLimitScalarFieldEnum | UserRateLimitScalarFieldEnum[]
  }


  /**
   * UserRateLimit create
   */
  export type UserRateLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * The data needed to create a UserRateLimit.
     */
    data: XOR<UserRateLimitCreateInput, UserRateLimitUncheckedCreateInput>
  }


  /**
   * UserRateLimit createMany
   */
  export type UserRateLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRateLimits.
     */
    data: UserRateLimitCreateManyInput | UserRateLimitCreateManyInput[]
  }


  /**
   * UserRateLimit update
   */
  export type UserRateLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * The data needed to update a UserRateLimit.
     */
    data: XOR<UserRateLimitUpdateInput, UserRateLimitUncheckedUpdateInput>
    /**
     * Choose, which UserRateLimit to update.
     */
    where: UserRateLimitWhereUniqueInput
  }


  /**
   * UserRateLimit updateMany
   */
  export type UserRateLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRateLimits.
     */
    data: XOR<UserRateLimitUpdateManyMutationInput, UserRateLimitUncheckedUpdateManyInput>
    /**
     * Filter which UserRateLimits to update
     */
    where?: UserRateLimitWhereInput
  }


  /**
   * UserRateLimit upsert
   */
  export type UserRateLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * The filter to search for the UserRateLimit to update in case it exists.
     */
    where: UserRateLimitWhereUniqueInput
    /**
     * In case the UserRateLimit found by the `where` argument doesn't exist, create a new UserRateLimit with this data.
     */
    create: XOR<UserRateLimitCreateInput, UserRateLimitUncheckedCreateInput>
    /**
     * In case the UserRateLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRateLimitUpdateInput, UserRateLimitUncheckedUpdateInput>
  }


  /**
   * UserRateLimit delete
   */
  export type UserRateLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
    /**
     * Filter which UserRateLimit to delete.
     */
    where: UserRateLimitWhereUniqueInput
  }


  /**
   * UserRateLimit deleteMany
   */
  export type UserRateLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRateLimits to delete
     */
    where?: UserRateLimitWhereInput
  }


  /**
   * UserRateLimit findRaw
   */
  export type UserRateLimitFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserRateLimit aggregateRaw
   */
  export type UserRateLimitAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserRateLimit without action
   */
  export type UserRateLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRateLimit
     */
    select?: UserRateLimitSelect<ExtArgs> | null
  }



  /**
   * Model UserToken
   */

  export type AggregateUserToken = {
    _count: UserTokenCountAggregateOutputType | null
    _avg: UserTokenAvgAggregateOutputType | null
    _sum: UserTokenSumAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  export type UserTokenAvgAggregateOutputType = {
    ttl: number | null
  }

  export type UserTokenSumAggregateOutputType = {
    ttl: number | null
  }

  export type UserTokenMinAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type UserTokenMaxAggregateOutputType = {
    id: string | null
    created: Date | null
    ttl: number | null
    userId: string | null
  }

  export type UserTokenCountAggregateOutputType = {
    id: number
    created: number
    ttl: number
    userId: number
    _all: number
  }


  export type UserTokenAvgAggregateInputType = {
    ttl?: true
  }

  export type UserTokenSumAggregateInputType = {
    ttl?: true
  }

  export type UserTokenMinAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type UserTokenMaxAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
  }

  export type UserTokenCountAggregateInputType = {
    id?: true
    created?: true
    ttl?: true
    userId?: true
    _all?: true
  }

  export type UserTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToken to aggregate.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTokens
    **/
    _count?: true | UserTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTokenMaxAggregateInputType
  }

  export type GetUserTokenAggregateType<T extends UserTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToken[P]>
      : GetScalarType<T[P], AggregateUserToken[P]>
  }




  export type UserTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithAggregationInput | UserTokenOrderByWithAggregationInput[]
    by: UserTokenScalarFieldEnum[] | UserTokenScalarFieldEnum
    having?: UserTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTokenCountAggregateInputType | true
    _avg?: UserTokenAvgAggregateInputType
    _sum?: UserTokenSumAggregateInputType
    _min?: UserTokenMinAggregateInputType
    _max?: UserTokenMaxAggregateInputType
  }

  export type UserTokenGroupByOutputType = {
    id: string
    created: Date
    ttl: number
    userId: string
    _count: UserTokenCountAggregateOutputType | null
    _avg: UserTokenAvgAggregateOutputType | null
    _sum: UserTokenSumAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  type GetUserTokenGroupByPayload<T extends UserTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectScalar = {
    id?: boolean
    created?: boolean
    ttl?: boolean
    userId?: boolean
  }


  export type $UserTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created: Date
      ttl: number
      userId: string
    }, ExtArgs["result"]["userToken"]>
    composites: {}
  }


  type UserTokenGetPayload<S extends boolean | null | undefined | UserTokenDefaultArgs> = $Result.GetResult<Prisma.$UserTokenPayload, S>

  type UserTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserTokenCountAggregateInputType | true
    }

  export interface UserTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToken'], meta: { name: 'UserToken' } }
    /**
     * Find zero or one UserToken that matches the filter.
     * @param {UserTokenFindUniqueArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserTokenFindUniqueOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenFindFirstArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTokens
     * const userTokens = await prisma.userToken.findMany()
     * 
     * // Get first 10 UserTokens
     * const userTokens = await prisma.userToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTokenWithIdOnly = await prisma.userToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserToken.
     * @param {UserTokenCreateArgs} args - Arguments to create a UserToken.
     * @example
     * // Create one UserToken
     * const UserToken = await prisma.userToken.create({
     *   data: {
     *     // ... data to create a UserToken
     *   }
     * })
     * 
    **/
    create<T extends UserTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenCreateArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserTokens.
     *     @param {UserTokenCreateManyArgs} args - Arguments to create many UserTokens.
     *     @example
     *     // Create many UserTokens
     *     const userToken = await prisma.userToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserToken.
     * @param {UserTokenDeleteArgs} args - Arguments to delete one UserToken.
     * @example
     * // Delete one UserToken
     * const UserToken = await prisma.userToken.delete({
     *   where: {
     *     // ... filter to delete one UserToken
     *   }
     * })
     * 
    **/
    delete<T extends UserTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenDeleteArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserToken.
     * @param {UserTokenUpdateArgs} args - Arguments to update one UserToken.
     * @example
     * // Update one UserToken
     * const userToken = await prisma.userToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenUpdateArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserTokens.
     * @param {UserTokenDeleteManyArgs} args - Arguments to filter UserTokens to delete.
     * @example
     * // Delete a few UserTokens
     * const { count } = await prisma.userToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserToken.
     * @param {UserTokenUpsertArgs} args - Arguments to update or create a UserToken.
     * @example
     * // Update or create a UserToken
     * const userToken = await prisma.userToken.upsert({
     *   create: {
     *     // ... data to create a UserToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToken we want to update
     *   }
     * })
    **/
    upsert<T extends UserTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserTokenUpsertArgs<ExtArgs>>
    ): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserTokens that matches the filter.
     * @param {UserTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userToken = await prisma.userToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserTokenFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserToken.
     * @param {UserTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userToken = await prisma.userToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserTokenAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenCountArgs} args - Arguments to filter UserTokens to count.
     * @example
     * // Count the number of UserTokens
     * const count = await prisma.userToken.count({
     *   where: {
     *     // ... the filter for the UserTokens we want to count
     *   }
     * })
    **/
    count<T extends UserTokenCountArgs>(
      args?: Subset<T, UserTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTokenAggregateArgs>(args: Subset<T, UserTokenAggregateArgs>): Prisma.PrismaPromise<GetUserTokenAggregateType<T>>

    /**
     * Group by UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToken model
   */
  readonly fields: UserTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserToken model
   */ 
  interface UserTokenFieldRefs {
    readonly id: FieldRef<"UserToken", 'String'>
    readonly created: FieldRef<"UserToken", 'DateTime'>
    readonly ttl: FieldRef<"UserToken", 'Float'>
    readonly userId: FieldRef<"UserToken", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserToken findUnique
   */
  export type UserTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }


  /**
   * UserToken findUniqueOrThrow
   */
  export type UserTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }


  /**
   * UserToken findFirst
   */
  export type UserTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }


  /**
   * UserToken findFirstOrThrow
   */
  export type UserTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }


  /**
   * UserToken findMany
   */
  export type UserTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter, which UserTokens to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }


  /**
   * UserToken create
   */
  export type UserTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a UserToken.
     */
    data: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
  }


  /**
   * UserToken createMany
   */
  export type UserTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
  }


  /**
   * UserToken update
   */
  export type UserTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a UserToken.
     */
    data: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
    /**
     * Choose, which UserToken to update.
     */
    where: UserTokenWhereUniqueInput
  }


  /**
   * UserToken updateMany
   */
  export type UserTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
  }


  /**
   * UserToken upsert
   */
  export type UserTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the UserToken to update in case it exists.
     */
    where: UserTokenWhereUniqueInput
    /**
     * In case the UserToken found by the `where` argument doesn't exist, create a new UserToken with this data.
     */
    create: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
    /**
     * In case the UserToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
  }


  /**
   * UserToken delete
   */
  export type UserTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Filter which UserToken to delete.
     */
    where: UserTokenWhereUniqueInput
  }


  /**
   * UserToken deleteMany
   */
  export type UserTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTokens to delete
     */
    where?: UserTokenWhereInput
  }


  /**
   * UserToken findRaw
   */
  export type UserTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserToken aggregateRaw
   */
  export type UserTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserToken without action
   */
  export type UserTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
  }



  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    expires: Date | null
    session: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    expires: Date | null
    session: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    expires: number
    session: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    expires?: true
    session?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    expires?: true
    session?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    expires?: true
    session?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    expires: Date
    session: string
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expires?: boolean
    session?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    expires?: boolean
    session?: boolean
  }


  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expires: Date
      session: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }


  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sessionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sessions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sessionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sessionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
    **/
    create<T extends sessionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const sessions = await prisma.sessions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sessionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
    **/
    delete<T extends sessionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sessionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sessionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sessionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
    **/
    upsert<T extends sessionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {sessionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sessions = await prisma.sessions.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: sessionsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sessions.
     * @param {sessionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sessions = await prisma.sessions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: sessionsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sessions model
   */ 
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly expires: FieldRef<"sessions", 'DateTime'>
    readonly session: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes

  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }


  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }


  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }


  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }


  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }


  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }


  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
  }


  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }


  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
  }


  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }


  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }


  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
  }


  /**
   * sessions findRaw
   */
  export type sessionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * sessions aggregateRaw
   */
  export type sessionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
  }



  /**
   * Model MsUsername
   */

  export type AggregateMsUsername = {
    _count: MsUsernameCountAggregateOutputType | null
    _avg: MsUsernameAvgAggregateOutputType | null
    _sum: MsUsernameSumAggregateOutputType | null
    _min: MsUsernameMinAggregateOutputType | null
    _max: MsUsernameMaxAggregateOutputType | null
  }

  export type MsUsernameAvgAggregateOutputType = {
    ttl: number | null
  }

  export type MsUsernameSumAggregateOutputType = {
    ttl: number | null
  }

  export type MsUsernameMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ttl: number | null
    msUsername: string | null
  }

  export type MsUsernameMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ttl: number | null
    msUsername: string | null
  }

  export type MsUsernameCountAggregateOutputType = {
    id: number
    userId: number
    ttl: number
    msUsername: number
    _all: number
  }


  export type MsUsernameAvgAggregateInputType = {
    ttl?: true
  }

  export type MsUsernameSumAggregateInputType = {
    ttl?: true
  }

  export type MsUsernameMinAggregateInputType = {
    id?: true
    userId?: true
    ttl?: true
    msUsername?: true
  }

  export type MsUsernameMaxAggregateInputType = {
    id?: true
    userId?: true
    ttl?: true
    msUsername?: true
  }

  export type MsUsernameCountAggregateInputType = {
    id?: true
    userId?: true
    ttl?: true
    msUsername?: true
    _all?: true
  }

  export type MsUsernameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsUsername to aggregate.
     */
    where?: MsUsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsernames to fetch.
     */
    orderBy?: MsUsernameOrderByWithRelationInput | MsUsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsUsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MsUsernames
    **/
    _count?: true | MsUsernameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MsUsernameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MsUsernameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsUsernameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsUsernameMaxAggregateInputType
  }

  export type GetMsUsernameAggregateType<T extends MsUsernameAggregateArgs> = {
        [P in keyof T & keyof AggregateMsUsername]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsUsername[P]>
      : GetScalarType<T[P], AggregateMsUsername[P]>
  }




  export type MsUsernameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsUsernameWhereInput
    orderBy?: MsUsernameOrderByWithAggregationInput | MsUsernameOrderByWithAggregationInput[]
    by: MsUsernameScalarFieldEnum[] | MsUsernameScalarFieldEnum
    having?: MsUsernameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsUsernameCountAggregateInputType | true
    _avg?: MsUsernameAvgAggregateInputType
    _sum?: MsUsernameSumAggregateInputType
    _min?: MsUsernameMinAggregateInputType
    _max?: MsUsernameMaxAggregateInputType
  }

  export type MsUsernameGroupByOutputType = {
    id: string
    userId: string
    ttl: number
    msUsername: string
    _count: MsUsernameCountAggregateOutputType | null
    _avg: MsUsernameAvgAggregateOutputType | null
    _sum: MsUsernameSumAggregateOutputType | null
    _min: MsUsernameMinAggregateOutputType | null
    _max: MsUsernameMaxAggregateOutputType | null
  }

  type GetMsUsernameGroupByPayload<T extends MsUsernameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsUsernameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsUsernameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsUsernameGroupByOutputType[P]>
            : GetScalarType<T[P], MsUsernameGroupByOutputType[P]>
        }
      >
    >


  export type MsUsernameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ttl?: boolean
    msUsername?: boolean
  }, ExtArgs["result"]["msUsername"]>

  export type MsUsernameSelectScalar = {
    id?: boolean
    userId?: boolean
    ttl?: boolean
    msUsername?: boolean
  }


  export type $MsUsernamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MsUsername"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ttl: number
      msUsername: string
    }, ExtArgs["result"]["msUsername"]>
    composites: {}
  }


  type MsUsernameGetPayload<S extends boolean | null | undefined | MsUsernameDefaultArgs> = $Result.GetResult<Prisma.$MsUsernamePayload, S>

  type MsUsernameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MsUsernameFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MsUsernameCountAggregateInputType | true
    }

  export interface MsUsernameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MsUsername'], meta: { name: 'MsUsername' } }
    /**
     * Find zero or one MsUsername that matches the filter.
     * @param {MsUsernameFindUniqueArgs} args - Arguments to find a MsUsername
     * @example
     * // Get one MsUsername
     * const msUsername = await prisma.msUsername.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MsUsernameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameFindUniqueArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MsUsername that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MsUsernameFindUniqueOrThrowArgs} args - Arguments to find a MsUsername
     * @example
     * // Get one MsUsername
     * const msUsername = await prisma.msUsername.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MsUsernameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MsUsername that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameFindFirstArgs} args - Arguments to find a MsUsername
     * @example
     * // Get one MsUsername
     * const msUsername = await prisma.msUsername.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MsUsernameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameFindFirstArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MsUsername that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameFindFirstOrThrowArgs} args - Arguments to find a MsUsername
     * @example
     * // Get one MsUsername
     * const msUsername = await prisma.msUsername.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MsUsernameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MsUsernames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MsUsernames
     * const msUsernames = await prisma.msUsername.findMany()
     * 
     * // Get first 10 MsUsernames
     * const msUsernames = await prisma.msUsername.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const msUsernameWithIdOnly = await prisma.msUsername.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MsUsernameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MsUsername.
     * @param {MsUsernameCreateArgs} args - Arguments to create a MsUsername.
     * @example
     * // Create one MsUsername
     * const MsUsername = await prisma.msUsername.create({
     *   data: {
     *     // ... data to create a MsUsername
     *   }
     * })
     * 
    **/
    create<T extends MsUsernameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameCreateArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MsUsernames.
     *     @param {MsUsernameCreateManyArgs} args - Arguments to create many MsUsernames.
     *     @example
     *     // Create many MsUsernames
     *     const msUsername = await prisma.msUsername.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MsUsernameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MsUsername.
     * @param {MsUsernameDeleteArgs} args - Arguments to delete one MsUsername.
     * @example
     * // Delete one MsUsername
     * const MsUsername = await prisma.msUsername.delete({
     *   where: {
     *     // ... filter to delete one MsUsername
     *   }
     * })
     * 
    **/
    delete<T extends MsUsernameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameDeleteArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MsUsername.
     * @param {MsUsernameUpdateArgs} args - Arguments to update one MsUsername.
     * @example
     * // Update one MsUsername
     * const msUsername = await prisma.msUsername.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MsUsernameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameUpdateArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MsUsernames.
     * @param {MsUsernameDeleteManyArgs} args - Arguments to filter MsUsernames to delete.
     * @example
     * // Delete a few MsUsernames
     * const { count } = await prisma.msUsername.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MsUsernameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MsUsernameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsUsernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MsUsernames
     * const msUsername = await prisma.msUsername.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MsUsernameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MsUsername.
     * @param {MsUsernameUpsertArgs} args - Arguments to update or create a MsUsername.
     * @example
     * // Update or create a MsUsername
     * const msUsername = await prisma.msUsername.upsert({
     *   create: {
     *     // ... data to create a MsUsername
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MsUsername we want to update
     *   }
     * })
    **/
    upsert<T extends MsUsernameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MsUsernameUpsertArgs<ExtArgs>>
    ): Prisma__MsUsernameClient<$Result.GetResult<Prisma.$MsUsernamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more MsUsernames that matches the filter.
     * @param {MsUsernameFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const msUsername = await prisma.msUsername.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MsUsernameFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MsUsername.
     * @param {MsUsernameAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const msUsername = await prisma.msUsername.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MsUsernameAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of MsUsernames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameCountArgs} args - Arguments to filter MsUsernames to count.
     * @example
     * // Count the number of MsUsernames
     * const count = await prisma.msUsername.count({
     *   where: {
     *     // ... the filter for the MsUsernames we want to count
     *   }
     * })
    **/
    count<T extends MsUsernameCountArgs>(
      args?: Subset<T, MsUsernameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsUsernameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MsUsername.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MsUsernameAggregateArgs>(args: Subset<T, MsUsernameAggregateArgs>): Prisma.PrismaPromise<GetMsUsernameAggregateType<T>>

    /**
     * Group by MsUsername.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsUsernameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MsUsernameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsUsernameGroupByArgs['orderBy'] }
        : { orderBy?: MsUsernameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MsUsernameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsUsernameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MsUsername model
   */
  readonly fields: MsUsernameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MsUsername.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsUsernameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MsUsername model
   */ 
  interface MsUsernameFieldRefs {
    readonly id: FieldRef<"MsUsername", 'String'>
    readonly userId: FieldRef<"MsUsername", 'String'>
    readonly ttl: FieldRef<"MsUsername", 'Int'>
    readonly msUsername: FieldRef<"MsUsername", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MsUsername findUnique
   */
  export type MsUsernameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter, which MsUsername to fetch.
     */
    where: MsUsernameWhereUniqueInput
  }


  /**
   * MsUsername findUniqueOrThrow
   */
  export type MsUsernameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter, which MsUsername to fetch.
     */
    where: MsUsernameWhereUniqueInput
  }


  /**
   * MsUsername findFirst
   */
  export type MsUsernameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter, which MsUsername to fetch.
     */
    where?: MsUsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsernames to fetch.
     */
    orderBy?: MsUsernameOrderByWithRelationInput | MsUsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsUsernames.
     */
    cursor?: MsUsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsUsernames.
     */
    distinct?: MsUsernameScalarFieldEnum | MsUsernameScalarFieldEnum[]
  }


  /**
   * MsUsername findFirstOrThrow
   */
  export type MsUsernameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter, which MsUsername to fetch.
     */
    where?: MsUsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsernames to fetch.
     */
    orderBy?: MsUsernameOrderByWithRelationInput | MsUsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsUsernames.
     */
    cursor?: MsUsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsernames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsUsernames.
     */
    distinct?: MsUsernameScalarFieldEnum | MsUsernameScalarFieldEnum[]
  }


  /**
   * MsUsername findMany
   */
  export type MsUsernameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter, which MsUsernames to fetch.
     */
    where?: MsUsernameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsUsernames to fetch.
     */
    orderBy?: MsUsernameOrderByWithRelationInput | MsUsernameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MsUsernames.
     */
    cursor?: MsUsernameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsUsernames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsUsernames.
     */
    skip?: number
    distinct?: MsUsernameScalarFieldEnum | MsUsernameScalarFieldEnum[]
  }


  /**
   * MsUsername create
   */
  export type MsUsernameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * The data needed to create a MsUsername.
     */
    data: XOR<MsUsernameCreateInput, MsUsernameUncheckedCreateInput>
  }


  /**
   * MsUsername createMany
   */
  export type MsUsernameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MsUsernames.
     */
    data: MsUsernameCreateManyInput | MsUsernameCreateManyInput[]
  }


  /**
   * MsUsername update
   */
  export type MsUsernameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * The data needed to update a MsUsername.
     */
    data: XOR<MsUsernameUpdateInput, MsUsernameUncheckedUpdateInput>
    /**
     * Choose, which MsUsername to update.
     */
    where: MsUsernameWhereUniqueInput
  }


  /**
   * MsUsername updateMany
   */
  export type MsUsernameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MsUsernames.
     */
    data: XOR<MsUsernameUpdateManyMutationInput, MsUsernameUncheckedUpdateManyInput>
    /**
     * Filter which MsUsernames to update
     */
    where?: MsUsernameWhereInput
  }


  /**
   * MsUsername upsert
   */
  export type MsUsernameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * The filter to search for the MsUsername to update in case it exists.
     */
    where: MsUsernameWhereUniqueInput
    /**
     * In case the MsUsername found by the `where` argument doesn't exist, create a new MsUsername with this data.
     */
    create: XOR<MsUsernameCreateInput, MsUsernameUncheckedCreateInput>
    /**
     * In case the MsUsername was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsUsernameUpdateInput, MsUsernameUncheckedUpdateInput>
  }


  /**
   * MsUsername delete
   */
  export type MsUsernameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
    /**
     * Filter which MsUsername to delete.
     */
    where: MsUsernameWhereUniqueInput
  }


  /**
   * MsUsername deleteMany
   */
  export type MsUsernameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsUsernames to delete
     */
    where?: MsUsernameWhereInput
  }


  /**
   * MsUsername findRaw
   */
  export type MsUsernameFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MsUsername aggregateRaw
   */
  export type MsUsernameAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MsUsername without action
   */
  export type MsUsernameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsUsername
     */
    select?: MsUsernameSelect<ExtArgs> | null
  }



  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    numberOfQuestionsInExam: number | null
    passingPercent: number | null
  }

  export type ExamSumAggregateOutputType = {
    numberOfQuestionsInExam: number | null
    passingPercent: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    numberOfQuestionsInExam: number | null
    passingPercent: number | null
    title: string | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    numberOfQuestionsInExam: number | null
    passingPercent: number | null
    title: string | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    numberOfQuestionsInExam: number
    passingPercent: number
    title: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    numberOfQuestionsInExam?: true
    passingPercent?: true
  }

  export type ExamSumAggregateInputType = {
    numberOfQuestionsInExam?: true
    passingPercent?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    numberOfQuestionsInExam?: true
    passingPercent?: true
    title?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    numberOfQuestionsInExam?: true
    passingPercent?: true
    title?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    numberOfQuestionsInExam?: true
    passingPercent?: true
    title?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    numberOfQuestionsInExam: number
    passingPercent: number
    title: string
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberOfQuestionsInExam?: boolean
    passingPercent?: boolean
    prerequisites?: boolean | PrerequisiteDefaultArgs<ExtArgs>
    title?: boolean
    questions?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    numberOfQuestionsInExam?: boolean
    passingPercent?: boolean
    title?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numberOfQuestionsInExam: number
      passingPercent: number
      title: string
    }, ExtArgs["result"]["exam"]>
    composites: {
      prerequisites: Prisma.$PrerequisitePayload[]
      questions: Prisma.$QuestionPayload[]
    }
  }


  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
    **/
    create<T extends ExamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamCreateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Exams.
     *     @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     *     @example
     *     // Create many Exams
     *     const exam = await prisma.exam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
    **/
    delete<T extends ExamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
    **/
    upsert<T extends ExamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * @param {ExamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exam = await prisma.exam.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ExamFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Exam.
     * @param {ExamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exam = await prisma.exam.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ExamAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly numberOfQuestionsInExam: FieldRef<"Exam", 'Int'>
    readonly passingPercent: FieldRef<"Exam", 'Int'>
    readonly title: FieldRef<"Exam", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }


  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }


  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }


  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }


  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }


  /**
   * Exam findRaw
   */
  export type ExamFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Exam aggregateRaw
   */
  export type ExamAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
  }



  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    _all: number
  }


  export type SurveyMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: string
    userId: string
    title: string
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    responses?: boolean | SurveyResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
  }

  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}


  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
    }, ExtArgs["result"]["survey"]>
    composites: {
      responses: Prisma.$SurveyResponsePayload[]
    }
  }


  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SurveyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Survey that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SurveyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SurveyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
    **/
    create<T extends SurveyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Surveys.
     *     @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     *     @example
     *     // Create many Surveys
     *     const survey = await prisma.survey.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SurveyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
    **/
    delete<T extends SurveyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SurveyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SurveyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SurveyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
    **/
    upsert<T extends SurveyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>
    ): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Surveys that matches the filter.
     * @param {SurveyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const survey = await prisma.survey.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SurveyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Survey.
     * @param {SurveyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const survey = await prisma.survey.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SurveyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Survey model
   */ 
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'String'>
    readonly userId: FieldRef<"Survey", 'String'>
    readonly title: FieldRef<"Survey", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }


  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }


  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
  }


  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
  }


  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }


  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }


  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
  }


  /**
   * Survey findRaw
   */
  export type SurveyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Survey aggregateRaw
   */
  export type SurveyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SurveyInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    about: 'about',
    acceptedPrivacyTerms: 'acceptedPrivacyTerms',
    currentChallengeId: 'currentChallengeId',
    donationEmails: 'donationEmails',
    email: 'email',
    emailAuthLinkTTL: 'emailAuthLinkTTL',
    emailVerified: 'emailVerified',
    emailVerifyTTL: 'emailVerifyTTL',
    externalId: 'externalId',
    githubProfile: 'githubProfile',
    isApisMicroservicesCert: 'isApisMicroservicesCert',
    isBackEndCert: 'isBackEndCert',
    isBanned: 'isBanned',
    isCheater: 'isCheater',
    isDataAnalysisPyCertV7: 'isDataAnalysisPyCertV7',
    isDataVisCert: 'isDataVisCert',
    isDonating: 'isDonating',
    isFoundationalCSharpCertV8: 'isFoundationalCSharpCertV8',
    isFrontEndCert: 'isFrontEndCert',
    isFrontEndLibsCert: 'isFrontEndLibsCert',
    isFullStackCert: 'isFullStackCert',
    isHonest: 'isHonest',
    isInfosecCertV7: 'isInfosecCertV7',
    isInfosecQaCert: 'isInfosecQaCert',
    isJsAlgoDataStructCert: 'isJsAlgoDataStructCert',
    isJsAlgoDataStructCertV8: 'isJsAlgoDataStructCertV8',
    isMachineLearningPyCertV7: 'isMachineLearningPyCertV7',
    isQaCertV7: 'isQaCertV7',
    isRelationalDatabaseCertV8: 'isRelationalDatabaseCertV8',
    isRespWebDesignCert: 'isRespWebDesignCert',
    isSciCompPyCertV7: 'isSciCompPyCertV7',
    is2018DataVisCert: 'is2018DataVisCert',
    is2018FullStackCert: 'is2018FullStackCert',
    isCollegeAlgebraPyCertV8: 'isCollegeAlgebraPyCertV8',
    isUpcomingPythonCertV8: 'isUpcomingPythonCertV8',
    keyboardShortcuts: 'keyboardShortcuts',
    linkedin: 'linkedin',
    location: 'location',
    name: 'name',
    needsModeration: 'needsModeration',
    newEmail: 'newEmail',
    password: 'password',
    picture: 'picture',
    progressTimestamps: 'progressTimestamps',
    rand: 'rand',
    sendQuincyEmail: 'sendQuincyEmail',
    theme: 'theme',
    timezone: 'timezone',
    twitter: 'twitter',
    unsubscribeId: 'unsubscribeId',
    updateCount: 'updateCount',
    username: 'username',
    usernameDisplay: 'usernameDisplay',
    verificationToken: 'verificationToken',
    website: 'website',
    yearsTopContributor: 'yearsTopContributor',
    isClassroomAccount: 'isClassroomAccount',
    schemaVersion: 'schemaVersion',
    lastUpdatedAtInMS: 'lastUpdatedAtInMS'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccessTokenScalarFieldEnum: {
    id: 'id',
    created: 'created',
    ttl: 'ttl',
    userId: 'userId'
  };

  export type AccessTokenScalarFieldEnum = (typeof AccessTokenScalarFieldEnum)[keyof typeof AccessTokenScalarFieldEnum]


  export const AuthTokenScalarFieldEnum: {
    id: 'id',
    created: 'created',
    ttl: 'ttl',
    userId: 'userId'
  };

  export type AuthTokenScalarFieldEnum = (typeof AuthTokenScalarFieldEnum)[keyof typeof AuthTokenScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    customerId: 'customerId',
    duration: 'duration',
    email: 'email',
    provider: 'provider',
    subscriptionId: 'subscriptionId',
    userId: 'userId'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const UserRateLimitScalarFieldEnum: {
    id: 'id',
    counter: 'counter',
    expirationDate: 'expirationDate'
  };

  export type UserRateLimitScalarFieldEnum = (typeof UserRateLimitScalarFieldEnum)[keyof typeof UserRateLimitScalarFieldEnum]


  export const UserTokenScalarFieldEnum: {
    id: 'id',
    created: 'created',
    ttl: 'ttl',
    userId: 'userId'
  };

  export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    expires: 'expires',
    session: 'session'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const MsUsernameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ttl: 'ttl',
    msUsername: 'msUsername'
  };

  export type MsUsernameScalarFieldEnum = (typeof MsUsernameScalarFieldEnum)[keyof typeof MsUsernameScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    numberOfQuestionsInExam: 'numberOfQuestionsInExam',
    passingPercent: 'passingPercent',
    title: 'title'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    about?: StringFilter<"user"> | string
    acceptedPrivacyTerms?: BoolFilter<"user"> | boolean
    completedChallenges?: CompletedChallengeCompositeListFilter | CompletedChallengeObjectEqualityInput[]
    completedExams?: CompletedExamCompositeListFilter | CompletedExamObjectEqualityInput[]
    currentChallengeId?: StringNullableFilter<"user"> | string | null
    donationEmails?: StringNullableListFilter<"user">
    email?: StringFilter<"user"> | string
    emailAuthLinkTTL?: DateTimeNullableFilter<"user"> | Date | string | null
    emailVerified?: BoolFilter<"user"> | boolean
    emailVerifyTTL?: DateTimeNullableFilter<"user"> | Date | string | null
    externalId?: StringFilter<"user"> | string
    githubProfile?: StringNullableFilter<"user"> | string | null
    isApisMicroservicesCert?: BoolNullableFilter<"user"> | boolean | null
    isBackEndCert?: BoolNullableFilter<"user"> | boolean | null
    isBanned?: BoolNullableFilter<"user"> | boolean | null
    isCheater?: BoolNullableFilter<"user"> | boolean | null
    isDataAnalysisPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    isDataVisCert?: BoolNullableFilter<"user"> | boolean | null
    isDonating?: BoolFilter<"user"> | boolean
    isFoundationalCSharpCertV8?: BoolNullableFilter<"user"> | boolean | null
    isFrontEndCert?: BoolNullableFilter<"user"> | boolean | null
    isFrontEndLibsCert?: BoolNullableFilter<"user"> | boolean | null
    isFullStackCert?: BoolNullableFilter<"user"> | boolean | null
    isHonest?: BoolNullableFilter<"user"> | boolean | null
    isInfosecCertV7?: BoolNullableFilter<"user"> | boolean | null
    isInfosecQaCert?: BoolNullableFilter<"user"> | boolean | null
    isJsAlgoDataStructCert?: BoolNullableFilter<"user"> | boolean | null
    isJsAlgoDataStructCertV8?: BoolNullableFilter<"user"> | boolean | null
    isMachineLearningPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    isQaCertV7?: BoolNullableFilter<"user"> | boolean | null
    isRelationalDatabaseCertV8?: BoolNullableFilter<"user"> | boolean | null
    isRespWebDesignCert?: BoolNullableFilter<"user"> | boolean | null
    isSciCompPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    is2018DataVisCert?: BoolNullableFilter<"user"> | boolean | null
    is2018FullStackCert?: BoolNullableFilter<"user"> | boolean | null
    isCollegeAlgebraPyCertV8?: BoolNullableFilter<"user"> | boolean | null
    isUpcomingPythonCertV8?: BoolNullableFilter<"user"> | boolean | null
    keyboardShortcuts?: BoolNullableFilter<"user"> | boolean | null
    linkedin?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    needsModeration?: BoolNullableFilter<"user"> | boolean | null
    newEmail?: StringNullableFilter<"user"> | string | null
    partiallyCompletedChallenges?: PartiallyCompletedChallengeCompositeListFilter | PartiallyCompletedChallengeObjectEqualityInput[]
    password?: StringNullableFilter<"user"> | string | null
    picture?: StringFilter<"user"> | string
    portfolio?: PortfolioCompositeListFilter | PortfolioObjectEqualityInput[]
    profileUI?: XOR<ProfileUINullableCompositeFilter, ProfileUIObjectEqualityInput> | null
    progressTimestamps?: JsonNullableFilter<"user">
    rand?: FloatNullableFilter<"user"> | number | null
    savedChallenges?: SavedChallengeCompositeListFilter | SavedChallengeObjectEqualityInput[]
    sendQuincyEmail?: BoolFilter<"user"> | boolean
    theme?: StringNullableFilter<"user"> | string | null
    timezone?: StringNullableFilter<"user"> | string | null
    twitter?: StringNullableFilter<"user"> | string | null
    unsubscribeId?: StringFilter<"user"> | string
    updateCount?: IntNullableFilter<"user"> | number | null
    username?: StringFilter<"user"> | string
    usernameDisplay?: StringNullableFilter<"user"> | string | null
    verificationToken?: StringNullableFilter<"user"> | string | null
    website?: StringNullableFilter<"user"> | string | null
    yearsTopContributor?: StringNullableListFilter<"user">
    isClassroomAccount?: BoolNullableFilter<"user"> | boolean | null
    schemaVersion?: IntFilter<"user"> | number
    lastUpdatedAtInMS?: IntNullableFilter<"user"> | number | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    about?: SortOrder
    acceptedPrivacyTerms?: SortOrder
    completedChallenges?: CompletedChallengeOrderByCompositeAggregateInput
    completedExams?: CompletedExamOrderByCompositeAggregateInput
    currentChallengeId?: SortOrder
    donationEmails?: SortOrder
    email?: SortOrder
    emailAuthLinkTTL?: SortOrder
    emailVerified?: SortOrder
    emailVerifyTTL?: SortOrder
    externalId?: SortOrder
    githubProfile?: SortOrder
    isApisMicroservicesCert?: SortOrder
    isBackEndCert?: SortOrder
    isBanned?: SortOrder
    isCheater?: SortOrder
    isDataAnalysisPyCertV7?: SortOrder
    isDataVisCert?: SortOrder
    isDonating?: SortOrder
    isFoundationalCSharpCertV8?: SortOrder
    isFrontEndCert?: SortOrder
    isFrontEndLibsCert?: SortOrder
    isFullStackCert?: SortOrder
    isHonest?: SortOrder
    isInfosecCertV7?: SortOrder
    isInfosecQaCert?: SortOrder
    isJsAlgoDataStructCert?: SortOrder
    isJsAlgoDataStructCertV8?: SortOrder
    isMachineLearningPyCertV7?: SortOrder
    isQaCertV7?: SortOrder
    isRelationalDatabaseCertV8?: SortOrder
    isRespWebDesignCert?: SortOrder
    isSciCompPyCertV7?: SortOrder
    is2018DataVisCert?: SortOrder
    is2018FullStackCert?: SortOrder
    isCollegeAlgebraPyCertV8?: SortOrder
    isUpcomingPythonCertV8?: SortOrder
    keyboardShortcuts?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    name?: SortOrder
    needsModeration?: SortOrder
    newEmail?: SortOrder
    partiallyCompletedChallenges?: PartiallyCompletedChallengeOrderByCompositeAggregateInput
    password?: SortOrder
    picture?: SortOrder
    portfolio?: PortfolioOrderByCompositeAggregateInput
    profileUI?: ProfileUIOrderByInput
    progressTimestamps?: SortOrder
    rand?: SortOrder
    savedChallenges?: SavedChallengeOrderByCompositeAggregateInput
    sendQuincyEmail?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    twitter?: SortOrder
    unsubscribeId?: SortOrder
    updateCount?: SortOrder
    username?: SortOrder
    usernameDisplay?: SortOrder
    verificationToken?: SortOrder
    website?: SortOrder
    yearsTopContributor?: SortOrder
    isClassroomAccount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    about?: StringFilter<"user"> | string
    acceptedPrivacyTerms?: BoolFilter<"user"> | boolean
    completedChallenges?: CompletedChallengeCompositeListFilter | CompletedChallengeObjectEqualityInput[]
    completedExams?: CompletedExamCompositeListFilter | CompletedExamObjectEqualityInput[]
    currentChallengeId?: StringNullableFilter<"user"> | string | null
    donationEmails?: StringNullableListFilter<"user">
    email?: StringFilter<"user"> | string
    emailAuthLinkTTL?: DateTimeNullableFilter<"user"> | Date | string | null
    emailVerified?: BoolFilter<"user"> | boolean
    emailVerifyTTL?: DateTimeNullableFilter<"user"> | Date | string | null
    externalId?: StringFilter<"user"> | string
    githubProfile?: StringNullableFilter<"user"> | string | null
    isApisMicroservicesCert?: BoolNullableFilter<"user"> | boolean | null
    isBackEndCert?: BoolNullableFilter<"user"> | boolean | null
    isBanned?: BoolNullableFilter<"user"> | boolean | null
    isCheater?: BoolNullableFilter<"user"> | boolean | null
    isDataAnalysisPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    isDataVisCert?: BoolNullableFilter<"user"> | boolean | null
    isDonating?: BoolFilter<"user"> | boolean
    isFoundationalCSharpCertV8?: BoolNullableFilter<"user"> | boolean | null
    isFrontEndCert?: BoolNullableFilter<"user"> | boolean | null
    isFrontEndLibsCert?: BoolNullableFilter<"user"> | boolean | null
    isFullStackCert?: BoolNullableFilter<"user"> | boolean | null
    isHonest?: BoolNullableFilter<"user"> | boolean | null
    isInfosecCertV7?: BoolNullableFilter<"user"> | boolean | null
    isInfosecQaCert?: BoolNullableFilter<"user"> | boolean | null
    isJsAlgoDataStructCert?: BoolNullableFilter<"user"> | boolean | null
    isJsAlgoDataStructCertV8?: BoolNullableFilter<"user"> | boolean | null
    isMachineLearningPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    isQaCertV7?: BoolNullableFilter<"user"> | boolean | null
    isRelationalDatabaseCertV8?: BoolNullableFilter<"user"> | boolean | null
    isRespWebDesignCert?: BoolNullableFilter<"user"> | boolean | null
    isSciCompPyCertV7?: BoolNullableFilter<"user"> | boolean | null
    is2018DataVisCert?: BoolNullableFilter<"user"> | boolean | null
    is2018FullStackCert?: BoolNullableFilter<"user"> | boolean | null
    isCollegeAlgebraPyCertV8?: BoolNullableFilter<"user"> | boolean | null
    isUpcomingPythonCertV8?: BoolNullableFilter<"user"> | boolean | null
    keyboardShortcuts?: BoolNullableFilter<"user"> | boolean | null
    linkedin?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    needsModeration?: BoolNullableFilter<"user"> | boolean | null
    newEmail?: StringNullableFilter<"user"> | string | null
    partiallyCompletedChallenges?: PartiallyCompletedChallengeCompositeListFilter | PartiallyCompletedChallengeObjectEqualityInput[]
    password?: StringNullableFilter<"user"> | string | null
    picture?: StringFilter<"user"> | string
    portfolio?: PortfolioCompositeListFilter | PortfolioObjectEqualityInput[]
    profileUI?: XOR<ProfileUINullableCompositeFilter, ProfileUIObjectEqualityInput> | null
    progressTimestamps?: JsonNullableFilter<"user">
    rand?: FloatNullableFilter<"user"> | number | null
    savedChallenges?: SavedChallengeCompositeListFilter | SavedChallengeObjectEqualityInput[]
    sendQuincyEmail?: BoolFilter<"user"> | boolean
    theme?: StringNullableFilter<"user"> | string | null
    timezone?: StringNullableFilter<"user"> | string | null
    twitter?: StringNullableFilter<"user"> | string | null
    unsubscribeId?: StringFilter<"user"> | string
    updateCount?: IntNullableFilter<"user"> | number | null
    username?: StringFilter<"user"> | string
    usernameDisplay?: StringNullableFilter<"user"> | string | null
    verificationToken?: StringNullableFilter<"user"> | string | null
    website?: StringNullableFilter<"user"> | string | null
    yearsTopContributor?: StringNullableListFilter<"user">
    isClassroomAccount?: BoolNullableFilter<"user"> | boolean | null
    schemaVersion?: IntFilter<"user"> | number
    lastUpdatedAtInMS?: IntNullableFilter<"user"> | number | null
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    about?: SortOrder
    acceptedPrivacyTerms?: SortOrder
    currentChallengeId?: SortOrder
    donationEmails?: SortOrder
    email?: SortOrder
    emailAuthLinkTTL?: SortOrder
    emailVerified?: SortOrder
    emailVerifyTTL?: SortOrder
    externalId?: SortOrder
    githubProfile?: SortOrder
    isApisMicroservicesCert?: SortOrder
    isBackEndCert?: SortOrder
    isBanned?: SortOrder
    isCheater?: SortOrder
    isDataAnalysisPyCertV7?: SortOrder
    isDataVisCert?: SortOrder
    isDonating?: SortOrder
    isFoundationalCSharpCertV8?: SortOrder
    isFrontEndCert?: SortOrder
    isFrontEndLibsCert?: SortOrder
    isFullStackCert?: SortOrder
    isHonest?: SortOrder
    isInfosecCertV7?: SortOrder
    isInfosecQaCert?: SortOrder
    isJsAlgoDataStructCert?: SortOrder
    isJsAlgoDataStructCertV8?: SortOrder
    isMachineLearningPyCertV7?: SortOrder
    isQaCertV7?: SortOrder
    isRelationalDatabaseCertV8?: SortOrder
    isRespWebDesignCert?: SortOrder
    isSciCompPyCertV7?: SortOrder
    is2018DataVisCert?: SortOrder
    is2018FullStackCert?: SortOrder
    isCollegeAlgebraPyCertV8?: SortOrder
    isUpcomingPythonCertV8?: SortOrder
    keyboardShortcuts?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    name?: SortOrder
    needsModeration?: SortOrder
    newEmail?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    progressTimestamps?: SortOrder
    rand?: SortOrder
    sendQuincyEmail?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    twitter?: SortOrder
    unsubscribeId?: SortOrder
    updateCount?: SortOrder
    username?: SortOrder
    usernameDisplay?: SortOrder
    verificationToken?: SortOrder
    website?: SortOrder
    yearsTopContributor?: SortOrder
    isClassroomAccount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    about?: StringWithAggregatesFilter<"user"> | string
    acceptedPrivacyTerms?: BoolWithAggregatesFilter<"user"> | boolean
    currentChallengeId?: StringNullableWithAggregatesFilter<"user"> | string | null
    donationEmails?: StringNullableListFilter<"user">
    email?: StringWithAggregatesFilter<"user"> | string
    emailAuthLinkTTL?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    emailVerified?: BoolWithAggregatesFilter<"user"> | boolean
    emailVerifyTTL?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    externalId?: StringWithAggregatesFilter<"user"> | string
    githubProfile?: StringNullableWithAggregatesFilter<"user"> | string | null
    isApisMicroservicesCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isBackEndCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isBanned?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isCheater?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isDataAnalysisPyCertV7?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isDataVisCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isDonating?: BoolWithAggregatesFilter<"user"> | boolean
    isFoundationalCSharpCertV8?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isFrontEndCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isFrontEndLibsCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isFullStackCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isHonest?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isInfosecCertV7?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isInfosecQaCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isJsAlgoDataStructCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isJsAlgoDataStructCertV8?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isMachineLearningPyCertV7?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isQaCertV7?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isRelationalDatabaseCertV8?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isRespWebDesignCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isSciCompPyCertV7?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    is2018DataVisCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    is2018FullStackCert?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isCollegeAlgebraPyCertV8?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    isUpcomingPythonCertV8?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    keyboardShortcuts?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    linkedin?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    needsModeration?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    newEmail?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    picture?: StringWithAggregatesFilter<"user"> | string
    progressTimestamps?: JsonNullableWithAggregatesFilter<"user">
    rand?: FloatNullableWithAggregatesFilter<"user"> | number | null
    sendQuincyEmail?: BoolWithAggregatesFilter<"user"> | boolean
    theme?: StringNullableWithAggregatesFilter<"user"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"user"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"user"> | string | null
    unsubscribeId?: StringWithAggregatesFilter<"user"> | string
    updateCount?: IntNullableWithAggregatesFilter<"user"> | number | null
    username?: StringWithAggregatesFilter<"user"> | string
    usernameDisplay?: StringNullableWithAggregatesFilter<"user"> | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    website?: StringNullableWithAggregatesFilter<"user"> | string | null
    yearsTopContributor?: StringNullableListFilter<"user">
    isClassroomAccount?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    schemaVersion?: IntWithAggregatesFilter<"user"> | number
    lastUpdatedAtInMS?: IntNullableWithAggregatesFilter<"user"> | number | null
  }

  export type AccessTokenWhereInput = {
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    created?: DateTimeFilter<"AccessToken"> | Date | string
    ttl?: IntFilter<"AccessToken"> | number
    userId?: StringFilter<"AccessToken"> | string
  }

  export type AccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    created?: DateTimeFilter<"AccessToken"> | Date | string
    ttl?: IntFilter<"AccessToken"> | number
    userId?: StringFilter<"AccessToken"> | string
  }, "id">

  export type AccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
    _count?: AccessTokenCountOrderByAggregateInput
    _avg?: AccessTokenAvgOrderByAggregateInput
    _max?: AccessTokenMaxOrderByAggregateInput
    _min?: AccessTokenMinOrderByAggregateInput
    _sum?: AccessTokenSumOrderByAggregateInput
  }

  export type AccessTokenScalarWhereWithAggregatesInput = {
    AND?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    OR?: AccessTokenScalarWhereWithAggregatesInput[]
    NOT?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessToken"> | string
    created?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
    ttl?: IntWithAggregatesFilter<"AccessToken"> | number
    userId?: StringWithAggregatesFilter<"AccessToken"> | string
  }

  export type AuthTokenWhereInput = {
    AND?: AuthTokenWhereInput | AuthTokenWhereInput[]
    OR?: AuthTokenWhereInput[]
    NOT?: AuthTokenWhereInput | AuthTokenWhereInput[]
    id?: StringFilter<"AuthToken"> | string
    created?: DateTimeFilter<"AuthToken"> | Date | string
    ttl?: IntFilter<"AuthToken"> | number
    userId?: StringFilter<"AuthToken"> | string
  }

  export type AuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthTokenWhereInput | AuthTokenWhereInput[]
    OR?: AuthTokenWhereInput[]
    NOT?: AuthTokenWhereInput | AuthTokenWhereInput[]
    created?: DateTimeFilter<"AuthToken"> | Date | string
    ttl?: IntFilter<"AuthToken"> | number
    userId?: StringFilter<"AuthToken"> | string
  }, "id">

  export type AuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
    _count?: AuthTokenCountOrderByAggregateInput
    _avg?: AuthTokenAvgOrderByAggregateInput
    _max?: AuthTokenMaxOrderByAggregateInput
    _min?: AuthTokenMinOrderByAggregateInput
    _sum?: AuthTokenSumOrderByAggregateInput
  }

  export type AuthTokenScalarWhereWithAggregatesInput = {
    AND?: AuthTokenScalarWhereWithAggregatesInput | AuthTokenScalarWhereWithAggregatesInput[]
    OR?: AuthTokenScalarWhereWithAggregatesInput[]
    NOT?: AuthTokenScalarWhereWithAggregatesInput | AuthTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthToken"> | string
    created?: DateTimeWithAggregatesFilter<"AuthToken"> | Date | string
    ttl?: IntWithAggregatesFilter<"AuthToken"> | number
    userId?: StringWithAggregatesFilter<"AuthToken"> | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    amount?: IntFilter<"Donation"> | number
    customerId?: StringFilter<"Donation"> | string
    duration?: StringNullableFilter<"Donation"> | string | null
    email?: StringFilter<"Donation"> | string
    endDate?: XOR<DonationEndDateNullableCompositeFilter, DonationEndDateObjectEqualityInput> | null
    provider?: StringFilter<"Donation"> | string
    startDate?: XOR<DonationStartDateCompositeFilter, DonationStartDateObjectEqualityInput>
    subscriptionId?: StringFilter<"Donation"> | string
    userId?: StringFilter<"Donation"> | string
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
    duration?: SortOrder
    email?: SortOrder
    endDate?: DonationEndDateOrderByInput
    provider?: SortOrder
    startDate?: DonationStartDateOrderByInput
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: IntFilter<"Donation"> | number
    customerId?: StringFilter<"Donation"> | string
    duration?: StringNullableFilter<"Donation"> | string | null
    email?: StringFilter<"Donation"> | string
    endDate?: XOR<DonationEndDateNullableCompositeFilter, DonationEndDateObjectEqualityInput> | null
    provider?: StringFilter<"Donation"> | string
    startDate?: XOR<DonationStartDateCompositeFilter, DonationStartDateObjectEqualityInput>
    subscriptionId?: StringFilter<"Donation"> | string
    userId?: StringFilter<"Donation"> | string
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
    duration?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    amount?: IntWithAggregatesFilter<"Donation"> | number
    customerId?: StringWithAggregatesFilter<"Donation"> | string
    duration?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    email?: StringWithAggregatesFilter<"Donation"> | string
    provider?: StringWithAggregatesFilter<"Donation"> | string
    subscriptionId?: StringWithAggregatesFilter<"Donation"> | string
    userId?: StringWithAggregatesFilter<"Donation"> | string
  }

  export type UserRateLimitWhereInput = {
    AND?: UserRateLimitWhereInput | UserRateLimitWhereInput[]
    OR?: UserRateLimitWhereInput[]
    NOT?: UserRateLimitWhereInput | UserRateLimitWhereInput[]
    id?: StringFilter<"UserRateLimit"> | string
    counter?: IntFilter<"UserRateLimit"> | number
    expirationDate?: DateTimeFilter<"UserRateLimit"> | Date | string
  }

  export type UserRateLimitOrderByWithRelationInput = {
    id?: SortOrder
    counter?: SortOrder
    expirationDate?: SortOrder
  }

  export type UserRateLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRateLimitWhereInput | UserRateLimitWhereInput[]
    OR?: UserRateLimitWhereInput[]
    NOT?: UserRateLimitWhereInput | UserRateLimitWhereInput[]
    counter?: IntFilter<"UserRateLimit"> | number
    expirationDate?: DateTimeFilter<"UserRateLimit"> | Date | string
  }, "id">

  export type UserRateLimitOrderByWithAggregationInput = {
    id?: SortOrder
    counter?: SortOrder
    expirationDate?: SortOrder
    _count?: UserRateLimitCountOrderByAggregateInput
    _avg?: UserRateLimitAvgOrderByAggregateInput
    _max?: UserRateLimitMaxOrderByAggregateInput
    _min?: UserRateLimitMinOrderByAggregateInput
    _sum?: UserRateLimitSumOrderByAggregateInput
  }

  export type UserRateLimitScalarWhereWithAggregatesInput = {
    AND?: UserRateLimitScalarWhereWithAggregatesInput | UserRateLimitScalarWhereWithAggregatesInput[]
    OR?: UserRateLimitScalarWhereWithAggregatesInput[]
    NOT?: UserRateLimitScalarWhereWithAggregatesInput | UserRateLimitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRateLimit"> | string
    counter?: IntWithAggregatesFilter<"UserRateLimit"> | number
    expirationDate?: DateTimeWithAggregatesFilter<"UserRateLimit"> | Date | string
  }

  export type UserTokenWhereInput = {
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    id?: StringFilter<"UserToken"> | string
    created?: DateTimeFilter<"UserToken"> | Date | string
    ttl?: FloatFilter<"UserToken"> | number
    userId?: StringFilter<"UserToken"> | string
  }

  export type UserTokenOrderByWithRelationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type UserTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    created?: DateTimeFilter<"UserToken"> | Date | string
    ttl?: FloatFilter<"UserToken"> | number
    userId?: StringFilter<"UserToken"> | string
  }, "id">

  export type UserTokenOrderByWithAggregationInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
    _count?: UserTokenCountOrderByAggregateInput
    _avg?: UserTokenAvgOrderByAggregateInput
    _max?: UserTokenMaxOrderByAggregateInput
    _min?: UserTokenMinOrderByAggregateInput
    _sum?: UserTokenSumOrderByAggregateInput
  }

  export type UserTokenScalarWhereWithAggregatesInput = {
    AND?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    OR?: UserTokenScalarWhereWithAggregatesInput[]
    NOT?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserToken"> | string
    created?: DateTimeWithAggregatesFilter<"UserToken"> | Date | string
    ttl?: FloatWithAggregatesFilter<"UserToken"> | number
    userId?: StringWithAggregatesFilter<"UserToken"> | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    expires?: DateTimeFilter<"sessions"> | Date | string
    session?: StringFilter<"sessions"> | string
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    expires?: SortOrder
    session?: SortOrder
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    expires?: DateTimeFilter<"sessions"> | Date | string
    session?: StringFilter<"sessions"> | string
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    expires?: SortOrder
    session?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    expires?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    session?: StringWithAggregatesFilter<"sessions"> | string
  }

  export type MsUsernameWhereInput = {
    AND?: MsUsernameWhereInput | MsUsernameWhereInput[]
    OR?: MsUsernameWhereInput[]
    NOT?: MsUsernameWhereInput | MsUsernameWhereInput[]
    id?: StringFilter<"MsUsername"> | string
    userId?: StringFilter<"MsUsername"> | string
    ttl?: IntFilter<"MsUsername"> | number
    msUsername?: StringFilter<"MsUsername"> | string
  }

  export type MsUsernameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ttl?: SortOrder
    msUsername?: SortOrder
  }

  export type MsUsernameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MsUsernameWhereInput | MsUsernameWhereInput[]
    OR?: MsUsernameWhereInput[]
    NOT?: MsUsernameWhereInput | MsUsernameWhereInput[]
    userId?: StringFilter<"MsUsername"> | string
    ttl?: IntFilter<"MsUsername"> | number
    msUsername?: StringFilter<"MsUsername"> | string
  }, "id">

  export type MsUsernameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ttl?: SortOrder
    msUsername?: SortOrder
    _count?: MsUsernameCountOrderByAggregateInput
    _avg?: MsUsernameAvgOrderByAggregateInput
    _max?: MsUsernameMaxOrderByAggregateInput
    _min?: MsUsernameMinOrderByAggregateInput
    _sum?: MsUsernameSumOrderByAggregateInput
  }

  export type MsUsernameScalarWhereWithAggregatesInput = {
    AND?: MsUsernameScalarWhereWithAggregatesInput | MsUsernameScalarWhereWithAggregatesInput[]
    OR?: MsUsernameScalarWhereWithAggregatesInput[]
    NOT?: MsUsernameScalarWhereWithAggregatesInput | MsUsernameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MsUsername"> | string
    userId?: StringWithAggregatesFilter<"MsUsername"> | string
    ttl?: IntWithAggregatesFilter<"MsUsername"> | number
    msUsername?: StringWithAggregatesFilter<"MsUsername"> | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    numberOfQuestionsInExam?: IntFilter<"Exam"> | number
    passingPercent?: IntFilter<"Exam"> | number
    prerequisites?: PrerequisiteCompositeListFilter | PrerequisiteObjectEqualityInput[]
    title?: StringFilter<"Exam"> | string
    questions?: QuestionCompositeListFilter | QuestionObjectEqualityInput[]
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
    prerequisites?: PrerequisiteOrderByCompositeAggregateInput
    title?: SortOrder
    questions?: QuestionOrderByCompositeAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    numberOfQuestionsInExam?: IntFilter<"Exam"> | number
    passingPercent?: IntFilter<"Exam"> | number
    prerequisites?: PrerequisiteCompositeListFilter | PrerequisiteObjectEqualityInput[]
    title?: StringFilter<"Exam"> | string
    questions?: QuestionCompositeListFilter | QuestionObjectEqualityInput[]
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
    title?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    numberOfQuestionsInExam?: IntWithAggregatesFilter<"Exam"> | number
    passingPercent?: IntWithAggregatesFilter<"Exam"> | number
    title?: StringWithAggregatesFilter<"Exam"> | string
  }

  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: StringFilter<"Survey"> | string
    userId?: StringFilter<"Survey"> | string
    title?: StringFilter<"Survey"> | string
    responses?: SurveyResponseCompositeListFilter | SurveyResponseObjectEqualityInput[]
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    responses?: SurveyResponseOrderByCompositeAggregateInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    userId?: StringFilter<"Survey"> | string
    title?: StringFilter<"Survey"> | string
    responses?: SurveyResponseCompositeListFilter | SurveyResponseObjectEqualityInput[]
  }, "id">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey"> | string
    userId?: StringWithAggregatesFilter<"Survey"> | string
    title?: StringWithAggregatesFilter<"Survey"> | string
  }

  export type userCreateInput = {
    id?: string
    about: string
    acceptedPrivacyTerms: boolean
    completedChallenges?: XOR<CompletedChallengeListCreateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListCreateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: string | null
    donationEmails?: userCreatedonationEmailsInput | string[]
    email: string
    emailAuthLinkTTL?: Date | string | null
    emailVerified: boolean
    emailVerifyTTL?: Date | string | null
    externalId: string
    githubProfile?: string | null
    isApisMicroservicesCert?: boolean | null
    isBackEndCert?: boolean | null
    isBanned?: boolean | null
    isCheater?: boolean | null
    isDataAnalysisPyCertV7?: boolean | null
    isDataVisCert?: boolean | null
    isDonating: boolean
    isFoundationalCSharpCertV8?: boolean | null
    isFrontEndCert?: boolean | null
    isFrontEndLibsCert?: boolean | null
    isFullStackCert?: boolean | null
    isHonest?: boolean | null
    isInfosecCertV7?: boolean | null
    isInfosecQaCert?: boolean | null
    isJsAlgoDataStructCert?: boolean | null
    isJsAlgoDataStructCertV8?: boolean | null
    isMachineLearningPyCertV7?: boolean | null
    isQaCertV7?: boolean | null
    isRelationalDatabaseCertV8?: boolean | null
    isRespWebDesignCert?: boolean | null
    isSciCompPyCertV7?: boolean | null
    is2018DataVisCert?: boolean | null
    is2018FullStackCert?: boolean | null
    isCollegeAlgebraPyCertV8?: boolean | null
    isUpcomingPythonCertV8?: boolean | null
    keyboardShortcuts?: boolean | null
    linkedin?: string | null
    location?: string | null
    name?: string | null
    needsModeration?: boolean | null
    newEmail?: string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListCreateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: string | null
    picture: string
    portfolio?: XOR<PortfolioListCreateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableCreateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | null
    rand?: number | null
    savedChallenges?: XOR<SavedChallengeListCreateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail: boolean
    theme?: string | null
    timezone?: string | null
    twitter?: string | null
    unsubscribeId: string
    updateCount?: number | null
    username: string
    usernameDisplay?: string | null
    verificationToken?: string | null
    website?: string | null
    yearsTopContributor?: userCreateyearsTopContributorInput | string[]
    isClassroomAccount?: boolean | null
    schemaVersion?: number
    lastUpdatedAtInMS?: number | null
  }

  export type userUncheckedCreateInput = {
    id?: string
    about: string
    acceptedPrivacyTerms: boolean
    completedChallenges?: XOR<CompletedChallengeListCreateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListCreateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: string | null
    donationEmails?: userCreatedonationEmailsInput | string[]
    email: string
    emailAuthLinkTTL?: Date | string | null
    emailVerified: boolean
    emailVerifyTTL?: Date | string | null
    externalId: string
    githubProfile?: string | null
    isApisMicroservicesCert?: boolean | null
    isBackEndCert?: boolean | null
    isBanned?: boolean | null
    isCheater?: boolean | null
    isDataAnalysisPyCertV7?: boolean | null
    isDataVisCert?: boolean | null
    isDonating: boolean
    isFoundationalCSharpCertV8?: boolean | null
    isFrontEndCert?: boolean | null
    isFrontEndLibsCert?: boolean | null
    isFullStackCert?: boolean | null
    isHonest?: boolean | null
    isInfosecCertV7?: boolean | null
    isInfosecQaCert?: boolean | null
    isJsAlgoDataStructCert?: boolean | null
    isJsAlgoDataStructCertV8?: boolean | null
    isMachineLearningPyCertV7?: boolean | null
    isQaCertV7?: boolean | null
    isRelationalDatabaseCertV8?: boolean | null
    isRespWebDesignCert?: boolean | null
    isSciCompPyCertV7?: boolean | null
    is2018DataVisCert?: boolean | null
    is2018FullStackCert?: boolean | null
    isCollegeAlgebraPyCertV8?: boolean | null
    isUpcomingPythonCertV8?: boolean | null
    keyboardShortcuts?: boolean | null
    linkedin?: string | null
    location?: string | null
    name?: string | null
    needsModeration?: boolean | null
    newEmail?: string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListCreateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: string | null
    picture: string
    portfolio?: XOR<PortfolioListCreateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableCreateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | null
    rand?: number | null
    savedChallenges?: XOR<SavedChallengeListCreateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail: boolean
    theme?: string | null
    timezone?: string | null
    twitter?: string | null
    unsubscribeId: string
    updateCount?: number | null
    username: string
    usernameDisplay?: string | null
    verificationToken?: string | null
    website?: string | null
    yearsTopContributor?: userCreateyearsTopContributorInput | string[]
    isClassroomAccount?: boolean | null
    schemaVersion?: number
    lastUpdatedAtInMS?: number | null
  }

  export type userUpdateInput = {
    about?: StringFieldUpdateOperationsInput | string
    acceptedPrivacyTerms?: BoolFieldUpdateOperationsInput | boolean
    completedChallenges?: XOR<CompletedChallengeListUpdateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListUpdateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    donationEmails?: userUpdatedonationEmailsInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    emailAuthLinkTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    githubProfile?: NullableStringFieldUpdateOperationsInput | string | null
    isApisMicroservicesCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBackEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBanned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCheater?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataAnalysisPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDonating?: BoolFieldUpdateOperationsInput | boolean
    isFoundationalCSharpCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndLibsCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHonest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecQaCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isMachineLearningPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isQaCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRelationalDatabaseCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRespWebDesignCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isSciCompPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018DataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018FullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCollegeAlgebraPyCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUpcomingPythonCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyboardShortcuts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needsModeration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListUpdateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    portfolio?: XOR<PortfolioListUpdateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableUpdateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | InputJsonValue | null
    rand?: NullableFloatFieldUpdateOperationsInput | number | null
    savedChallenges?: XOR<SavedChallengeListUpdateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    unsubscribeId?: StringFieldUpdateOperationsInput | string
    updateCount?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    usernameDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    yearsTopContributor?: userUpdateyearsTopContributorInput | string[]
    isClassroomAccount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaVersion?: IntFieldUpdateOperationsInput | number
    lastUpdatedAtInMS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUncheckedUpdateInput = {
    about?: StringFieldUpdateOperationsInput | string
    acceptedPrivacyTerms?: BoolFieldUpdateOperationsInput | boolean
    completedChallenges?: XOR<CompletedChallengeListUpdateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListUpdateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    donationEmails?: userUpdatedonationEmailsInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    emailAuthLinkTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    githubProfile?: NullableStringFieldUpdateOperationsInput | string | null
    isApisMicroservicesCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBackEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBanned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCheater?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataAnalysisPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDonating?: BoolFieldUpdateOperationsInput | boolean
    isFoundationalCSharpCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndLibsCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHonest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecQaCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isMachineLearningPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isQaCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRelationalDatabaseCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRespWebDesignCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isSciCompPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018DataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018FullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCollegeAlgebraPyCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUpcomingPythonCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyboardShortcuts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needsModeration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListUpdateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    portfolio?: XOR<PortfolioListUpdateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableUpdateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | InputJsonValue | null
    rand?: NullableFloatFieldUpdateOperationsInput | number | null
    savedChallenges?: XOR<SavedChallengeListUpdateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    unsubscribeId?: StringFieldUpdateOperationsInput | string
    updateCount?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    usernameDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    yearsTopContributor?: userUpdateyearsTopContributorInput | string[]
    isClassroomAccount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaVersion?: IntFieldUpdateOperationsInput | number
    lastUpdatedAtInMS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateManyInput = {
    id?: string
    about: string
    acceptedPrivacyTerms: boolean
    completedChallenges?: XOR<CompletedChallengeListCreateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListCreateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: string | null
    donationEmails?: userCreatedonationEmailsInput | string[]
    email: string
    emailAuthLinkTTL?: Date | string | null
    emailVerified: boolean
    emailVerifyTTL?: Date | string | null
    externalId: string
    githubProfile?: string | null
    isApisMicroservicesCert?: boolean | null
    isBackEndCert?: boolean | null
    isBanned?: boolean | null
    isCheater?: boolean | null
    isDataAnalysisPyCertV7?: boolean | null
    isDataVisCert?: boolean | null
    isDonating: boolean
    isFoundationalCSharpCertV8?: boolean | null
    isFrontEndCert?: boolean | null
    isFrontEndLibsCert?: boolean | null
    isFullStackCert?: boolean | null
    isHonest?: boolean | null
    isInfosecCertV7?: boolean | null
    isInfosecQaCert?: boolean | null
    isJsAlgoDataStructCert?: boolean | null
    isJsAlgoDataStructCertV8?: boolean | null
    isMachineLearningPyCertV7?: boolean | null
    isQaCertV7?: boolean | null
    isRelationalDatabaseCertV8?: boolean | null
    isRespWebDesignCert?: boolean | null
    isSciCompPyCertV7?: boolean | null
    is2018DataVisCert?: boolean | null
    is2018FullStackCert?: boolean | null
    isCollegeAlgebraPyCertV8?: boolean | null
    isUpcomingPythonCertV8?: boolean | null
    keyboardShortcuts?: boolean | null
    linkedin?: string | null
    location?: string | null
    name?: string | null
    needsModeration?: boolean | null
    newEmail?: string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListCreateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: string | null
    picture: string
    portfolio?: XOR<PortfolioListCreateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableCreateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | null
    rand?: number | null
    savedChallenges?: XOR<SavedChallengeListCreateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail: boolean
    theme?: string | null
    timezone?: string | null
    twitter?: string | null
    unsubscribeId: string
    updateCount?: number | null
    username: string
    usernameDisplay?: string | null
    verificationToken?: string | null
    website?: string | null
    yearsTopContributor?: userCreateyearsTopContributorInput | string[]
    isClassroomAccount?: boolean | null
    schemaVersion?: number
    lastUpdatedAtInMS?: number | null
  }

  export type userUpdateManyMutationInput = {
    about?: StringFieldUpdateOperationsInput | string
    acceptedPrivacyTerms?: BoolFieldUpdateOperationsInput | boolean
    completedChallenges?: XOR<CompletedChallengeListUpdateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListUpdateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    donationEmails?: userUpdatedonationEmailsInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    emailAuthLinkTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    githubProfile?: NullableStringFieldUpdateOperationsInput | string | null
    isApisMicroservicesCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBackEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBanned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCheater?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataAnalysisPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDonating?: BoolFieldUpdateOperationsInput | boolean
    isFoundationalCSharpCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndLibsCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHonest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecQaCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isMachineLearningPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isQaCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRelationalDatabaseCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRespWebDesignCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isSciCompPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018DataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018FullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCollegeAlgebraPyCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUpcomingPythonCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyboardShortcuts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needsModeration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListUpdateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    portfolio?: XOR<PortfolioListUpdateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableUpdateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | InputJsonValue | null
    rand?: NullableFloatFieldUpdateOperationsInput | number | null
    savedChallenges?: XOR<SavedChallengeListUpdateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    unsubscribeId?: StringFieldUpdateOperationsInput | string
    updateCount?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    usernameDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    yearsTopContributor?: userUpdateyearsTopContributorInput | string[]
    isClassroomAccount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaVersion?: IntFieldUpdateOperationsInput | number
    lastUpdatedAtInMS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUncheckedUpdateManyInput = {
    about?: StringFieldUpdateOperationsInput | string
    acceptedPrivacyTerms?: BoolFieldUpdateOperationsInput | boolean
    completedChallenges?: XOR<CompletedChallengeListUpdateEnvelopeInput, CompletedChallengeCreateInput> | CompletedChallengeCreateInput[]
    completedExams?: XOR<CompletedExamListUpdateEnvelopeInput, CompletedExamCreateInput> | CompletedExamCreateInput[]
    currentChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    donationEmails?: userUpdatedonationEmailsInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    emailAuthLinkTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyTTL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    githubProfile?: NullableStringFieldUpdateOperationsInput | string | null
    isApisMicroservicesCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBackEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isBanned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCheater?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataAnalysisPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDonating?: BoolFieldUpdateOperationsInput | boolean
    isFoundationalCSharpCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFrontEndLibsCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isHonest?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInfosecQaCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isJsAlgoDataStructCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isMachineLearningPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isQaCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRelationalDatabaseCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isRespWebDesignCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isSciCompPyCertV7?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018DataVisCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is2018FullStackCert?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isCollegeAlgebraPyCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUpcomingPythonCertV8?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyboardShortcuts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    needsModeration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
    partiallyCompletedChallenges?: XOR<PartiallyCompletedChallengeListUpdateEnvelopeInput, PartiallyCompletedChallengeCreateInput> | PartiallyCompletedChallengeCreateInput[]
    password?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: StringFieldUpdateOperationsInput | string
    portfolio?: XOR<PortfolioListUpdateEnvelopeInput, PortfolioCreateInput> | PortfolioCreateInput[]
    profileUI?: XOR<ProfileUINullableUpdateEnvelopeInput, ProfileUICreateInput> | null
    progressTimestamps?: InputJsonValue | InputJsonValue | null
    rand?: NullableFloatFieldUpdateOperationsInput | number | null
    savedChallenges?: XOR<SavedChallengeListUpdateEnvelopeInput, SavedChallengeCreateInput> | SavedChallengeCreateInput[]
    sendQuincyEmail?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    unsubscribeId?: StringFieldUpdateOperationsInput | string
    updateCount?: NullableIntFieldUpdateOperationsInput | number | null
    username?: StringFieldUpdateOperationsInput | string
    usernameDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    yearsTopContributor?: userUpdateyearsTopContributorInput | string[]
    isClassroomAccount?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaVersion?: IntFieldUpdateOperationsInput | number
    lastUpdatedAtInMS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccessTokenCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AccessTokenUncheckedCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AccessTokenUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccessTokenUncheckedUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccessTokenCreateManyInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AccessTokenUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccessTokenUncheckedUpdateManyInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AuthTokenUncheckedCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AuthTokenUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenUncheckedUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenCreateManyInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type AuthTokenUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthTokenUncheckedUpdateManyInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateInput = {
    id?: string
    amount: number
    customerId: string
    duration?: string | null
    email: string
    endDate?: XOR<DonationEndDateNullableCreateEnvelopeInput, DonationEndDateCreateInput> | null
    provider: string
    startDate: XOR<DonationStartDateCreateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId: string
    userId: string
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    amount: number
    customerId: string
    duration?: string | null
    email: string
    endDate?: XOR<DonationEndDateNullableCreateEnvelopeInput, DonationEndDateCreateInput> | null
    provider: string
    startDate: XOR<DonationStartDateCreateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId: string
    userId: string
  }

  export type DonationUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endDate?: XOR<DonationEndDateNullableUpdateEnvelopeInput, DonationEndDateCreateInput> | null
    provider?: StringFieldUpdateOperationsInput | string
    startDate?: XOR<DonationStartDateUpdateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endDate?: XOR<DonationEndDateNullableUpdateEnvelopeInput, DonationEndDateCreateInput> | null
    provider?: StringFieldUpdateOperationsInput | string
    startDate?: XOR<DonationStartDateUpdateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateManyInput = {
    id?: string
    amount: number
    customerId: string
    duration?: string | null
    email: string
    endDate?: XOR<DonationEndDateNullableCreateEnvelopeInput, DonationEndDateCreateInput> | null
    provider: string
    startDate: XOR<DonationStartDateCreateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId: string
    userId: string
  }

  export type DonationUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endDate?: XOR<DonationEndDateNullableUpdateEnvelopeInput, DonationEndDateCreateInput> | null
    provider?: StringFieldUpdateOperationsInput | string
    startDate?: XOR<DonationStartDateUpdateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyInput = {
    amount?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endDate?: XOR<DonationEndDateNullableUpdateEnvelopeInput, DonationEndDateCreateInput> | null
    provider?: StringFieldUpdateOperationsInput | string
    startDate?: XOR<DonationStartDateUpdateEnvelopeInput, DonationStartDateCreateInput>
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRateLimitCreateInput = {
    id: string
    counter: number
    expirationDate: Date | string
  }

  export type UserRateLimitUncheckedCreateInput = {
    id: string
    counter: number
    expirationDate: Date | string
  }

  export type UserRateLimitUpdateInput = {
    counter?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRateLimitUncheckedUpdateInput = {
    counter?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRateLimitCreateManyInput = {
    id: string
    counter: number
    expirationDate: Date | string
  }

  export type UserRateLimitUpdateManyMutationInput = {
    counter?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRateLimitUncheckedUpdateManyInput = {
    counter?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type UserTokenUncheckedCreateInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type UserTokenUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenUncheckedUpdateInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenCreateManyInput = {
    id: string
    created: Date | string
    ttl: number
    userId: string
  }

  export type UserTokenUpdateManyMutationInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenUncheckedUpdateManyInput = {
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    ttl?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateInput = {
    id: string
    expires: Date | string
    session: string
  }

  export type sessionsUncheckedCreateInput = {
    id: string
    expires: Date | string
    session: string
  }

  export type sessionsUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateManyInput = {
    id: string
    expires: Date | string
    session: string
  }

  export type sessionsUpdateManyMutationInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: StringFieldUpdateOperationsInput | string
  }

  export type MsUsernameCreateInput = {
    id?: string
    userId: string
    ttl: number
    msUsername: string
  }

  export type MsUsernameUncheckedCreateInput = {
    id?: string
    userId: string
    ttl: number
    msUsername: string
  }

  export type MsUsernameUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ttl?: IntFieldUpdateOperationsInput | number
    msUsername?: StringFieldUpdateOperationsInput | string
  }

  export type MsUsernameUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ttl?: IntFieldUpdateOperationsInput | number
    msUsername?: StringFieldUpdateOperationsInput | string
  }

  export type MsUsernameCreateManyInput = {
    id?: string
    userId: string
    ttl: number
    msUsername: string
  }

  export type MsUsernameUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ttl?: IntFieldUpdateOperationsInput | number
    msUsername?: StringFieldUpdateOperationsInput | string
  }

  export type MsUsernameUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ttl?: IntFieldUpdateOperationsInput | number
    msUsername?: StringFieldUpdateOperationsInput | string
  }

  export type ExamCreateInput = {
    id: string
    numberOfQuestionsInExam: number
    passingPercent: number
    prerequisites?: XOR<PrerequisiteListCreateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title: string
    questions?: XOR<QuestionListCreateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamUncheckedCreateInput = {
    id: string
    numberOfQuestionsInExam: number
    passingPercent: number
    prerequisites?: XOR<PrerequisiteListCreateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title: string
    questions?: XOR<QuestionListCreateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamUpdateInput = {
    numberOfQuestionsInExam?: IntFieldUpdateOperationsInput | number
    passingPercent?: IntFieldUpdateOperationsInput | number
    prerequisites?: XOR<PrerequisiteListUpdateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    questions?: XOR<QuestionListUpdateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamUncheckedUpdateInput = {
    numberOfQuestionsInExam?: IntFieldUpdateOperationsInput | number
    passingPercent?: IntFieldUpdateOperationsInput | number
    prerequisites?: XOR<PrerequisiteListUpdateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    questions?: XOR<QuestionListUpdateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamCreateManyInput = {
    id: string
    numberOfQuestionsInExam: number
    passingPercent: number
    prerequisites?: XOR<PrerequisiteListCreateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title: string
    questions?: XOR<QuestionListCreateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamUpdateManyMutationInput = {
    numberOfQuestionsInExam?: IntFieldUpdateOperationsInput | number
    passingPercent?: IntFieldUpdateOperationsInput | number
    prerequisites?: XOR<PrerequisiteListUpdateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    questions?: XOR<QuestionListUpdateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type ExamUncheckedUpdateManyInput = {
    numberOfQuestionsInExam?: IntFieldUpdateOperationsInput | number
    passingPercent?: IntFieldUpdateOperationsInput | number
    prerequisites?: XOR<PrerequisiteListUpdateEnvelopeInput, PrerequisiteCreateInput> | PrerequisiteCreateInput[]
    title?: StringFieldUpdateOperationsInput | string
    questions?: XOR<QuestionListUpdateEnvelopeInput, QuestionCreateInput> | QuestionCreateInput[]
  }

  export type SurveyCreateInput = {
    id?: string
    userId: string
    title: string
    responses?: XOR<SurveyResponseListCreateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    responses?: XOR<SurveyResponseListCreateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    responses?: XOR<SurveyResponseListUpdateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    responses?: XOR<SurveyResponseListUpdateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyCreateManyInput = {
    id?: string
    userId: string
    title: string
    responses?: XOR<SurveyResponseListCreateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    responses?: XOR<SurveyResponseListUpdateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type SurveyUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    responses?: XOR<SurveyResponseListUpdateEnvelopeInput, SurveyResponseCreateInput> | SurveyResponseCreateInput[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompletedChallengeCompositeListFilter = {
    equals?: CompletedChallengeObjectEqualityInput[]
    every?: CompletedChallengeWhereInput
    some?: CompletedChallengeWhereInput
    none?: CompletedChallengeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CompletedChallengeObjectEqualityInput = {
    challengeType?: number | null
    completedDate: number
    files?: FileObjectEqualityInput[]
    githubLink?: string | null
    id: string
    isManuallyApproved?: boolean | null
    solution?: string | null
    examResults?: ExamResultsObjectEqualityInput | null
  }

  export type CompletedExamCompositeListFilter = {
    equals?: CompletedExamObjectEqualityInput[]
    every?: CompletedExamWhereInput
    some?: CompletedExamWhereInput
    none?: CompletedExamWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CompletedExamObjectEqualityInput = {
    id: string
    challengeType: number
    completedDate: number
    examResults: ExamResultsObjectEqualityInput
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type PartiallyCompletedChallengeCompositeListFilter = {
    equals?: PartiallyCompletedChallengeObjectEqualityInput[]
    every?: PartiallyCompletedChallengeWhereInput
    some?: PartiallyCompletedChallengeWhereInput
    none?: PartiallyCompletedChallengeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type PartiallyCompletedChallengeObjectEqualityInput = {
    id: string
    completedDate: number
  }

  export type PortfolioCompositeListFilter = {
    equals?: PortfolioObjectEqualityInput[]
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type PortfolioObjectEqualityInput = {
    description: string
    id: string
    image: string
    title: string
    url: string
  }

  export type ProfileUINullableCompositeFilter = {
    equals?: ProfileUIObjectEqualityInput | null
    is?: ProfileUIWhereInput | null
    isNot?: ProfileUIWhereInput | null
    isSet?: boolean
  }

  export type ProfileUIObjectEqualityInput = {
    isLocked?: boolean | null
    showAbout?: boolean | null
    showCerts?: boolean | null
    showDonation?: boolean | null
    showHeatMap?: boolean | null
    showLocation?: boolean | null
    showName?: boolean | null
    showPoints?: boolean | null
    showPortfolio?: boolean | null
    showTimeLine?: boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type SavedChallengeCompositeListFilter = {
    equals?: SavedChallengeObjectEqualityInput[]
    every?: SavedChallengeWhereInput
    some?: SavedChallengeWhereInput
    none?: SavedChallengeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type SavedChallengeObjectEqualityInput = {
    files?: SavedChallengeFileObjectEqualityInput[]
    id: string
    lastSavedDate: number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CompletedChallengeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedExamOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type PartiallyCompletedChallengeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileUIOrderByInput = {
    isLocked?: SortOrder
    showAbout?: SortOrder
    showCerts?: SortOrder
    showDonation?: SortOrder
    showHeatMap?: SortOrder
    showLocation?: SortOrder
    showName?: SortOrder
    showPoints?: SortOrder
    showPortfolio?: SortOrder
    showTimeLine?: SortOrder
  }

  export type SavedChallengeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    acceptedPrivacyTerms?: SortOrder
    currentChallengeId?: SortOrder
    donationEmails?: SortOrder
    email?: SortOrder
    emailAuthLinkTTL?: SortOrder
    emailVerified?: SortOrder
    emailVerifyTTL?: SortOrder
    externalId?: SortOrder
    githubProfile?: SortOrder
    isApisMicroservicesCert?: SortOrder
    isBackEndCert?: SortOrder
    isBanned?: SortOrder
    isCheater?: SortOrder
    isDataAnalysisPyCertV7?: SortOrder
    isDataVisCert?: SortOrder
    isDonating?: SortOrder
    isFoundationalCSharpCertV8?: SortOrder
    isFrontEndCert?: SortOrder
    isFrontEndLibsCert?: SortOrder
    isFullStackCert?: SortOrder
    isHonest?: SortOrder
    isInfosecCertV7?: SortOrder
    isInfosecQaCert?: SortOrder
    isJsAlgoDataStructCert?: SortOrder
    isJsAlgoDataStructCertV8?: SortOrder
    isMachineLearningPyCertV7?: SortOrder
    isQaCertV7?: SortOrder
    isRelationalDatabaseCertV8?: SortOrder
    isRespWebDesignCert?: SortOrder
    isSciCompPyCertV7?: SortOrder
    is2018DataVisCert?: SortOrder
    is2018FullStackCert?: SortOrder
    isCollegeAlgebraPyCertV8?: SortOrder
    isUpcomingPythonCertV8?: SortOrder
    keyboardShortcuts?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    name?: SortOrder
    needsModeration?: SortOrder
    newEmail?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    progressTimestamps?: SortOrder
    rand?: SortOrder
    sendQuincyEmail?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    twitter?: SortOrder
    unsubscribeId?: SortOrder
    updateCount?: SortOrder
    username?: SortOrder
    usernameDisplay?: SortOrder
    verificationToken?: SortOrder
    website?: SortOrder
    yearsTopContributor?: SortOrder
    isClassroomAccount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    rand?: SortOrder
    updateCount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    acceptedPrivacyTerms?: SortOrder
    currentChallengeId?: SortOrder
    email?: SortOrder
    emailAuthLinkTTL?: SortOrder
    emailVerified?: SortOrder
    emailVerifyTTL?: SortOrder
    externalId?: SortOrder
    githubProfile?: SortOrder
    isApisMicroservicesCert?: SortOrder
    isBackEndCert?: SortOrder
    isBanned?: SortOrder
    isCheater?: SortOrder
    isDataAnalysisPyCertV7?: SortOrder
    isDataVisCert?: SortOrder
    isDonating?: SortOrder
    isFoundationalCSharpCertV8?: SortOrder
    isFrontEndCert?: SortOrder
    isFrontEndLibsCert?: SortOrder
    isFullStackCert?: SortOrder
    isHonest?: SortOrder
    isInfosecCertV7?: SortOrder
    isInfosecQaCert?: SortOrder
    isJsAlgoDataStructCert?: SortOrder
    isJsAlgoDataStructCertV8?: SortOrder
    isMachineLearningPyCertV7?: SortOrder
    isQaCertV7?: SortOrder
    isRelationalDatabaseCertV8?: SortOrder
    isRespWebDesignCert?: SortOrder
    isSciCompPyCertV7?: SortOrder
    is2018DataVisCert?: SortOrder
    is2018FullStackCert?: SortOrder
    isCollegeAlgebraPyCertV8?: SortOrder
    isUpcomingPythonCertV8?: SortOrder
    keyboardShortcuts?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    name?: SortOrder
    needsModeration?: SortOrder
    newEmail?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    rand?: SortOrder
    sendQuincyEmail?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    twitter?: SortOrder
    unsubscribeId?: SortOrder
    updateCount?: SortOrder
    username?: SortOrder
    usernameDisplay?: SortOrder
    verificationToken?: SortOrder
    website?: SortOrder
    isClassroomAccount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    about?: SortOrder
    acceptedPrivacyTerms?: SortOrder
    currentChallengeId?: SortOrder
    email?: SortOrder
    emailAuthLinkTTL?: SortOrder
    emailVerified?: SortOrder
    emailVerifyTTL?: SortOrder
    externalId?: SortOrder
    githubProfile?: SortOrder
    isApisMicroservicesCert?: SortOrder
    isBackEndCert?: SortOrder
    isBanned?: SortOrder
    isCheater?: SortOrder
    isDataAnalysisPyCertV7?: SortOrder
    isDataVisCert?: SortOrder
    isDonating?: SortOrder
    isFoundationalCSharpCertV8?: SortOrder
    isFrontEndCert?: SortOrder
    isFrontEndLibsCert?: SortOrder
    isFullStackCert?: SortOrder
    isHonest?: SortOrder
    isInfosecCertV7?: SortOrder
    isInfosecQaCert?: SortOrder
    isJsAlgoDataStructCert?: SortOrder
    isJsAlgoDataStructCertV8?: SortOrder
    isMachineLearningPyCertV7?: SortOrder
    isQaCertV7?: SortOrder
    isRelationalDatabaseCertV8?: SortOrder
    isRespWebDesignCert?: SortOrder
    isSciCompPyCertV7?: SortOrder
    is2018DataVisCert?: SortOrder
    is2018FullStackCert?: SortOrder
    isCollegeAlgebraPyCertV8?: SortOrder
    isUpcomingPythonCertV8?: SortOrder
    keyboardShortcuts?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    name?: SortOrder
    needsModeration?: SortOrder
    newEmail?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    rand?: SortOrder
    sendQuincyEmail?: SortOrder
    theme?: SortOrder
    timezone?: SortOrder
    twitter?: SortOrder
    unsubscribeId?: SortOrder
    updateCount?: SortOrder
    username?: SortOrder
    usernameDisplay?: SortOrder
    verificationToken?: SortOrder
    website?: SortOrder
    isClassroomAccount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    rand?: SortOrder
    updateCount?: SortOrder
    schemaVersion?: SortOrder
    lastUpdatedAtInMS?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AccessTokenAvgOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type AccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AccessTokenSumOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenAvgOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type AuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type AuthTokenSumOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type DonationEndDateNullableCompositeFilter = {
    equals?: DonationEndDateObjectEqualityInput | null
    is?: DonationEndDateWhereInput | null
    isNot?: DonationEndDateWhereInput | null
    isSet?: boolean
  }

  export type DonationEndDateObjectEqualityInput = {
    date: Date | string
    when: string
  }

  export type DonationStartDateCompositeFilter = {
    equals?: DonationStartDateObjectEqualityInput
    is?: DonationStartDateWhereInput
    isNot?: DonationStartDateWhereInput
  }

  export type DonationStartDateObjectEqualityInput = {
    date: Date | string
    when: string
  }

  export type DonationEndDateOrderByInput = {
    date?: SortOrder
    when?: SortOrder
  }

  export type DonationStartDateOrderByInput = {
    date?: SortOrder
    when?: SortOrder
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
    duration?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
    duration?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
    duration?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserRateLimitCountOrderByAggregateInput = {
    id?: SortOrder
    counter?: SortOrder
    expirationDate?: SortOrder
  }

  export type UserRateLimitAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type UserRateLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    counter?: SortOrder
    expirationDate?: SortOrder
  }

  export type UserRateLimitMinOrderByAggregateInput = {
    id?: SortOrder
    counter?: SortOrder
    expirationDate?: SortOrder
  }

  export type UserRateLimitSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserTokenCountOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type UserTokenAvgOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type UserTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type UserTokenMinOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    ttl?: SortOrder
    userId?: SortOrder
  }

  export type UserTokenSumOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    expires?: SortOrder
    session?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    expires?: SortOrder
    session?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    expires?: SortOrder
    session?: SortOrder
  }

  export type MsUsernameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ttl?: SortOrder
    msUsername?: SortOrder
  }

  export type MsUsernameAvgOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type MsUsernameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ttl?: SortOrder
    msUsername?: SortOrder
  }

  export type MsUsernameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ttl?: SortOrder
    msUsername?: SortOrder
  }

  export type MsUsernameSumOrderByAggregateInput = {
    ttl?: SortOrder
  }

  export type PrerequisiteCompositeListFilter = {
    equals?: PrerequisiteObjectEqualityInput[]
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type PrerequisiteObjectEqualityInput = {
    id: string
    title: string
  }

  export type QuestionCompositeListFilter = {
    equals?: QuestionObjectEqualityInput[]
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type QuestionObjectEqualityInput = {
    id: string
    question: string
    wrongAnswers?: AnswerObjectEqualityInput[]
    correctAnswers?: AnswerObjectEqualityInput[]
    deprecated?: boolean | null
  }

  export type PrerequisiteOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
    title?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
    title?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
    title?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    numberOfQuestionsInExam?: SortOrder
    passingPercent?: SortOrder
  }

  export type SurveyResponseCompositeListFilter = {
    equals?: SurveyResponseObjectEqualityInput[]
    every?: SurveyResponseWhereInput
    some?: SurveyResponseWhereInput
    none?: SurveyResponseWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type SurveyResponseObjectEqualityInput = {
    question: string
    response: string
  }

  export type SurveyResponseOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
  }

  export type CompletedChallengeListCreateEnvelopeInput = {
    set?: CompletedChallengeCreateInput | CompletedChallengeCreateInput[]
  }

  export type CompletedChallengeCreateInput = {
    challengeType?: number | null
    completedDate: number
    files?: FileCreateInput | FileCreateInput[]
    githubLink?: string | null
    id: string
    isManuallyApproved?: boolean | null
    solution?: string | null
    examResults?: ExamResultsCreateInput | null
  }

  export type CompletedExamListCreateEnvelopeInput = {
    set?: CompletedExamCreateInput | CompletedExamCreateInput[]
  }

  export type CompletedExamCreateInput = {
    id: string
    challengeType: number
    completedDate: number
    examResults: ExamResultsCreateInput
  }

  export type userCreatedonationEmailsInput = {
    set: string[]
  }

  export type PartiallyCompletedChallengeListCreateEnvelopeInput = {
    set?: PartiallyCompletedChallengeCreateInput | PartiallyCompletedChallengeCreateInput[]
  }

  export type PartiallyCompletedChallengeCreateInput = {
    id: string
    completedDate: number
  }

  export type PortfolioListCreateEnvelopeInput = {
    set?: PortfolioCreateInput | PortfolioCreateInput[]
  }

  export type PortfolioCreateInput = {
    description: string
    id: string
    image: string
    title: string
    url: string
  }

  export type ProfileUINullableCreateEnvelopeInput = {
    set?: ProfileUICreateInput | null
  }

  export type ProfileUICreateInput = {
    isLocked?: boolean | null
    showAbout?: boolean | null
    showCerts?: boolean | null
    showDonation?: boolean | null
    showHeatMap?: boolean | null
    showLocation?: boolean | null
    showName?: boolean | null
    showPoints?: boolean | null
    showPortfolio?: boolean | null
    showTimeLine?: boolean | null
  }

  export type SavedChallengeListCreateEnvelopeInput = {
    set?: SavedChallengeCreateInput | SavedChallengeCreateInput[]
  }

  export type SavedChallengeCreateInput = {
    files?: SavedChallengeFileCreateInput | SavedChallengeFileCreateInput[]
    id: string
    lastSavedDate: number
  }

  export type userCreateyearsTopContributorInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompletedChallengeListUpdateEnvelopeInput = {
    set?: CompletedChallengeCreateInput | CompletedChallengeCreateInput[]
    push?: CompletedChallengeCreateInput | CompletedChallengeCreateInput[]
    updateMany?: CompletedChallengeUpdateManyInput
    deleteMany?: CompletedChallengeDeleteManyInput
  }

  export type CompletedExamListUpdateEnvelopeInput = {
    set?: CompletedExamCreateInput | CompletedExamCreateInput[]
    push?: CompletedExamCreateInput | CompletedExamCreateInput[]
    updateMany?: CompletedExamUpdateManyInput
    deleteMany?: CompletedExamDeleteManyInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type userUpdatedonationEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type PartiallyCompletedChallengeListUpdateEnvelopeInput = {
    set?: PartiallyCompletedChallengeCreateInput | PartiallyCompletedChallengeCreateInput[]
    push?: PartiallyCompletedChallengeCreateInput | PartiallyCompletedChallengeCreateInput[]
    updateMany?: PartiallyCompletedChallengeUpdateManyInput
    deleteMany?: PartiallyCompletedChallengeDeleteManyInput
  }

  export type PortfolioListUpdateEnvelopeInput = {
    set?: PortfolioCreateInput | PortfolioCreateInput[]
    push?: PortfolioCreateInput | PortfolioCreateInput[]
    updateMany?: PortfolioUpdateManyInput
    deleteMany?: PortfolioDeleteManyInput
  }

  export type ProfileUINullableUpdateEnvelopeInput = {
    set?: ProfileUICreateInput | null
    upsert?: ProfileUIUpsertInput
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type SavedChallengeListUpdateEnvelopeInput = {
    set?: SavedChallengeCreateInput | SavedChallengeCreateInput[]
    push?: SavedChallengeCreateInput | SavedChallengeCreateInput[]
    updateMany?: SavedChallengeUpdateManyInput
    deleteMany?: SavedChallengeDeleteManyInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type userUpdateyearsTopContributorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DonationEndDateNullableCreateEnvelopeInput = {
    set?: DonationEndDateCreateInput | null
  }

  export type DonationEndDateCreateInput = {
    date: Date | string
    when: string
  }

  export type DonationStartDateCreateEnvelopeInput = {
    set?: DonationStartDateCreateInput
  }

  export type DonationStartDateCreateInput = {
    date: Date | string
    when: string
  }

  export type DonationEndDateNullableUpdateEnvelopeInput = {
    set?: DonationEndDateCreateInput | null
    upsert?: DonationEndDateUpsertInput
    unset?: boolean
  }

  export type DonationStartDateUpdateEnvelopeInput = {
    set?: DonationStartDateCreateInput
    update?: DonationStartDateUpdateInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrerequisiteListCreateEnvelopeInput = {
    set?: PrerequisiteCreateInput | PrerequisiteCreateInput[]
  }

  export type PrerequisiteCreateInput = {
    id: string
    title: string
  }

  export type QuestionListCreateEnvelopeInput = {
    set?: QuestionCreateInput | QuestionCreateInput[]
  }

  export type QuestionCreateInput = {
    id: string
    question: string
    wrongAnswers?: AnswerCreateInput | AnswerCreateInput[]
    correctAnswers?: AnswerCreateInput | AnswerCreateInput[]
    deprecated?: boolean | null
  }

  export type PrerequisiteListUpdateEnvelopeInput = {
    set?: PrerequisiteCreateInput | PrerequisiteCreateInput[]
    push?: PrerequisiteCreateInput | PrerequisiteCreateInput[]
    updateMany?: PrerequisiteUpdateManyInput
    deleteMany?: PrerequisiteDeleteManyInput
  }

  export type QuestionListUpdateEnvelopeInput = {
    set?: QuestionCreateInput | QuestionCreateInput[]
    push?: QuestionCreateInput | QuestionCreateInput[]
    updateMany?: QuestionUpdateManyInput
    deleteMany?: QuestionDeleteManyInput
  }

  export type SurveyResponseListCreateEnvelopeInput = {
    set?: SurveyResponseCreateInput | SurveyResponseCreateInput[]
  }

  export type SurveyResponseCreateInput = {
    question: string
    response: string
  }

  export type SurveyResponseListUpdateEnvelopeInput = {
    set?: SurveyResponseCreateInput | SurveyResponseCreateInput[]
    push?: SurveyResponseCreateInput | SurveyResponseCreateInput[]
    updateMany?: SurveyResponseUpdateManyInput
    deleteMany?: SurveyResponseDeleteManyInput
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompletedChallengeWhereInput = {
    AND?: CompletedChallengeWhereInput | CompletedChallengeWhereInput[]
    OR?: CompletedChallengeWhereInput[]
    NOT?: CompletedChallengeWhereInput | CompletedChallengeWhereInput[]
    challengeType?: IntNullableFilter<"CompletedChallenge"> | number | null
    completedDate?: FloatFilter<"CompletedChallenge"> | number
    files?: FileCompositeListFilter | FileObjectEqualityInput[]
    githubLink?: StringNullableFilter<"CompletedChallenge"> | string | null
    id?: StringFilter<"CompletedChallenge"> | string
    isManuallyApproved?: BoolNullableFilter<"CompletedChallenge"> | boolean | null
    solution?: StringNullableFilter<"CompletedChallenge"> | string | null
    examResults?: XOR<ExamResultsNullableCompositeFilter, ExamResultsObjectEqualityInput> | null
  }

  export type FileObjectEqualityInput = {
    contents: string
    ext: string
    key: string
    name: string
    path?: string | null
  }

  export type ExamResultsObjectEqualityInput = {
    numberOfCorrectAnswers: number
    numberOfQuestionsInExam: number
    percentCorrect: number
    passingPercent: number
    passed: boolean
    examTimeInSeconds: number
  }

  export type CompletedExamWhereInput = {
    AND?: CompletedExamWhereInput | CompletedExamWhereInput[]
    OR?: CompletedExamWhereInput[]
    NOT?: CompletedExamWhereInput | CompletedExamWhereInput[]
    id?: StringFilter<"CompletedExam"> | string
    challengeType?: IntFilter<"CompletedExam"> | number
    completedDate?: FloatFilter<"CompletedExam"> | number
    examResults?: XOR<ExamResultsCompositeFilter, ExamResultsObjectEqualityInput>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type PartiallyCompletedChallengeWhereInput = {
    AND?: PartiallyCompletedChallengeWhereInput | PartiallyCompletedChallengeWhereInput[]
    OR?: PartiallyCompletedChallengeWhereInput[]
    NOT?: PartiallyCompletedChallengeWhereInput | PartiallyCompletedChallengeWhereInput[]
    id?: StringFilter<"PartiallyCompletedChallenge"> | string
    completedDate?: FloatFilter<"PartiallyCompletedChallenge"> | number
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    description?: StringFilter<"Portfolio"> | string
    id?: StringFilter<"Portfolio"> | string
    image?: StringFilter<"Portfolio"> | string
    title?: StringFilter<"Portfolio"> | string
    url?: StringFilter<"Portfolio"> | string
  }

  export type ProfileUIWhereInput = {
    AND?: ProfileUIWhereInput | ProfileUIWhereInput[]
    OR?: ProfileUIWhereInput[]
    NOT?: ProfileUIWhereInput | ProfileUIWhereInput[]
    isLocked?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showAbout?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showCerts?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showDonation?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showHeatMap?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showLocation?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showName?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showPoints?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showPortfolio?: BoolNullableFilter<"ProfileUI"> | boolean | null
    showTimeLine?: BoolNullableFilter<"ProfileUI"> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type SavedChallengeWhereInput = {
    AND?: SavedChallengeWhereInput | SavedChallengeWhereInput[]
    OR?: SavedChallengeWhereInput[]
    NOT?: SavedChallengeWhereInput | SavedChallengeWhereInput[]
    files?: SavedChallengeFileCompositeListFilter | SavedChallengeFileObjectEqualityInput[]
    id?: StringFilter<"SavedChallenge"> | string
    lastSavedDate?: FloatFilter<"SavedChallenge"> | number
  }

  export type SavedChallengeFileObjectEqualityInput = {
    contents: string
    ext: string
    history?: string[]
    key: string
    name: string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DonationEndDateWhereInput = {
    AND?: DonationEndDateWhereInput | DonationEndDateWhereInput[]
    OR?: DonationEndDateWhereInput[]
    NOT?: DonationEndDateWhereInput | DonationEndDateWhereInput[]
    date?: DateTimeFilter<"DonationEndDate"> | Date | string
    when?: StringFilter<"DonationEndDate"> | string
  }

  export type DonationStartDateWhereInput = {
    AND?: DonationStartDateWhereInput | DonationStartDateWhereInput[]
    OR?: DonationStartDateWhereInput[]
    NOT?: DonationStartDateWhereInput | DonationStartDateWhereInput[]
    date?: DateTimeFilter<"DonationStartDate"> | Date | string
    when?: StringFilter<"DonationStartDate"> | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: StringFilter<"Prerequisite"> | string
    title?: StringFilter<"Prerequisite"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    wrongAnswers?: AnswerCompositeListFilter | AnswerObjectEqualityInput[]
    correctAnswers?: AnswerCompositeListFilter | AnswerObjectEqualityInput[]
    deprecated?: BoolNullableFilter<"Question"> | boolean | null
  }

  export type AnswerObjectEqualityInput = {
    id: string
    answer: string
    deprecated?: boolean | null
  }

  export type SurveyResponseWhereInput = {
    AND?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    OR?: SurveyResponseWhereInput[]
    NOT?: SurveyResponseWhereInput | SurveyResponseWhereInput[]
    question?: StringFilter<"SurveyResponse"> | string
    response?: StringFilter<"SurveyResponse"> | string
  }

  export type FileCreateInput = {
    contents: string
    ext: string
    key: string
    name: string
    path?: string | null
  }

  export type ExamResultsCreateInput = {
    numberOfCorrectAnswers: number
    numberOfQuestionsInExam: number
    percentCorrect: number
    passingPercent: number
    passed: boolean
    examTimeInSeconds: number
  }

  export type SavedChallengeFileCreateInput = {
    contents: string
    ext: string
    history?: SavedChallengeFileCreatehistoryInput | string[]
    key: string
    name: string
  }

  export type CompletedChallengeUpdateManyInput = {
    where: CompletedChallengeWhereInput
    data: CompletedChallengeUpdateInput
  }

  export type CompletedChallengeDeleteManyInput = {
    where: CompletedChallengeWhereInput
  }

  export type CompletedExamUpdateManyInput = {
    where: CompletedExamWhereInput
    data: CompletedExamUpdateInput
  }

  export type CompletedExamDeleteManyInput = {
    where: CompletedExamWhereInput
  }

  export type PartiallyCompletedChallengeUpdateManyInput = {
    where: PartiallyCompletedChallengeWhereInput
    data: PartiallyCompletedChallengeUpdateInput
  }

  export type PartiallyCompletedChallengeDeleteManyInput = {
    where: PartiallyCompletedChallengeWhereInput
  }

  export type PortfolioUpdateManyInput = {
    where: PortfolioWhereInput
    data: PortfolioUpdateInput
  }

  export type PortfolioDeleteManyInput = {
    where: PortfolioWhereInput
  }

  export type ProfileUIUpsertInput = {
    set: ProfileUICreateInput | null
    update: ProfileUIUpdateInput
  }

  export type SavedChallengeUpdateManyInput = {
    where: SavedChallengeWhereInput
    data: SavedChallengeUpdateInput
  }

  export type SavedChallengeDeleteManyInput = {
    where: SavedChallengeWhereInput
  }

  export type DonationEndDateUpsertInput = {
    set: DonationEndDateCreateInput | null
    update: DonationEndDateUpdateInput
  }

  export type DonationStartDateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    when?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id: string
    answer: string
    deprecated?: boolean | null
  }

  export type PrerequisiteUpdateManyInput = {
    where: PrerequisiteWhereInput
    data: PrerequisiteUpdateInput
  }

  export type PrerequisiteDeleteManyInput = {
    where: PrerequisiteWhereInput
  }

  export type QuestionUpdateManyInput = {
    where: QuestionWhereInput
    data: QuestionUpdateInput
  }

  export type QuestionDeleteManyInput = {
    where: QuestionWhereInput
  }

  export type SurveyResponseUpdateManyInput = {
    where: SurveyResponseWhereInput
    data: SurveyResponseUpdateInput
  }

  export type SurveyResponseDeleteManyInput = {
    where: SurveyResponseWhereInput
  }

  export type FileCompositeListFilter = {
    equals?: FileObjectEqualityInput[]
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ExamResultsNullableCompositeFilter = {
    equals?: ExamResultsObjectEqualityInput | null
    is?: ExamResultsWhereInput | null
    isNot?: ExamResultsWhereInput | null
    isSet?: boolean
  }

  export type ExamResultsCompositeFilter = {
    equals?: ExamResultsObjectEqualityInput
    is?: ExamResultsWhereInput
    isNot?: ExamResultsWhereInput
  }

  export type SavedChallengeFileCompositeListFilter = {
    equals?: SavedChallengeFileObjectEqualityInput[]
    every?: SavedChallengeFileWhereInput
    some?: SavedChallengeFileWhereInput
    none?: SavedChallengeFileWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AnswerCompositeListFilter = {
    equals?: AnswerObjectEqualityInput[]
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type SavedChallengeFileCreatehistoryInput = {
    set: string[]
  }

  export type CompletedChallengeUpdateInput = {
    challengeType?: NullableIntFieldUpdateOperationsInput | number | null
    completedDate?: FloatFieldUpdateOperationsInput | number
    files?: XOR<FileListUpdateEnvelopeInput, FileCreateInput> | FileCreateInput[]
    githubLink?: NullableStringFieldUpdateOperationsInput | string | null
    id?: StringFieldUpdateOperationsInput | string
    isManuallyApproved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    examResults?: XOR<ExamResultsNullableUpdateEnvelopeInput, ExamResultsCreateInput> | null
  }

  export type CompletedExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeType?: IntFieldUpdateOperationsInput | number
    completedDate?: FloatFieldUpdateOperationsInput | number
    examResults?: XOR<ExamResultsUpdateEnvelopeInput, ExamResultsCreateInput>
  }

  export type PartiallyCompletedChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedDate?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUIUpdateInput = {
    isLocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showAbout?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showCerts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showDonation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showHeatMap?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showLocation?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showName?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showPoints?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showPortfolio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    showTimeLine?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SavedChallengeUpdateInput = {
    files?: XOR<SavedChallengeFileListUpdateEnvelopeInput, SavedChallengeFileCreateInput> | SavedChallengeFileCreateInput[]
    id?: StringFieldUpdateOperationsInput | string
    lastSavedDate?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationEndDateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    when?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    wrongAnswers?: XOR<AnswerListUpdateEnvelopeInput, AnswerCreateInput> | AnswerCreateInput[]
    correctAnswers?: XOR<AnswerListUpdateEnvelopeInput, AnswerCreateInput> | AnswerCreateInput[]
    deprecated?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SurveyResponseUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    contents?: StringFilter<"File"> | string
    ext?: StringFilter<"File"> | string
    key?: StringFilter<"File"> | string
    name?: StringFilter<"File"> | string
    path?: StringNullableFilter<"File"> | string | null
  }

  export type ExamResultsWhereInput = {
    AND?: ExamResultsWhereInput | ExamResultsWhereInput[]
    OR?: ExamResultsWhereInput[]
    NOT?: ExamResultsWhereInput | ExamResultsWhereInput[]
    numberOfCorrectAnswers?: IntFilter<"ExamResults"> | number
    numberOfQuestionsInExam?: IntFilter<"ExamResults"> | number
    percentCorrect?: FloatFilter<"ExamResults"> | number
    passingPercent?: IntFilter<"ExamResults"> | number
    passed?: BoolFilter<"ExamResults"> | boolean
    examTimeInSeconds?: IntFilter<"ExamResults"> | number
  }

  export type SavedChallengeFileWhereInput = {
    AND?: SavedChallengeFileWhereInput | SavedChallengeFileWhereInput[]
    OR?: SavedChallengeFileWhereInput[]
    NOT?: SavedChallengeFileWhereInput | SavedChallengeFileWhereInput[]
    contents?: StringFilter<"SavedChallengeFile"> | string
    ext?: StringFilter<"SavedChallengeFile"> | string
    history?: StringNullableListFilter<"SavedChallengeFile">
    key?: StringFilter<"SavedChallengeFile"> | string
    name?: StringFilter<"SavedChallengeFile"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    answer?: StringFilter<"Answer"> | string
    deprecated?: BoolNullableFilter<"Answer"> | boolean | null
  }

  export type FileListUpdateEnvelopeInput = {
    set?: FileCreateInput | FileCreateInput[]
    push?: FileCreateInput | FileCreateInput[]
    updateMany?: FileUpdateManyInput
    deleteMany?: FileDeleteManyInput
  }

  export type ExamResultsNullableUpdateEnvelopeInput = {
    set?: ExamResultsCreateInput | null
    upsert?: ExamResultsUpsertInput
    unset?: boolean
  }

  export type ExamResultsUpdateEnvelopeInput = {
    set?: ExamResultsCreateInput
    update?: ExamResultsUpdateInput
  }

  export type SavedChallengeFileListUpdateEnvelopeInput = {
    set?: SavedChallengeFileCreateInput | SavedChallengeFileCreateInput[]
    push?: SavedChallengeFileCreateInput | SavedChallengeFileCreateInput[]
    updateMany?: SavedChallengeFileUpdateManyInput
    deleteMany?: SavedChallengeFileDeleteManyInput
  }

  export type AnswerListUpdateEnvelopeInput = {
    set?: AnswerCreateInput | AnswerCreateInput[]
    push?: AnswerCreateInput | AnswerCreateInput[]
    updateMany?: AnswerUpdateManyInput
    deleteMany?: AnswerDeleteManyInput
  }

  export type FileUpdateManyInput = {
    where: FileWhereInput
    data: FileUpdateInput
  }

  export type FileDeleteManyInput = {
    where: FileWhereInput
  }

  export type ExamResultsUpsertInput = {
    set: ExamResultsCreateInput | null
    update: ExamResultsUpdateInput
  }

  export type ExamResultsUpdateInput = {
    numberOfCorrectAnswers?: IntFieldUpdateOperationsInput | number
    numberOfQuestionsInExam?: IntFieldUpdateOperationsInput | number
    percentCorrect?: FloatFieldUpdateOperationsInput | number
    passingPercent?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    examTimeInSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type SavedChallengeFileUpdateManyInput = {
    where: SavedChallengeFileWhereInput
    data: SavedChallengeFileUpdateInput
  }

  export type SavedChallengeFileDeleteManyInput = {
    where: SavedChallengeFileWhereInput
  }

  export type AnswerUpdateManyInput = {
    where: AnswerWhereInput
    data: AnswerUpdateInput
  }

  export type AnswerDeleteManyInput = {
    where: AnswerWhereInput
  }

  export type FileUpdateInput = {
    contents?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedChallengeFileUpdateInput = {
    contents?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    history?: SavedChallengeFileUpdatehistoryInput | string[]
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    deprecated?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SavedChallengeFileUpdatehistoryInput = {
    set?: string[]
    push?: string | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompletedChallengeDefaultArgs instead
     */
    export type CompletedChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompletedChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartiallyCompletedChallengeDefaultArgs instead
     */
    export type PartiallyCompletedChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartiallyCompletedChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioDefaultArgs instead
     */
    export type PortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileUIDefaultArgs instead
     */
    export type ProfileUIArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileUIDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedChallengeFileDefaultArgs instead
     */
    export type SavedChallengeFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedChallengeFileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedChallengeDefaultArgs instead
     */
    export type SavedChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedChallengeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompletedExamDefaultArgs instead
     */
    export type CompletedExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompletedExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamResultsDefaultArgs instead
     */
    export type ExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamResultsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnswerDefaultArgs instead
     */
    export type AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrerequisiteDefaultArgs instead
     */
    export type PrerequisiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PrerequisiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DonationEndDateDefaultArgs instead
     */
    export type DonationEndDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DonationEndDateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DonationStartDateDefaultArgs instead
     */
    export type DonationStartDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DonationStartDateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyResponseDefaultArgs instead
     */
    export type SurveyResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessTokenDefaultArgs instead
     */
    export type AccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthTokenDefaultArgs instead
     */
    export type AuthTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DonationDefaultArgs instead
     */
    export type DonationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DonationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRateLimitDefaultArgs instead
     */
    export type UserRateLimitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRateLimitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserTokenDefaultArgs instead
     */
    export type UserTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sessionsDefaultArgs instead
     */
    export type sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sessionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MsUsernameDefaultArgs instead
     */
    export type MsUsernameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MsUsernameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamDefaultArgs instead
     */
    export type ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SurveyDefaultArgs instead
     */
    export type SurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SurveyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}