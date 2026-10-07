function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
}

export { resolveSearchParameters };
