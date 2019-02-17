function elevator(left, right, call){
    remainderLeft = Math.abs(call - left);
    remainderRight = Math.abs(call - right);
    
    if (remainderLeft < remainderRight) {
      return 'left';
    } else if (remainderRight <= remainderLeft) {
      return 'right';
    } 
  }