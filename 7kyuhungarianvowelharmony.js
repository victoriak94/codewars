function dative(word) {
    let nekvowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    let nakvowels = ['a', 'á', 'o', 'ó', 'u', 'ú'];
    let wordSplit = word.split('');
    for (let i = wordSplit.length; i >= 0; i--) {
      if (nekvowels.indexOf(wordSplit[i]) !== -1) {
        word += 'nek';
        break
      } else if (nakvowels.indexOf(wordSplit[i]) !== -1) {
        word += 'nak';
        break
      }
    }
    return word;
  }