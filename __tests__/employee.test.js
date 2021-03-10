 const Employee = require("../src/employee");



describe ("employees", function (){
    test("can create an employee",function(){
        const newEmployee = new Employee("steve",18 ,"any@gmail.com")
        expect(typeof newEmployee).toBe("object")
    })
}) 