export const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
export const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};
