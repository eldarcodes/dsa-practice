function nestedLoop(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}

const numbers = [1, 2, 3, 4];

nestedLoop(numbers); // O(n^2) --> Quadratic Time
