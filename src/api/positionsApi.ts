import instance from "./axios";
import { URL } from "../constains/url";
export const getPositionAll = async () => {
  try {
    const response = await instance.get(URL.ALL_POSITION);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
