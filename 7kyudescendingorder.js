function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''));
  }

  console.log(descendingOrder(123456789));
  console.log(descendingOrder(97283471));
  console.log(descendingOrder(0));
  console.log(descendingOrder(1));