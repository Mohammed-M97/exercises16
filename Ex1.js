// Generate range of integers
function generateRange(min, max, step) {
  let result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

console.log(generateRange(2,10,2));
