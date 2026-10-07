export const deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
        if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
            activeInputConnections.delete(activeInputConnection);
            return activeInputConnection;
        }
    }
    return null;
};
//# sourceMappingURL=delete-active-input-connection.js.map