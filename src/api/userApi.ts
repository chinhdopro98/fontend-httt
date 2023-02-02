import instance from "./axios";
import { URL } from "../constains/url";
import { IRegister, IUser } from "../interfaces/interface";
export const loginApi = async ({ username, password }: IUser) => {
  try {
    const response = await instance.post(URL.LOGIN, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const registerApi = async ({
  username,
  firstname,
  lastname,
  password,
  email,
  isactive,
  avartar,
  positionId,
}: IRegister) => {
  try {
    const response = await instance.post(URL.REGISTER, {
      username,
      firstname,
      lastname,
      password,
      email,
      isactive,
      avartar,
      positionId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserAll = async () => {
  try {
    const response = await instance.get(URL.ALL_USER);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
