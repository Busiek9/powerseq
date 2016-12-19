import * as assert from "assert";
import { Enumerable, average } from "../../src/index";

it('average', function () {
    assert.deepEqual(average([1, 2, 3, 4]), 2.5);
    assert.deepEqual(Enumerable.from([1, 2, 3, 4]).average(), 2.5);
    assert.deepEqual(Enumerable.from([]).average(), undefined);
    assert.deepEqual(Enumerable.from(["a", "aa", "aaa"]).average(s => s.length), 2);
});

export const linq = "Average";