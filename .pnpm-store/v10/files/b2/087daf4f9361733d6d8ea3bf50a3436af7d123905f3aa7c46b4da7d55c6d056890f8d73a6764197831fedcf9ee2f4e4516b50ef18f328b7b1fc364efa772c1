const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
export const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));
