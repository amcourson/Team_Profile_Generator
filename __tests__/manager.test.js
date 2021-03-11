const Manager = require("../src/manager");



describe ("manager", function (){
    test("can create a manager",function(){
        const newManager = new Manager("steve",18 ,"any@gmail.com", "12345")
        expect(typeof newManager).toBe("object")
    })
}) 