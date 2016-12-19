import * as assert from "assert";
import { Enumerable, single } from "../../src/index";

it('single', function () {
    assert.deepEqual(single([1, 3, 4, 6, 1], x => x > 5), 6);
    assert.deepEqual(Enumerable.from([]).single(), undefined);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4]).find(x => x < 0), undefined);
    assert.throws(() => {
        single([1, 3, 2, 0], x => x > 1);
    }, "More than one element satisfies the condition in predicate.");
    assert.throws(() => {
        single([1, 3]);
    }, "More than one element satisfies the condition in predicate.");
});

export const linq = "Single";