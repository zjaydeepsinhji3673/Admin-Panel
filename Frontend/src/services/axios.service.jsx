import axios from "axios";
import { DELETE, GET, PATCH, POST, PUT, API_KEY, OPTION, BASE_URL, OTHER_PATH } from "../app.config";
import Cookies from "js-cookie";
// import { logoutRedirection, TOAST_ERROR } from "./common.service";
// import { Decryption, Encryption } from "./enc.dec";

const request = async (url, method, token, payload, params = {}) => {
  try {
    const allowedMethodTypes = [GET, POST, PUT, PATCH, DELETE, OPTION];

    if (allowedMethodTypes.indexOf(method.toLowerCase()) < 0) {
      throw new Error(`Invalid method type please provide one of these methods... \n ${allowedMethodTypes}`);
    }
    const headers = {
      "api-key": Encryption(API_KEY, true),
      'Accept-language': 'en',
      // 'Content-Type': 'application/json',
      'Content-Type': 'text/plain',
      'app': 'W',
      ...(token && { token: Cookies.get('tokenCW') }),
    };

    const result = await axios({ method, url, baseURL: BASE_URL, params, data: Encryption(payload, true), headers });
    let decodeData = await Decryption(result?.data);
    if (decodeData?.code === '0') {
      TOAST_ERROR(decodeData?.message)
    }
    return decodeData;
  } catch (error) {
    let decodeData = await Decryption(error?.response?.data);
    if (decodeData?.code == -1) {
      logoutRedirection();
      let path = window.location.protocol + "//" + window.location.host + "/"
      window.location.href = path;
    } else {
      throw new Error(error);
    }
  }
};

export default request;