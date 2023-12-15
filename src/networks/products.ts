import { PaginationModel } from "@/models/PaginationModel";
import HttpCommon from "@/helpers/HttpCommon";
import { ErrorModel } from "@/models/ErrorModel";
import { ProductModel } from "@/models/ProductModel";

export const List = (data: any): Promise<PaginationModel> => {
  return new Promise((resolve, reject) => {
    HttpCommon.get<PaginationModel>(`/products`, {
      params: data,
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        const err: ErrorModel | undefined = e.response?.data;
        reject(err);
      });
  });
};
export const Detail = (
  id: number | string | string[]
): Promise<ProductModel> => {
  return new Promise((resolve, reject) => {
    HttpCommon.get<ProductModel>(`/products/${id}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        const err: ErrorModel | undefined = e.response?.data;
        reject(err);
      });
  });
};

export const Create = (data: any): Promise<ProductModel> => {
  return new Promise((resolve, reject) => {
    HttpCommon.post<ProductModel>(`/products`, {
      name: data?.name,
      code: data?.code,
      description: data?.description,
      price: data?.price,
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        const err: ErrorModel | undefined = e.response?.data;
        reject(err);
      });
  });
};
export const Update = (
  data: any,
  id: number | string | string[]
): Promise<ProductModel> => {
  return new Promise((resolve, reject) => {
    HttpCommon.post<ProductModel>(`/products/${id}`, {
      name: data?.name,
      code: data?.code,
      description: data?.description,
      price: data?.price,
      _method: "PUT",
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        const err: ErrorModel | undefined = e.response?.data;
        reject(err);
      });
  });
};

export const Delete = (id: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    HttpCommon.delete(`/products/${id}`)
      .then(() => {
        resolve(200);
      })
      .catch((e) => {
        const err: ErrorModel | undefined = e.response?.data;
        reject(err);
      });
  });
};
