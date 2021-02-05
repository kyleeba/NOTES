const removeFromArray = function(){

    let ret = arguments[0];
    for (var i=1; i < arguments.length; i++)
    {
        let valueIndex = ret.indexOf(arguments[i]);
        while(valueIndex != -1)
        {
            ret.splice(valueIndex,1);
            valueIndex = ret.indexOf(arguments[i]);
        }
    }

    return ret;
   
}

module.exports = removeFromArray
