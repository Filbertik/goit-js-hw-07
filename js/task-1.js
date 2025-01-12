function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = pricePerDroid * quantity;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Виклик функції
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
