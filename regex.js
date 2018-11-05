/*
. // - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
* // - Mencocokan 0 atau lebih dari karakter terdahulu.
+ // - Mencocokan 1 atau lebih dari karakter terdahulu.
? // - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
\d // - Mencocokan digit apapun
\w // - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
$ // - Mencocokan ujung dari sebuah string.
^ // - Mencocokan awal dari sebuah string.
[^a-z] // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowercase.
*/

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));