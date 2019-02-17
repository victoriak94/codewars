function descendingOrder(n){
    let numArray = n.toString().split('').sort().reverse().join('');
    let descending = Number(numArray);
    return descending;
  }