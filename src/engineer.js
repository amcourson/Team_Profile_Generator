class Engineer {
    constructor (name, id,email,officeNumber,gitHub){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.gitHub = gitHub;

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
   getgiHtub(){
return this.gitHub
   }; 
   getRole(){
return "Engineer"
    };

}

module.exports = Engineer





// `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`










