import { parseFunction } from "../parseFunction/parseFunction"

export function parseExpression(obj) {
    let tree = obj.tree
    let tokens = obj.tokens
    let currentExpressionNode = obj.currentExpressionNode

    // console.dir(obj, { depth: null })
    // console.log(
    //     "------------------------------------------------------------------------------------"
    // )
    const [head, ...tail] = tokens

    if (tokens.length === 0) {
        return tree
    }

    if (head === "(" && !tree) {
        tree = {
            type: "expression",
            value: [],
        }
        return parseExpression({
            tree,
            currentExpressionNode: tree,
            tokens: tail,
        })
    }

    if (head === "(") {
        let newTreeExpressionNode = {
            type: "expression",
            value: [],
        }

        tree.value.push(newTreeExpressionNode)

        return parseExpression({
            tree,
            currentExpressionNode: newTreeExpressionNode,
            tokens: tail,
        })
    } else if (head === ")") {
        return parseExpression({ tree, currentExpressionNode, tokens: tail })
    } else if (!isNaN(parseFloat(head))) {
        currentExpressionNode.value.push({ type: "number", value: head })
        return parseExpression({ tree, currentExpressionNode, tokens: tail })
    } else if (isNaN(parseFloat(head))) {
        currentExpressionNode.value.push({ type: "string", value: head })
        return parseExpression({ tree, currentExpressionNode, tokens: tail })
    }
}
