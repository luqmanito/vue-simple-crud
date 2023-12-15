export interface LoginModel {
  token: string;
  user: UserModel;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: string;
  updated_at: string;
  business_id: number;
  business: Business;
}

export interface Business {
  id: number;
  parent_id: any;
  name: string;
  email: string;
  address: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}
