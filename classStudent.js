class Student {
   constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
      this.name = name;
      this.age = age;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
      this.studentID = studentID;
      this.Hobbies = [hobbies];
   }

   setName(newName) {
      this.name = newName;
   }

   setAge(newAge) {
      this.age = newAge;
   }

   setDateOfBirth(newdateOfBirth) {
      this.dateOfBirth = newdateOfBirth;
   }

   setGender(newGender) {
      if (newGender.toLowerCase() === 'male' || newGender.toLowerCase() === 'female') {
         console.log(`Gender changed to ${newGender}.`);
         this.gender = newGender;
      } else {
         console.log(`Please input only 'Male' of 'Female', ${newGender} Unrecognized.`);
      }
   }
   
   addHobby(newHobby) {
      this.Hobbies.push(newHobby);
   }

   removeHobby(hobby) {
      let hobbyIndex = this.Hobbies.indexOf(hobby);
      this.Hobbies.splice(hobbyIndex, 1);
   }

   getData() {
      return  `Nama : ${this.name} \nUmur : ${this.age} \nTanggal Lahir : ${this.dateOfBirth} \nJenis kelamin : ${this.gender} \nId : ${this.studentID} \nHobby : ${this.Hobbies}`;
   }
}

let fickry = new Student('Fickry Bil Iman', 37, '07 Oktober 1981', 'Male', '007', 'Badminton');
fickry.addHobby('Coding');
fickry.addHobby('Gaming');
// fickry.setGender('Cowok');
fickry.removeHobby('Badminton');
console.log(fickry.getData());