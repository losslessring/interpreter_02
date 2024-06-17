import { parseFunction } from "../parseFunction/parseFunction"

export function parseExpression(tokens) {
    const [head, ...tail] = tokens
    //const data = ["add", "100", "(", "add", "300", "200", ")"]
    // const tokens = ["(", "add", "100", "200", ")"]
    if (head === "(") {
        return parseFunction(tail)
    } else if (typeof Number(head) === "number") {
        return {
            type: "number",
            value: Number(head),
        }
    }
    // } else if (body[0] === "(") {
    //     return parseExpression(body.slice(1, tokens.length - 1))
    // }
}
