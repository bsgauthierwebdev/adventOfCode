const fs = require('fs')

// Read the data from the file
const rawData = fs.readFileSync('./data.txt', 'utf-8')

// Split the data into lines & process each line
const lines = rawData.trim().split('\n')
// console.log(lines)

// Initialize the arrays
const arr1 = []
const arr2 = []

// Process each line
lines.forEach(line => {
    // Split by whitespace & convert to numbers
    const [left, right] = line.trim().split(/\s+/).map(Number)
    // Add to arrays if valid number
    if (!isNaN(left)) arr1.push(left)
    if (!isNaN(right)) arr2.push(right)
})

// Output the results
// console.log('Array 1: ', arr1)
// console.log('Array 2: ', arr2)

function findTotalDistance() {
    // Sort the arrays
    let sortedArr1 = arr1.sort()
    let sortedArr2 = arr2.sort()

    // Create totalDistance variable
    let totalDistance = 0

    // Make sure arrays are the same length
    if (sortedArr1.length !== sortedArr2.length) {
        return 
    } else {
        // Loop through sortedArr1
        for (let i = 0; i < sortedArr1.length; i++) {
            // Compare values from the same line
            if (sortedArr1[i] > sortedArr2[i]) {
                // Add the difference to the totalDistance variable
                totalDistance += (sortedArr1[i] - sortedArr2[i])
            } else {
                totalDistance += (sortedArr2[i] - sortedArr1[i])
            }
        }
    }

    return totalDistance
}

// console.log(findTotalDistance())

function findLikeNumbers() {
    // Create variable at value of 0
    let similarityScore = 0

    // Create a hashmap to count how many times a number from arr1 appears in arr2
    const countMap = new Map()

    // Initialize counts for each number in arr1
    arr1.forEach(num => countMap.set(num, 0))
    
    // Count occurrences of arr1 numbers in arr2
    arr2.forEach(num => {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1)
        }
    })

    // Multiply the number by the count and add that value to similarityScore
    countMap.forEach((num, count) => {
        similarityScore += (num * count)
    })

    return similarityScore

}

console.log(findLikeNumbers())





// const fs = require('fs')

// // Read data from the file
// const rawData = fs.readFileSync('./data.txt', 'utf-8')

// // Split the data into lines and process each line
// const lines = rawData.trim().split('\n')

// // Initialize the arrays
// const arr1 = []
// const arr2 = []

// // Process each line
// lines.forEach(line => {
//     // Split by whitespace & convert to numbers
//     const [left, right] = line.trim().split(/\s+/).map(Number) 
//     // Add to arrays if valid number
//     if (!isNaN(left)) arr1.push(left)
//     if (!isNaN(right)) arr2.push(right)
// })

// // Output the results
// console.log(lines)
// // console.log('Array 1: ', arr1)
// // console.log('Array 2: ', arr2)
