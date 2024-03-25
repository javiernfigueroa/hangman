let words: string[]= [
    'JAVIER',
    'PAOLA',
    'GOYA',
    'KALI',
    'BENITO',
    'SANTA LUCIA',
    'CONCEPCION',
    "AMOR",
]

export function getRandomWord() {
    const randomIndex = Math.floor( Math.random() * words.length )
    return words[randomIndex];
}