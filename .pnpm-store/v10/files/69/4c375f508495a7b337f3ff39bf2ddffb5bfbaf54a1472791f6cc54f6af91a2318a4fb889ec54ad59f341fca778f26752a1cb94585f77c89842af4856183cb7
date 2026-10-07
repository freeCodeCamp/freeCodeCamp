function produce(producer) {
    return producer();
}
export function pathWalk(path, initialProducers, shrink) {
    const producers = initialProducers;
    const segments = path.split(':').map((text) => +text);
    if (segments.length === 0) {
        return producers.map(produce);
    }
    if (!segments.every((v) => !Number.isNaN(v))) {
        throw new Error(`Unable to replay, got invalid path=${path}`);
    }
    let values = producers.drop(segments[0]).map(produce);
    for (const s of segments.slice(1)) {
        const valueToShrink = values.getNthOrLast(0);
        if (valueToShrink === null) {
            throw new Error(`Unable to replay, got wrong path=${path}`);
        }
        values = shrink(valueToShrink).drop(s);
    }
    return values;
}
