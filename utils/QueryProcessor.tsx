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

    if (numbers && numbers.length === 2) {
      const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
      return sum.toString();
    }
  } else if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length === 2) {
      const product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return product.toString();
    }
  }
  else if (query.toLowerCase().includes("the largest")) {
    const numbers = query.match(/\d+/g);

    if (numbers) {
      const largestNumber = Math.max(...numbers.map(Number));
      return largestNumber.toString();
    }
  }


  return "";
}
