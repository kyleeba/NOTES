const sumAll = function() {
    // things to consider
    // --> arguments keyword
    // ----> Should we check against arguments.length != 2
    // --> Both types are not integer?
    // --> either number is negative?
    // --> numbers are equal?

    // typeof 42

    if(arguments.length != 2)
    {
        return 'ERROR';
    }

    if( (typeof arguments[0]) != "number"  ||
        (typeof arguments[1]) != "number" )
    {
        return 'ERROR';
    }

    if( arguments[0] < 0 ||
        arguments[1] < 0 )
    {
        return 'ERROR';
    }

    if( arguments[0] == arguments[1])
    {
        return arguments[0]*2;
    }

    let sum = 0; // initialize return value to be 0

    let minParameter = Math.min(arguments[0],arguments[1]);

    let maxParameter = Math.max(arguments[0],arguments[1]);

    for(let i = minParameter; i <= maxParameter; i++)
    {
        sum = sum + i;
    }

    return sum;

}

module.exports = sumAll
