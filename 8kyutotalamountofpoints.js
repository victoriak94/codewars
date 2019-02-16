
function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
      if (games[i][0] > games[i][2]) {
        totalPoints += 3;
      } else if (games[i][0] === games[i][2]) {
        totalPoints += 1;
      } 
    }
    return totalPoints;
  }