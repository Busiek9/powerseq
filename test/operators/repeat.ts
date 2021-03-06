import * as assert from "assert";
import { Enumerable, repeat, take, toarray } from "../../src/index";

it('repeat', function () {
    assert.deepEqual(Array.from(repeat([1, 2, 3], 2)), [1, 2, 3, 1, 2, 3]);
    assert.deepEqual(Enumerable.from([1, 2, 3]).repeat().take(10).toarray(), [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
    assert.deepEqual(Enumerable.from([1, 2, 3]).repeat(0).toarray(), []);
});

export const samples = [
    () => repeat([1, 2, 3], 2),
    () => take(repeat([1, 2, 3]), 5)
];