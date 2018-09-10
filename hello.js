export function angle(name) {
    console.log('---------- real function: angle ------------')
    return `<<${name}>>`
}

export function words(name) {
    return `Hello, ${angle(name)}!`
}