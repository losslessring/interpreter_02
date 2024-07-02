import { parseFunction } from "../parseFunction/parseFunction"

export function parseExpression(obj) {
    let tree = obj.tree
    let tokens = obj.tokens
    let currentExpressionNode = obj.currentExpressionNode
    let expressionNodesStack = obj.expressionNodesStack

    // console.dir(obj, { depth: null })
    // console.log(
    //     "------------------------------------------------------------------------------------"
    // )

    //Убрать передачу cerrentExpressionNode, его можно брать из стека

    const [head, ...tail] = tokens

    if (tokens.length === 0) {
        return tree
    }

    if (!expressionNodesStack) {
        expressionNodesStack = []
    }

    if (head === "(" && !tree) {
        tree = {
            type: "expression",
            value: [],
        }

        expressionNodesStack.push(tree)

        return parseExpression({
            tree,
            currentExpressionNode:
                expressionNodesStack[expressionNodesStack.length - 1],
            expressionNodesStack,
            tokens: tail,
        })
    }

    if (head === "(") {
        let newTreeExpressionNode = {
            type: "expression",
            value: [],
        }

        tree.value.push(newTreeExpressionNode)
        expressionNodesStack.push(newTreeExpressionNode)

        return parseExpression({
            tree,
            currentExpressionNode:
                expressionNodesStack[expressionNodesStack.length - 1],
            expressionNodesStack,
            tokens: tail,
        })
    } else if (head === ")") {
        expressionNodesStack.pop()

        return parseExpression({
            tree,
            currentExpressionNode:
                expressionNodesStack[expressionNodesStack.length - 1],
            expressionNodesStack,
            tokens: tail,
        })
    } else if (!isNaN(parseFloat(head))) {
        currentExpressionNode.value.push({ type: "number", value: head })
        return parseExpression({
            tree,
            currentExpressionNode,
            expressionNodesStack,
            tokens: tail,
        })
    } else if (isNaN(parseFloat(head))) {
        currentExpressionNode.value.push({ type: "string", value: head })
        return parseExpression({
            tree,
            currentExpressionNode,
            expressionNodesStack,
            tokens: tail,
        })
    }
}
