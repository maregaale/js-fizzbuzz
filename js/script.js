// genero i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  // per i multipli di 3 e 5 stampo FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  // per i multipli di 3 stampo Fizz
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  // per i multipli di 5 stampo Buzz
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  // stampa degli altri numeri
  else {
    console.log(i);
  }
}
