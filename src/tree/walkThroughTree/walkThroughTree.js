export function walkThroughTree({ tree }) {
    if (tree.type === "expression") {
        return ["(", tree.value[0]["value"], ")"]
    }
}
