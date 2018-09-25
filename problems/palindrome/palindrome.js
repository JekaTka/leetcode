const isPalindrome = number => {
    if(number < 0 || (number % 10 === 0 && number !== 0)) return false;

    let revertedNumber = 0;
    while(number > revertedNumber) {
        revertedNumber = revertedNumber * 10 + parseInt(number % 10);
        number = parseInt(number / 10);
    }

    return number === revertedNumber || number === parseInt(revertedNumber / 10);
};

module.exports = isPalindrome;