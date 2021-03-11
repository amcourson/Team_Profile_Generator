class Intern {
    constructor (name, id,email,officeNumber,school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.school = school; 

    }
    getName(){
return this.name
    };
   getID(){
return this.id
   };
    getEmail(){
return this.email
    };
   getofficeNumber (){
return this.officeNumber
   };
   getSchool(){
return this.school
   }
    getRole(){
return "Intern"
    };

}

module.export = Intern