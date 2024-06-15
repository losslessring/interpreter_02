export function keepOnlyOneCharInRow({ string, keepOneChar }) {
    let multipleCharsInRow = false
    let newString = []

    for (let cursor = 0; cursor < string.length; ) {
        let currentChar = string[cursor]

        if (currentChar !== keepOneChar) {
            multipleCharsInRow = false
            newString.push(currentChar)
            cursor = cursor + 1
        } else {
            if (multipleCharsInRow === false) {
                newString.push(currentChar)
                multipleCharsInRow = true
                cursor = cursor + 1
            } else {
                cursor = cursor + 1
            }
        }
    }
    return newString.join("")
}
