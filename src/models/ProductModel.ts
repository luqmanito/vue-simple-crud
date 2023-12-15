export interface ProductModel {
  id: number;
  business_id: number;
  name: string;
  code: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  business?: Business
}


export interface Business {
  id: number
  parent_id: any
  name: string
  email: string
  address: any
  created_at: string
  updated_at: string
  deleted_at: any
}
