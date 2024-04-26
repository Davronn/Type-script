console.log("helo TS");
// Kvadratni maydonini hisoblayuvchi funksiya
function kvadrat(uzunlik) {
    return uzunlik * uzunlik;
}
// To'rtburchak maydonini hisoblayuvchi funksiya
function torburchak(uzunlik1, uzunlik2) {
    return uzunlik1 * uzunlik2;
}
// Doira maydonini hisoblayuvchi funksiya
function doira(radius) {
    return Math.PI * radius * radius;
}
// Testlash uchun funksiya
function runFunction() {
    var kvadratM = kvadrat(5);
    console.log("Kvadrat maydoni:", kvadratM);
    var torburchakM = torburchak(4, 6);
    console.log("Tortburchak maydoni:", torburchakM);
    var doiraM = doira(3);
    console.log("Doira maydoni:", doiraM);
}
// Test funksiyasini chaqirish
runFunction();
