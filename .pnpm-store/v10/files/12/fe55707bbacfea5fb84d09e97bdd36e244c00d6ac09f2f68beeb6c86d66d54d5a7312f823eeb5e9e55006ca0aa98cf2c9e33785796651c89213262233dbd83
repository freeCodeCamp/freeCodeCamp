export const defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        ["os/other"],
        ["lang/js"],
        ["md/rn"],
    ];
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    return sections;
};
