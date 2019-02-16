function XO(str) {
    let totalx = 0
    let totalo = 0
    let x = 'x'
    let o = 'o'
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === x || str[i] === x.toUppercase) {
        totalx += 1;
      } else if (str[i] === o || str[i] === o.toUppercase) {
        totalo += 1;
      }
    }
    
    if (totalx === totalo) {
      return true;
    } else {
      return false;
    }
  }