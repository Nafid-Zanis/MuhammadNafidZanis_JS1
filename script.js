//TUGAS MEMBUAT PROGRAM JAVASCRIPT NESTED IF PADA SISTEM PENILAI UJIAN DI FTI UNISSULA
document.write("TUGAS MEMBUAT PROGRAM JAVASCRIPT NESTED IF PADA SISTEM PENILAI UJIAN DI FTI UNISSULA <br>")
let nilaiAkhir = 39 ;

if(nilaiAkhir >=85 ) {
    document.write("Nilai " + nilaiAkhir ," mendapatkan grade A <br>")
} else if(nilaiAkhir >= 75 && nilaiAkhir <=84 ) {
    document.write("nilai " + nilaiAkhir ," mendapatkan grade AB <br>")
} else if(nilaiAkhir >= 65 && nilaiAkhir <=74) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade B <br>")
} else if(nilaiAkhir >=60 && nilaiAkhir <=64) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade BC <br>")
} else if(nilaiAkhir >=50 && nilaiAkhir <=59) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade C <br>")
} else if(nilaiAkhir >=40 && nilaiAkhir <=49) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade CD <br>")
} else if(nilaiAkhir >=30 && nilaiAkhir <=39) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade D <br>")
} else{
    document.write("Nilai " +nilaiAkhir, " mendapatkan grade E <br>")
}

//Contoh Program Pada Switch Case
document.write("CONTOH PROGRAM PADA SWITCH CASE <br>")

var menu = '4';
switch(menu){    
   case '1' : 
    document.write("Anda memilih menu soto ayam <br>")   
    break    
   case '2':
    document.write("Anda memilih menu pindang kerbau <br>")
    break    
   case '3':
    document.write("Anda memilih menu gacoan <br>")   
    break    
   case '4':
    document.write("Anda memilih menu babi guling <br>")
    break    
   default :
   document.write("Anda memilih menu Sosis goreng <br>")
} 

//Contoh Program pada function
document.write("CONTOH PROGRAM PADA FUNCTION <br>")
function kenalan(namanya) {
    document.write("Hai " + namanya, " !!! selamat datang di website kami <br>");
}
kenalan("Gabriela");

//Contoh Program pada Do While
document.write("CONTOH PROGRAM PADA DO WHILE<br>")
let nomer = 2;

do {
    document.write("pacar ke -" +nomer , ", <br>");
    nomer++;
}
while (nomer <=10);

//Contoh Program For Statement
document.write("CONTOH PROGRAM PADA FOR STATEMENT <br>")
var pacar = ["Freya ", "Nashwa " , " Azizi", " Una"];
for (var a = 0; a < pacar.length; a++) {
    document.write(pacar[a]);
}