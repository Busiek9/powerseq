import { Enumerable } from "../enumerable";
import wrap from "../common/wrap";

export function take<T>(source: Iterable<T>, count: number) {
    return wrap(function* () {
        if (count > 0) {
            for (var item of source) {
                yield item;
                if (--count === 0) break;
            }
        }
    });
}
declare module '../enumerable' {
    interface Enumerable<T> {
        take(count: number): Enumerable<T>;
    }
}
Enumerable.prototype.take = function <T>(this: Enumerable<T>, count: number) {
    return new Enumerable<T>(take<T>(this, count));
};