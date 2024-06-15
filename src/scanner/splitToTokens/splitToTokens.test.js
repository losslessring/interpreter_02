import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"
import { splitToTokens } from "./splitToTokens"

export const splitToTokens_test = () => {
    describe("split string to array of tokens", () => {
        it("split string to array of tokens", () => {
            const result = splitToTokens({
                string: " abc  abc   aaaa bb",
                delimiter: " ",
            })

            const expected = ["abc", "abc", "aaaa", "bb"]

            expect(result).toBe(expected)
        })

        it("split string to array of tokens with parenthesis", () => {
            const result = splitToTokens({
                string: "(abc  abc   aaaa bb)",
                delimiter: "(",
            })

            const expected = ["(", "abc", "abc", "aaaa", "bb", ")"]

            expect(result).toBe(expected)
        })
    })
}
