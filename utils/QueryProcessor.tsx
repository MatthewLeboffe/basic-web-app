function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}


export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrew id is mleboffe."
    );
  } else if (query.toLowerCase().includes("what is your name?")) {
    return (
      "My name is Lebo."
    );
  } else if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const sum = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
      return sum.toString();
    }
  } else if (query.toLowerCase().includes("minus")) {
  const numbers = query.match(/\d+/g);

  if (numbers) {
    const sum = numbers.reduce((acc, curr) => acc - parseInt(curr), 0);
    return sum.toString();
  }
} 
  
  else if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const sum = numbers.reduce((acc, curr) => acc * parseInt(curr), 0);
      return sum.toString();
    }
  }
  else if (query.toLowerCase().includes("the largest")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const largestNumber = Math.max(...numbers.map(Number));
      return largestNumber.toString();
    }
  }
  else if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      for (let num of numbers) {
        let n = parseInt(num);
        if ((n > 0 && Math.sqrt(n) % 1 === 0) && (Math.cbrt(n) % 1 === 0)) {
          return n.toString();
        }
      }
    }
    return "None.";
  }
  else if (query.toLowerCase().includes("primes:")) {
  const numbers = query.match(/\d+/g);
  const primeNumbers: number[] = [];

  if (numbers) {
    for (let num of numbers) {
      if (isPrime(parseInt(num))) {
        primeNumbers.push(parseInt(num));
      }
    }
  }

  if (primeNumbers.length > 0) {
    return primeNumbers.join(", ");
  } else {
    return "None.";
  }
  } else if (query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const sum = numbers.reduce((acc, curr) => acc ** parseInt(curr), 0);
      return sum.toString();
    }
  }

  return "";
}
