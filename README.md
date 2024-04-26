# Kirish

Type scripct open source dasturlash tili hisoblanadi Microsoft komponiyasi tomonidan
yaratilgan type script java scriptni orqali qilingan Type scriptda JavaScript qoidalari
ishlaydi Java script dynamic type language hisoblanadi Type script static .
Type scriptda o'zgaruvchilar elon qilinganda uni typesini ham berib ketish kerak
Type scriptni enginelar to'gridan to'gri o'qiy olmaydi shuning uchun har daom Ts code run bo'layotganda
codelar Js ga o'tadi

---

# Codeda farqi

//Js code | //TS code
const num = 1; | const num : number = 1;
const str = "Hello Js" | const str : string = "Hello Ts"
let val = 100; | let val : number = 100;
val = "String change" | val = "String change" //Error val faqat number qiymat qabul qila oladi

# setup

_npm install -g typescript_

# run

_tsc main.ts —watch_

# Types

_Boolean_ qiymat true | false

_String_ misol uchun "Hello Ts"

_Number_ misol uchun 1,2,3

_Any_ o'zgaruvchini qiymatiga :any bersak u keyingi qadamlarda hohlagan turdagi o'zgaruvchilarni qabul qiladi

_null_ faqat null qiymat bersa bolladi

_undefined_ faqat undefined qiymat qabul qila oladi

_object_ misol uchun
let person: object = {
name: "John",
age: 30
};

_array_ ni ikki hil usulda yaratsak boladi
1-usul
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

2-usul
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

 
_tuple_ bu bitta arrayda bir necha hil malumotlarni saqlashga aytiladi
<misol uchun>
let person: [string, number] = ["John", 30];


_enum_ o'zgarmaslardan tashkil topgan toplamni yaratib beradi defualt holatda index ni oladi

_unknow_  any ga o'xshab hamma turdagi malumotlarni qabul qila oladi lekin uni boshqa o'zgaruvchiga berib bo'lmaydi

_union_ o'zgaruvchi bir necha turdagi malumotlarni qabul qila olishi
misol uchun 
let myVar: string | number;
myVar = "Hello Ts";
myVar = 12;
myVar = true; //Error faqat string yoki number berish kerak   