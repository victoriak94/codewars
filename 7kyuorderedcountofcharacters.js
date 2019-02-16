var orderedCount = function (text) {
    let array = [];
    text.split("").forEach((baseLetter, i) => {
      let counter = 0;
      if (i !== text.indexOf(baseLetter)) {
        return;
      }
      for (let j = 0; j < text.length; j++) {
        if (baseLetter === text[j]) {
          counter += 1;
        }
      }
      array.push([baseLetter, counter]);
    });
   
    return array;
   }