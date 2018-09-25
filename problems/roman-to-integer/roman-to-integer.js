const romanToInt = string => {
    if(string == null) return -1;
    let number = char_to_int(string.charAt(0));
    let previous, current;
    
    for(let i = 1; i < string.length; i++){
        current = char_to_int(string.charAt(i));
        previous = char_to_int(string.charAt(i-1));
        if(current <= previous){
            number += current;
        } else {
            number = number - previous * 2 + current;
        }
    }
    return number;
}
    
const char_to_int = char => {
    switch (char){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

module.exports = romanToInt;