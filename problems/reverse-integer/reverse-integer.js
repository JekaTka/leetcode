const reverse = x => {
    var reverse = 0
    var isNegative = x < 0 ? -1 : 1
    x = x * isNegative
  
    if (x / 10 < 1) {
      return x
    }
  
    while (x >= 1) {
      var diff = parseInt(x % 10)
      reverse = (reverse * 10) + diff
      x = x / 10
    }
  
    if (reverse > Math.pow(2, 31) - 1) {
      return 0;
    }
  
    return reverse * isNegative
  };

  module.exports = reverse;