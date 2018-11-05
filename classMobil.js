class Mobil {
   constructor(merek, harga, warna, bahanBakar, jumlahRoda) {
      this.merek = merek;
      this.harga = harga;
      this.warna = warna;
      this.bahanBakar = bahanBakar;
      this.jumlahRoda = jumlahRoda;
   }

   getSpesifikasi() {
      return `Mobil saya bermerek ${this.merek}, dengan harga ${this.harga.toLocaleString('id')} Rupiah, berwarna ${this.warna}, berbahan bakar ${this.bahanBakar} dan beroda ${this.jumlahRoda}.`;
   }

   jualMobil() {
      return `harga jual kembali : ` + (this.harga - (this.harga * 0.2)).toLocaleString('id');
   }
}

let myCar = new Mobil('Honda', 700000000, 'Merah', 'Solar', 4);
console.log(myCar.getSpesifikasi());
console.log(myCar.jualMobil());