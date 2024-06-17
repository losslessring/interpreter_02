import { parseExpression } from "./../parseExpression/parseExpression"

export function tokensToAST(tokens) {
    const data = ["(", "number", "100", ")"]

    if (tokens[0] === "(") {
        return parseExpression(tokens.slice(1, tokens.length - 1))
    }
}
