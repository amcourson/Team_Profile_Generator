class Engineer {
    constructor (name, id,email,officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

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
    getRole(){
return "Manager"
    };

}

module.exports = Engineer

















// `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`