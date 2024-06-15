import { describe } from "../../../../testingLibrary/testingLibrary.js"
import { it } from "../../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../../testingLibrary/testingLibrary.js"
import { keepOnlyOneCharInRow } from "./keepOnlyOneCharInRow.js"

export const keepOnlyOneCharInRow_test = () => {
    describe("keep one char from multiple chars in a row", () => {
        it("keep one ' ' char from multiple chars in a row", () => {
            const result = keepOnlyOneCharInRow({
                string: " abc  abc   aaaa bb ",
                keepOneChar: " ",
            })

            const expected = " abc abc aaaa bb "

            expect(result).toBe(expected)
        })
    })
}
