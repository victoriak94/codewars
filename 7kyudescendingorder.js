function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''));
  }

  console.log(descendingOrder(123456789));