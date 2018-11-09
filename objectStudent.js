var studentObj = {
   name: 'Fickry Bil Iman',
   age: 37,
   dateOfBirth: '07 October 1981',
   gender: 'Male',
   studentID: '007',
   hobbies: [
      'Coding', 
      'Gaming',
      'Reading',
      {
         sports: ['Badminton', 'Jogging', 'Swimming']
      }
   ],
   setName: function(newName) {
      this.name = newName;
   },
   setAge: function(newAge) {
      this.age = newAge;
   },
   setDateOfBirth: function(newDateOfBirth) {
      this.dateOfBirth = newDateOfBirth;
   },
   setGender: function(newGender) {
      if (newGender === 'Male' || newGender === 'Female') {
         this.gender = newGender;
      } else {
         console.log('Gender yang dimasukkan salah');
      }
   },
   addHobby: function(newHobby) {
      this.hobbies.push(newHobby);
   },
   removeHobby: function(hobby) {
      let hobbyIndex = this.hobbies.indexOf(hobby);
      this.hobbies.splice(hobbyIndex, 1);
   },
   getData: function() {    
      let sportIndex;
      for (let i = 0; i < this.hobbies.length; i++) {
         if (typeof this.hobbies[i] === 'object') {
            sportIndex = i;
         }
      }
      return  `Nama : ${this.name} \nUmur : ${this.age} Tahun \nTanggal Lahir : ${this.dateOfBirth} \nJenis kelamin : ${this.gender} \nId : ${this.studentID} \nHobby : ${this.hobbies} \nSport : ${this.hobbies[sportIndex].sports}`;
   }
};

studentObj.setName('Fathin Kholidi Bil Iman');
studentObj.setAge(8);
studentObj.setDateOfBirth('08 Agustus 2010');
studentObj.addHobby('Nonton Doraemon');
console.log(studentObj.getData());