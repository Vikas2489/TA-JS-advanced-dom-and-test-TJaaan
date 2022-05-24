function getFullName(firstName, lastName) {
    return `${firstName + " " + lastName}`;
}


// Write a function named `isPalindrome` that accepts one input returns 
// `true` or `false` based on wether the value passed is palindrome or not.


function isPalindrome(str) {
    let strArr = str.split("");
    let strArr1 = [...strArr];
    strArr1.reverse();
    if (strArr.join("") == strArr1.join("")) {
        return true;
    } else {
        return false;
    }
}


// Create 2 functions that calculate properties of a circle, 
// using the definitions here.
// - Create a function called `getCircumfrence`:
// Pass the radius of a circle to the function and 
// it returns the circumference based on the radius, and output 
// `The circumference is NN`.

function getCircumfrence(radius = 0) {
    return `The circumference is ${2 * Math.PI * radius}`;
}


function getArea(radius = 0) {
    return `The area is ${Math.PI * (radius * radius)}`;
}

module.exports = {
    getFullName,
    getArea,
    getCircumfrence,
};