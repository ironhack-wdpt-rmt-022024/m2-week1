export function getRandomNumber () {
  return Math.random()
}


export function capitalize (str) {
  const firstChar = str[0].toUpperCase();
  const rest = str.slice(1, str.length)
  
  return firstChar + rest;
}

