import request from "@/utils/request.js";

/**
 * 获取文章
 * @param params
 * @returns {AxiosPromise}
 */
export function history(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: "/v3/history",
    method: "get",
    params: params
  });
}

export function getHistoryById(id) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: `/v3/history/${id}`,
    method: "get"
  });
}
