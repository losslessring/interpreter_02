import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"
import { splitBy } from "./splitBy"

export const splitBy_test = () => {
    describe("split substrings by delimiter", () => {
        it("split to substrings by open parenthesis", () => {
            const result = splitBy({
                strings: ["(abc abc  aaaa bb)"],
                delimiter: /(\()/g,
            })

            const expected = ["(", "abc abc  aaaa bb)"]

            expect(result).toBe(expected)
        })

        it("split to substrings by close parenthesis", () => {
            const result = splitBy({
                strings: ["(abc abc  aaaa bb)"],
                delimiter: /(\))/g,
            })

            const expected = ["(abc abc  aaaa bb", ")"]

            expect(result).toBe(expected)
        })

        it("split to substrings by spaces", () => {
            const result = splitBy({
                strings: ["(abc abc  aaaa bb)"],
                delimiter: /\s/g,
            })

            const expected = ["(abc", "abc", "aaaa", "bb)"]

            expect(result).toBe(expected)
        })
    })
}
