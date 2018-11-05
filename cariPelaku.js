function cariPelaku(str) {
   // you can only write your code here!
   let regex = /abc/g;
   // return str.match(regex) === null ? null : str.match(regex).length;
   return Array.isArray(str.match(regex)) ? str.match(regex).length : null;
 }
 
 // TEST CASES
 console.log(cariPelaku('mabcvabc')); // 2
 console.log(cariPelaku('abcdabdc')); // 1
 console.log(cariPelaku('bcabcac')); // 1
 console.log(cariPelaku('abcabcabc')); // 3
 console.log(cariPelaku('babcbacabc')); // 2
 console.log(cariPelaku('kdalkfjaslkgj')); // 2