// TODO: Add lint rule for undescored vars to avoid this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleClientRefresh<T>(_response: Response): Promise<T> {
  location.reload();
  return Promise.reject('Client version out of date');
}
