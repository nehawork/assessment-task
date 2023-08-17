import API_CONSTANTS from "@/constants/api-constants";
import IApiClient, { RequestConfig } from "@/models/api-client";
import axios, { AxiosInstance } from "axios";

const handleServiceError = (error: any) => {
  return Promise.reject(error);
};

class ApiClient implements IApiClient {
  private client: AxiosInstance;

  protected createApiClient(): AxiosInstance {
    return axios.create({
      baseURL: API_CONSTANTS.BASE_URL,
      responseType: "json" as const,
      headers: API_CONSTANTS.DEFAULT_API_HEADERS,
      timeout: API_CONSTANTS.TIMEOUT
    });
  }

  constructor() {
    this.client = this.createApiClient();
  }

  async get<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(path);
      return response.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: RequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.post<TResponse>(path, payload, config)
        : await this.client.post<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(
    path: string,
    payload: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(path, payload);
      return response.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }

  async delete<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.delete<TResponse>(path);
      return response.data;
    } catch (error) {
      handleServiceError(error);
    }
    return {} as TResponse;
  }
}

export default ApiClient;
