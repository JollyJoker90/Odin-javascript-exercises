const reverseString = function (str) {
    let stringArray = String(str).split("");
    let output = "";
    for (let i = stringArray.length; i > 0; i--) {
        output += stringArray[i-1];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
