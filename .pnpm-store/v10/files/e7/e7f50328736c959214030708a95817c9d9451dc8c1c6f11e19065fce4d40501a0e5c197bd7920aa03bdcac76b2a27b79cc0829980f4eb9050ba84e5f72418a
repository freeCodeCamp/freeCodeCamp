import bowser from "bowser";
export const defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser.parse(window.navigator.userAgent)
        : undefined;
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
        ["lang/js"],
        ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
    ];
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    return sections;
};
