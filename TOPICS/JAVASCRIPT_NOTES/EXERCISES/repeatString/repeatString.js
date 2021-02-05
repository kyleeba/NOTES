const repeatString = function(input,iterations) {

    if(iterations < 0)
    {
        return "ERROR";
    }
    else
    {
        let returnString = "";
        for(let i = 0; i < iterations; i++)
        {
            returnString = returnString + input;
        }
        return returnString;
    }
}

module.exports = repeatString
