function sumTwoSmallestNumbers(numbers) {  
    function sortNumber(a,b) {
      return a - b;
    }
      
    let numSorted = numbers.sort(sortNumber);
    return numSorted[0] + numSorted[1];
  };