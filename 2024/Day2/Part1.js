const fs = require('fs')

// Read data from the file
const rawData = fs.readFileSync('./data.txt', 'utf-8')

// Split data into individual lines
const lines = rawData.trim().split('\n')

// Create individual arrays with each line
const data = lines.map(line => line.split(' ').map(Number))

function findSafe() {
    // Establish a variable for unsafe reports
    let unsafe = 0
    // Loop through the data set
    for (let i = 0 ; i < data.length; i++) {
        // Loop through each array
        for (let j = 1; j < data[i].length; j++) {
            // Establish variables for values to compare
            let input1 = data[i][j - 1]
            let input2 = data[i][j]
            let input3 = data[i][j + 1]
            // Establish difference between variables as an absolute
            let currentDiff = Math.abs(input1 - input2)
            // Check value of the difference between adjacent variables
            if (currentDiff > 3) {
                unsafe += 1
                break
            } 
            // Check if variables are all either increasing or decreasing
            else if (input1 <= input2 && input2 >= input3) {
                unsafe += 1
                break
            } else if (input1 >= input2 && input2 <= input3) {
                unsafe += 1
                break
            }
        }
    } 
    // Return value of safe reports
    return data.length - unsafe
}

console.log(findSafe())