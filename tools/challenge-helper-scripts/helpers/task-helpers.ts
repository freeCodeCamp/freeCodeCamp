function isTaskChallenge(title: string): boolean {
  return /^\s*task\s\d+$/gi.test(title);
}

function getTaskNumberFromTitle(title: string): number {
  return parseInt(title.replace(/\D/g, ''), 10);
}

export { getTaskNumberFromTitle, isTaskChallenge };
