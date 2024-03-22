export const getRandom = ( arr ) => {

    const indexRamdom = Math.floor( Math.random() * arr.length )
    const elementRandom = arr[indexRamdom]
    
    return elementRandom
}
