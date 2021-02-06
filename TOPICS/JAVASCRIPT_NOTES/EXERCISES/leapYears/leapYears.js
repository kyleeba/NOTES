const leapYears = function() {

    let inputYear=arguments[0];

    if( (inputYear%4==0) )
    {
        if( inputYear%100==0 )
        {
            if( inputYear%400==0 )
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        return true;
    }
    else 
    {
        return false;
    }
}

module.exports = leapYears
