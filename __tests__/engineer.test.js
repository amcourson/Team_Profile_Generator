const Engineer = require("../src/engineer");



describe ("engineer", function (){
    test("can create an engineer",function(){
        const newEngineer = new Engineer("steve",18 ,"any@gmail.com", "031896", "str123")
        expect(typeof newEngineer).toBe("object")
    })
}) 