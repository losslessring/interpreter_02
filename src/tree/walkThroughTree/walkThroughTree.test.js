import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"
import { walkThroughTree } from "./walkThroughTree"

export const walkThroughTree_test = () => {
    describe("walk through tree", () => {
        it("number type", () => {
            const data = {
                type: "expression",
                value: [{ type: "number", value: "100" }],
            }
            const result = walkThroughTree({
                tree: data,
            })
            const expected = ["(", "100", ")"]
            expect(result).toBe(expected)
        })

        // it("walk through tree", () => {
        //     const data = {
        //         type: "expression",
        //         value: [
        //             { type: "string", value: "add" },
        //             { type: "number", value: "100" },
        //             {
        //                 type: "expression",
        //                 value: [
        //                     { type: "string", value: "add" },
        //                     { type: "number", value: "300" },
        //                     { type: "number", value: "200" },
        //                 ],
        //             },
        //             { type: "number", value: "500" },
        //         ],
        //     }
        //     const result = walkThroughTree({
        //         tree: data,
        //     })
        //     const expected = [
        //         "(",
        //         "add",
        //         "100",
        //         "(",
        //         "add",
        //         "300",
        //         "200",
        //         ")",
        //         "500",
        //         ")",
        //     ]
        //     expect(result).toBe(expected)
        // })
    })
}
