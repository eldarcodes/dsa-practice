const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

export function findNemo(items: string[]) {
  const t0 = performance.now();

  for (let i = 0; i < items.length; i++) {
    if (items[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }

  const t1 = performance.now();

  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo(everyone); // O(n) --> Linear Time
