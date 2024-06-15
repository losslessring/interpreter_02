export function splitBy({ strings, delimiter }) {
    return strings
        .flatMap((string) => string.split(delimiter))
        .filter((string) => string !== "")
}
