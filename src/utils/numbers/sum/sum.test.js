import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"
import { sum } from "./sum.js"

export const sum_test = () => {
    describe("sum", () => {
        it("sum 1+2", () => {
            const expected = sum(1, 2)

            const result = 3

            expect(result).toBe(expected)
        })
    })
}
