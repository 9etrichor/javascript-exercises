const removeFromArray = function(array, e1, e2 ,e3 ,e4) {
    function checkSame(arrayElement) {
        return arrayElement !== e1 && arrayElement !== e2 && arrayElement !== e3 && arrayElement !== e4;
    }
    return array.filter(checkSame);
};

// Do not edit below this line
module.exports = removeFromArray;
