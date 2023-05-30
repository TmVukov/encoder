exports.encoder = (str) => {
  let encoded = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++; 
    } else {
      encoded += str[i] + counter; 
      counter = 1; 
    }
  }

  return encoded
};


