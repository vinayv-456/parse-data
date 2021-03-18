const { test, expect } = require('@jest/globals');
const {dollarParser, commaParser, changeDateFormat} = require('./app')

//testcase for date format
test('change date format of "10-4-1974" to "10/4/1974"', () => {
    expect(changeDateFormat("10-4-1974")).toBe("10/4/1974");
});

//testcase for dollar seperated entry
test(`convert "LA $ 10-4-1974 $ Nolan $ Rhiannon" to "Rhiannon LA 10/4/1974"`, ()=>{
    expect(dollarParser("LA $ 10-4-1974 $ Nolan $ Rhiannon")).toBe("Rhiannon LA 10/4/1974")
});

//testcase for comma seperated entry
test('convert "Mckayla, Atlanta, 5/29/1986" to "Mckayla Atlanta 5/29/1986"', () => {
    expect(commaParser("Mckayla, Atlanta, 5/29/1986")).toBe("Mckayla Atlanta 5/29/1986")
})