let counter = 0;

export function generateRandomId() {
  const now = Date.now();
  const randomNumber = Math.round(Math.random() * 10000);
  const count = (counter += 1);
  return (+`${now}${randomNumber}${count}`).toString(16);
}
