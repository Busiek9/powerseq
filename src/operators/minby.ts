import { Enumerable } from "../enumerable";
import { keySelector } from "../common/types";
import { maxmin } from "../common/maxmin";

export function minby<T>(source: Iterable<T>, valueSelector: keySelector<T, any>): T | undefined {
    return maxmin(source, valueSelector, (key: any, minmaxKey: any) => key < minmaxKey, false);
}
declare module '../enumerable' {
    interface Enumerable<T> {
        minby(valueSelector?: keySelector<T, any>): T | undefined;
    }
}
Enumerable.prototype.minby = function <T>(this: Enumerable<T>, valueSelector: keySelector<T, any>): T | undefined {
    return minby(this, valueSelector);
};