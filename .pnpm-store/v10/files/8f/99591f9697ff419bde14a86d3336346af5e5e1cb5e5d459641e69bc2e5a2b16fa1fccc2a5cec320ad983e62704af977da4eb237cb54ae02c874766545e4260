export class ReplayPath {
    static parse(replayPathStr) {
        const [serializedCount, serializedChanges] = replayPathStr.split(':');
        const counts = this.parseCounts(serializedCount);
        const changes = this.parseChanges(serializedChanges);
        return this.parseOccurences(counts, changes);
    }
    static stringify(replayPath) {
        const occurences = this.countOccurences(replayPath);
        const serializedCount = this.stringifyCounts(occurences);
        const serializedChanges = this.stringifyChanges(occurences);
        return `${serializedCount}:${serializedChanges}`;
    }
    static intToB64(n) {
        if (n < 26)
            return String.fromCharCode(n + 65);
        if (n < 52)
            return String.fromCharCode(n + 97 - 26);
        if (n < 62)
            return String.fromCharCode(n + 48 - 52);
        return String.fromCharCode(n === 62 ? 43 : 47);
    }
    static b64ToInt(c) {
        if (c >= 'a')
            return c.charCodeAt(0) - 97 + 26;
        if (c >= 'A')
            return c.charCodeAt(0) - 65;
        if (c >= '0')
            return c.charCodeAt(0) - 48 + 52;
        return c === '+' ? 62 : 63;
    }
    static countOccurences(replayPath) {
        return replayPath.reduce((counts, cur) => {
            if (counts.length === 0 || counts[counts.length - 1].count === 64 || counts[counts.length - 1].value !== cur)
                counts.push({ value: cur, count: 1 });
            else
                counts[counts.length - 1].count += 1;
            return counts;
        }, []);
    }
    static parseOccurences(counts, changes) {
        const replayPath = [];
        for (let idx = 0; idx !== counts.length; ++idx) {
            const count = counts[idx];
            const value = changes[idx];
            for (let num = 0; num !== count; ++num)
                replayPath.push(value);
        }
        return replayPath;
    }
    static stringifyChanges(occurences) {
        let serializedChanges = '';
        for (let idx = 0; idx < occurences.length; idx += 6) {
            const changesInt = occurences
                .slice(idx, idx + 6)
                .reduceRight((prev, cur) => prev * 2 + (cur.value ? 1 : 0), 0);
            serializedChanges += this.intToB64(changesInt);
        }
        return serializedChanges;
    }
    static parseChanges(serializedChanges) {
        const changesInt = serializedChanges.split('').map((c) => this.b64ToInt(c));
        const changes = [];
        for (let idx = 0; idx !== changesInt.length; ++idx) {
            let current = changesInt[idx];
            for (let n = 0; n !== 6; ++n, current >>= 1) {
                changes.push(current % 2 === 1);
            }
        }
        return changes;
    }
    static stringifyCounts(occurences) {
        return occurences.map(({ count }) => this.intToB64(count - 1)).join('');
    }
    static parseCounts(serializedCount) {
        return serializedCount.split('').map((c) => this.b64ToInt(c) + 1);
    }
}
