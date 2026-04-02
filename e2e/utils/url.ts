const escapeRegExp = (value: string) =>
	value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const allowTrailingSlash = (url: string) =>
	// nosemgrep
	RegExp(`${escapeRegExp(url)}[/]?$`);
