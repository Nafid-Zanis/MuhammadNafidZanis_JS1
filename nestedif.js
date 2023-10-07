//TUGAS MEMBUAT PROGRAM JAVASCRIPT NESTED IF PADA SISTEM PENILAI UJIAN DI FTI UNISSULA
let nilaiAkhir = 39;

if(nilaiAkhir >=85) {
    document.write("Nilai " + nilaiAkhir ," mendapatkan grade A")
} else if(nilaiAkhir >= 75 && nilaiAkhir <=84 ) {
    document.write("nilai " + nilaiAkhir ," mendapatkan grade AB")
} else if(nilaiAkhir >= 65 && nilaiAkhir <=74) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade B")
} else if(nilaiAkhir >=60 && nilaiAkhir <=64) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade BC")
} else if(nilaiAkhir >=50 && nilaiAkhir <=59) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade C")
} else if(nilaiAkhir >=40 && nilaiAkhir <=49) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade CD")
} else if(nilaiAkhir >=30 && nilaiAkhir <=39) {
    document.write("nilai " +nilaiAkhir, " mendapatkan grade D")
} else{
    document.write("Nilai " +nilaiAkhir, " mendapatkan grade E")
}