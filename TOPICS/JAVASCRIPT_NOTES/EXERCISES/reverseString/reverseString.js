
const reverseString = function(inputString) 
{

    let splitString = inputString.split("");
    let reversedArray = splitString.reverse();
    let joinedArray = reversedArray.join("");
    return joinedArray;
}
    
    

module.exports = reverseString

