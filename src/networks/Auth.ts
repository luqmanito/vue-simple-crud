import HttpCommon from "@/helpers/HttpCommon";
import { KEY_TOKEN } from "@/const/CommonConst";
import { LoginModel, UserModel } from "@/models/LoginModel";

export const LoginNetwork = (
  email: string,
  password: string
): Promise<LoginModel | undefined> => {
  return new Promise((resolve, reject) => {
    HttpCommon.post<LoginModel>(`/auth/login`, {
      email: email,
      password: password,
    })
      .then(({ data }) => {
        resolve(data);
        localStorage.setItem(KEY_TOKEN, data.token);
      })
      .catch((e) => {
        const err: undefined = e.response?.data;
        reject(err);
      });
  });
};
export const RegisterNetwork = (
  email: string,
  password: string,
  password_confirmation: string,
  name: string,
  business_name: string
): Promise<LoginModel | undefined> => {
  return new Promise((resolve, reject) => {
    HttpCommon.post<LoginModel>(`/auth/register`, {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      name: name,
      business_name: business_name,
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        console.log(e);
        
        const err: undefined = e.response?.data;
        reject(err);
      });
  });
};

export const DetailLoginUser = (): Promise<UserModel> => {
  return new Promise((resolve, reject) => {
    HttpCommon.get<UserModel>(`/me`, {
      params: {
        load: "business.photo,business.paymentMethods",
      },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        const err: undefined = e.response?.data;
        reject(err);
      });
  });
};

export default {
  LoginNetwork,
  DetailLoginUser,
};
