import * as assert from "assert";
import { Enumerable, defaultifempty } from "../../src/index";

it('defaultifempty', function () {
    assert.deepEqual(Array.from(defaultifempty([1, 2, 3])), [1, 2, 3]);
    assert.deepEqual(Enumerable.from([1, 2, 3]).defaultifempty().toarray(), [1, 2, 3]);
    assert.deepEqual(Enumerable.from([]).defaultifempty().toarray(), [undefined]);
    assert.deepEqual(Enumerable.from([]).defaultifempty(4).toarray(), [4]);
});

export const linq = "DefaultIfEmpty";