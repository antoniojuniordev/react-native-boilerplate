import { handleResponse } from './handlers/handleResponse';
import { handlerParams } from './handlers/handlerParams'
// import handleAuthHeader from './handlers/handleAuthHeader'

type UseFetchProps = {
  method: 'get' | 'post';
  url: string;
  body?: object;
  params?: object
}

export default function useFetch({ method, url, params, body }: UseFetchProps) {
  // eslint-disable-next-line no-undef
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // ...handleAuthHeader()
    },
  };
  if (body) requestOptions.body = JSON.stringify(body);

  return fetch(handlerParams(`${url}`, params), requestOptions).then(
    handleResponse,
  );
}
