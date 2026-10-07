export function toResponseInit(response: Response): ResponseInit {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
  }
}
