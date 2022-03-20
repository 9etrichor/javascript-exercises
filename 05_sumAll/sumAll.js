const sumAll = function(num1, num2) {
    let summation = 0;
    if(typeof num1 === "number" && typeof num2 === "number" && num1 >= 0 && num2 >= 0)
    {
        if(num1 === num2)
        {
            return num1;
        }

        if(num1 > num2)
        {
            for(;num2 <= num1; num2 = num2 + 1)
            {
                summation = summation + num2;
            }
            return summation;
        }

        if(num1 < num2)
        {
            for(;num1 <= num2; num1 = num1 + 1)
            {
                summation = summation + num1;
            }
            return summation;
        }
    }
    else
    {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
