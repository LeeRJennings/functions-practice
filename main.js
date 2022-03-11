//===================================================Age In Dog Years===================================================
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson * 7
    return ageInDogYears
}

// console.log(calculateAgeInDogYears(30))

//===================================================Best In Show===================================================
const bestInShow = (dogBreed) => {
    if (dogBreed === "meow") {
        const cats = "I like cats."
        return cats
    } else {
        const favDog = `my favorite dog breed is ${dogBreed}`
        return favDog
    }
}

const favoriteDog = bestInShow("beagle")

console.log(`When it comes to dogs, ${favoriteDog}.`)
console.log(bestInShow("meow"))

//===================================================Addition===================================================

//===================================================Double Functions===================================================
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const noKs = (arr) => {
    const noKArray = arr.filter(word => !word.startsWith("k"))
    return noKArray
}

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const stringBuilder = (arr) => {
    const noKString = arr.join(" ")
    return noKString
} 

/*
    Invoke the filtering function and store its return value
 */
const newArr = noKs(words)

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
const newString = stringBuilder(newArr)

// console.log(newString)