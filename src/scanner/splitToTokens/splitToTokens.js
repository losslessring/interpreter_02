import { pipe } from "ramda"
import { splitBy } from "./../splitBy/splitBy"

export function splitToTokens({ string, delimiter }) {
    return pipe(
        (string) =>
            splitBy({
                strings: [string],
                delimiter: /\s/g,
            }),
        (strings) =>
            splitBy({
                strings,
                delimiter: /(\()/g,
            }),
        (strings) =>
            splitBy({
                strings,
                delimiter: /(\))/g,
            })
    )(string)
}
