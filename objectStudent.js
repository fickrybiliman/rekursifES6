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
   getData: function() {
      return  `Nama : ${this.name} \nUmur : ${this.age} \nTanggal Lahir : ${this.dateOfBirth} \nJenis kelamin : ${this.gender} \nId : ${this.studentID} \nHobby : ${this.hobbies} \nSport : ${this.hobbies[this.hobbies.length-1].sports}`;
   }
};

console.log(studentObj.getData());