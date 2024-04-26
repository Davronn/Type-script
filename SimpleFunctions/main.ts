export {};
console.log("helo ts");

// Kvadratni maydonini hisoblayuvchi funksiya
function kvadrat(uzunlik: number): number {
  return uzunlik * uzunlik;
}

// To'rtburchak maydonini hisoblayuvchi funksiya
function torburchak(uzunlik1: number, uzunlik2: number): number {
  return uzunlik1 * uzunlik2;
}

// Doira maydonini hisoblayuvchi funksiya
function doira(radius: number): number {
  return Math.PI * radius * radius;
}

// Testlash uchun funksiya
function runFunction() {
  const kvadratM = kvadrat(5);
  console.log("Kvadrat maydoni:", kvadratM);

  const torburchakM = torburchak(4, 6);
  console.log("Tortburchak maydoni:", torburchakM);

  const doiraM = doira(3);
  console.log("Doira maydoni:", doiraM);
}

// Test funksiyasini chaqirish
runFunction();
