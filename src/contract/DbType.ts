/**
 * The Page type is used to represent pagination in database
 * using the `limit` and `offset` parameters. The page number
 * starts from 0.
 */
export type Page = {
  number: number;
  size: number;
};

export type ApiKey = {
  id: string;
  description: string;
  token: string;
  hashFn: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};


export type Tenant = {
  id: string;
  name: string;
  description: string;
  key: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Invitation = {
  id: string;
  code: string;

  firstName: string;
  lastName: string;
  email: string;

  duration: number;
  expiryAt: Date;

  tenantId: string;

  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
};

export type UserToken = {
  id: string;
  generatedAt: Date;
  duration: number;
  userId: string;
};

export type ResetPasswordRequest = {
  id: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

// After the model is finalized, replace inferred types with real types.


// TODO: Name it better.
export type UserLocalLogin = {
  userId: string;

  /**
   * Either username or email depending on the query.
   */
  loginId: string;
  password: string;
  hashFn: string;
};
