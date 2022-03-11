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

// console.log(`When it comes to dogs, ${favoriteDog}.`)
// console.log(bestInShow("meow"))

//===================================================Addition===================================================
const addition = (num2, num1, num3) => {
    const sum = num1 + num2 + num3
    return sum 
}

// console.log(`The answer is ${addition(17, 4, 11)}!`)

//===================================================Self-Driving Cars===================================================
const go = (direction, speed) => {
    if (speed > 75) {
        const tesla = `The car is moving ${direction} at ${speed}mph. SLOW DOWN!!`
        return tesla 
        } else {
        const tesla = `The car is moving ${direction} at ${speed}mph.`
        return tesla
        }
    }

// console.log(go("sideways", 64))
// console.log(go("backwards", 128))

//===================================================Evens or Odds===================================================
const numbahz = [0, 2, 5, 9, 10, 11, 12, 18, 19, 20, 21, 24, 27, 29, 34, 42, 50, 64, 89]

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        const evenString = "Even"
        return evenString
    } else {
        const oddString = "Odd"
        return oddString
    }
}

for (const num of numbahz) {
    // console.log(evenOrOdd(num))
}

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

//===================================================Sven's Gone Fishin'===================================================
const svensfeesh = (num) => {
     const randoNum = Math.floor(Math.random() * num)
     console.log(randoNum)
     if (randoNum === 0) {
        console.log("Sven hooked a tuna!  :)")
     } else {
         console.log("Sven came up empty-handed.  :(")
     }
}

// svensfeesh(3)

//===================================================Fast Food===================================================
const fastFood = (sandwich, side, drink, dessert) => {
    const foodArr = {
        'sandwich': `${sandwich}`,
        'side': `${side}`,
        'drink': `${drink}`,
        'dessert': `${dessert}`
    }
    return foodArr
}

const burgerMeal = fastFood('hamburger w/ bacon & no tomato or pickles', 'tater tots', 'water', 'snickerdoodle cookie')
// console.log(burgerMeal)

//===================================================Same Chores, Different Days===================================================
// lightning exercise
const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}

const cubed = num => (num * num) * num 

// console.log(bigify(3, cubed))

const dude = {
    firstName: 'Sven',
    lastName: 'Fisher'
}

const dishes = obj => `${obj.firstName} ${obj.lastName} unloaded, then loaded the dishwasher`

const trash = obj => `${obj.firstName} ${obj.lastName} took the trash to the dumpster`

const groceries = obj => `${obj.firstName} ${obj.lastName} went to the grocery store`

const oil = obj => `${obj.firstName} ${obj.lastName} got his car's oil changed`

const bathroom = obj => `${obj.firstName} ${obj.lastName} cleaned the bathroom`

const raid = obj => `${obj.firstName} ${obj.lastName} hopped in a longship with his boys and raided some Saxon settlements near the water`



const lazyDay = (chore, day) => `${chore} on ${day}.`

console.log(lazyDay(oil(dude), 'Saturday'))

const busyDay = (chore1, chore2, chore3, day) => `On ${day}, ${chore1}, and ${chore2}, and ${chore3}.`

console.log(busyDay(dishes(dude), trash(dude), raid(dude), "Tuesday"))