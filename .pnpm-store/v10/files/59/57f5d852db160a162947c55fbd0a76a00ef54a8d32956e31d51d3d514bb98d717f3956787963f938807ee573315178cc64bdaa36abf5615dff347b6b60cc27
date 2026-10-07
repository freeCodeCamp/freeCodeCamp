var id = 0;
function addWidgetId(widget) {
    if (widget.dependsOn !== 'recommend') {
        return;
    }
    widget.$$id = id++;
}
function resetWidgetId() {
    id = 0;
}

export { addWidgetId, resetWidgetId };
