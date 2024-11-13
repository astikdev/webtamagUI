export interface ApiActionResponse {
  status: boolean;
  message: string;
}

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export enum HttpStatusCode {
  Unauthorized = 401,
  Success = 200,
}

export interface PaginatedData<T> {
  current_page: number;
  data: T;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export type PaginatedApiResponse<T> = ApiResponse<PaginatedData<T>>;
