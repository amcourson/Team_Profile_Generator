const Intern = require("../src/intern");



describe ("intern", function (){
    test("can create an intern",function(){
        const newIntern = new Intern("steve",18 ,"any@gmail.com", "12343", "University of Missouri")
        expect(typeof newIntern).toBe("object")
    })
}) 