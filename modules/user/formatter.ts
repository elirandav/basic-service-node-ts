const MAX = 10;

export function formatter(first, last) {
    let firstCut = first.substring(0, MAX);
    return {
        first: firstCut,
        last: last.substring(0, MAX - firstCut.length)
    }
}