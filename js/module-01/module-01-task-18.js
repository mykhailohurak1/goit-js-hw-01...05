function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = 0;

if(pricePerDroid * orderedQuantity > customerCredits) {
message = "Insufficient funds!";
} else message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity} credits left`;

  // Change code above this line
  return message;
}