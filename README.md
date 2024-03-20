# Practicing Data Structures and Algorithms

In this repository, you'll find a wide array of DSA problems, ranging from fundamental concepts like arrays and linked lists to more advanced topics like dynamic programming and graph algorithms. Each problem is carefully curated to challenge and expand your understanding of DSA.

## How to Use

Feel free to learn and explore the various folders and problem sets available in this repository. Each problem comes with a description, input-output specifications, and often, sample solutions.

## What is DSA?

Data Structures and Algorithms form the backbone of computer science and software engineering. Data Structures are the building blocks used to organize and store data effectively, while Algorithms are the step-by-step procedures used to solve problems efficiently. Mastering DSA not only enhances your problem-solving abilities but also equips you with the tools necessary to write efficient and scalable code.

## Big Os

1. O(1) Constant- no loops
2. O(log N) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
3. O(n) Linear - for loops, while loops through n items
4. O(n log(n)) Log Liniear - usually sorting operations
5. O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two
nested loops
6. O(2^n) Exponential - recursive algorithms that solves a problem of size N
7. O(n!) Factorial - you are adding a loop for every element

* **Iterating through half a collection is still O(n)**
* **Two separate collections: O(a * b)**

### What can cause time in a function?

1. Operations (+, -, *, /)
2. Comparisons (<, >, ==)
3. Looping (for, while)
4. Outside Function call (function())

### Rule Book

* Rule 1: Always worst Case
* Rule 2: Remove Constants
* Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
for steps in order
for nested steps
* Rule 4: Drop Non-dominant terms

### What causes Space complexity?

1. Variables
2. Data Structures
3. Function Call
4. Allocations
