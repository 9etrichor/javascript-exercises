const repeatString = function(string, num) {
    let sentence = '';
    if(num >= 0)
    {
        for(i = 0;i < num; i = i + 1)
        {
            sentence = sentence + string;
        }
        return sentence;
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
