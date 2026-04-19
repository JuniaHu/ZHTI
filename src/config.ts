/**
 * Netlify 生产站点：所有后端 / API 请求统一使用此基址。
 * @see https://magenta-froyo-a4fdb4.netlify.app/
 */
export const API_BASE_URL = "https://magenta-froyo-a4fdb4.netlify.app";

/** 将 path 拼成完整 API URL（path 可带或不带前导 `/`） */
export function apiUrl(path: string): string {
  const base = API_BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
