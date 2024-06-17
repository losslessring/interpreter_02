import { parseExpression } from "./../parseExpression/parseExpression"

export function parseFunction(expr, tokens) {
    const [head, ...tail] = tokens
    // const tokens = ["(", "add", "100", "200", ")"]
    let functionNode = {
        type: "function",
        name: head,
        args: [],
    }
    while (head !== ")") {
        let arg = parseExpression(tokens.slice(2))
        functionNode.args.push(arg.expr)
    }
    return parseFunction(functionNode, tokens.slice(1))
}
