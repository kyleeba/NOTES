// TODO 
// c->f conversion
// f->c conversion
// round to 1 decimal place
// f = c * (9/5)+ 32
// c = (f - 32) * (5/9)

const ftoc = function() {

    let inputTemp = arguments[0];
    let c = (inputTemp - 32) * 5/9;

    return (Math.round(c*10)/10);
    

}

const ctof = function() {

    let inputTemp = arguments[0];
    let f = (inputTemp * 9/5) + 32;

    return (Math.round(f*10)/10);

}

module.exports = {
  ftoc,
  ctof
}
