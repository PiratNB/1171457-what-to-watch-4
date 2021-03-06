import axios from "axios";

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const BASE_SERVER_URL = `https://4.react.pages.academy`;

export const ServerURL = {
  LOGIN: `/login`,
  MOVIES: `/films`,
  PROMO_MOVIE: `/films/promo`,
  COMMENTS: `/comments/`,
  FAVORITE: `/favorite/`,
};

export const createAPI = (onUnauthorized, onAuthError) => {
  const api = axios.create({
    baseURL: `${BASE_SERVER_URL}/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case Error.BAD_REQUEST:
        onAuthError();
        break;
      case Error.UNAUTHORIZED:
        onUnauthorized();
        throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
