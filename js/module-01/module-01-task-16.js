function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if(available < ordered) {
  message = "Not enough goods in stock!";
} else message = "Order is processed, our manager will contact you.";
  // Change code above this line
  return message;
}