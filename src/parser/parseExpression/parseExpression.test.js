import { describe } from "../../../testingLibrary/testingLibrary.js"
import { it } from "../../../testingLibrary/testingLibrary.js"
import { expect } from "../../../testingLibrary/testingLibrary.js"
import { parseExpression } from "./parseExpression"

export const parseExpression_test = () => {
    describe("parse expression", () => {
        it("parse function expression", () => {
            const tokens = ["(", "add", "100", "200", ")"]
            const result = parseExpression({ tokens })

            const expected = {
                type: "expression",
                value: [
                    { type: "string", value: "add" },
                    { type: "number", value: "100" },
                    { type: "number", value: "200" },
                ],
            }

            expect(result).toBe(expected)
        })

        it("parse nested function expression", () => {
            const tokens = [
                "(",
                "add",
                "100",
                "(",
                "add",
                "300",
                "200",
                ")",
                ")",
            ]
            const result = parseExpression({ tokens })

            const expected = {
                type: "expression",
                value: [
                    { type: "string", value: "add" },
                    { type: "number", value: "100" },
                    {
                        type: "expression",
                        value: [
                            { type: "string", value: "add" },
                            { type: "number", value: "300" },
                            { type: "number", value: "200" },
                        ],
                    },
                ],
            }

            expect(result).toBe(expected)
        })

        it("parse nested function expression", () => {
            const tokens = [
                "(",
                "add",
                "100",
                "(",
                "add",
                "300",
                "200",
                ")",
                "500",
                ")",
            ]
            const result = parseExpression({ tokens })

            const expected = {
                type: "expression",
                value: [
                    { type: "string", value: "add" },
                    { type: "number", value: "100" },
                    {
                        type: "expression",
                        value: [
                            { type: "string", value: "add" },
                            { type: "number", value: "300" },
                            { type: "number", value: "200" },
                        ],
                    },
                    { type: "number", value: "500" },
                ],
            }

            expect(result).toBe(expected)
        })

        // it("parse nested function expression", () => {
        //     const tokens = [
        //         "(",
        //         "add",
        //         "100",
        //         "(",
        //         "add",
        //         "300",
        //         "200",
        //         ")",
        //         ")",
        //     ]
        //     const result = parseExpression(tokens)

        //     const expected = {
        //         type: "function",
        //         name: "add",
        //         args: [
        //             { type: "number", value: 100 },
        //             {
        //                 type: "function",
        //                 name: "add",
        //                 args: [
        //                     { type: "number", value: 300 },
        //                     { type: "number", value: 200 },
        //                 ],
        //             },
        //         ],
        //     }

        //     expect(result).toBe(expected)
        // })
    })
}
