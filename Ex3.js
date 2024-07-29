// Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  let sum = 0;
  if (a == b) {
    return a;
  }
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(1, 0));
