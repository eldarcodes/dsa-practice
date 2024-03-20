export function nestedLoop(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(i, j);
    }
  }
}

const numbers = [1, 2, 3];

nestedLoop(numbers); // O(n^2) --> Quadratic Time
