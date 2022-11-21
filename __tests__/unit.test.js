// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//Phone
test('exepct 123-456-7890 to be phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

test('expect 111-111-1111 to be phone number', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
})

test('expect 1234567890 to not be phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
})

test('expect 1-2-3 to not be phone number', () => {
    expect(functions.isPhoneNumber('1-2-3')).toBe(false);
})

//Email
test('expect me@yourmoms.house to be email', () => {
    expect(functions.isEmail('me@yourmomshou.se')).toBe(true);
})

test('expect o@o.o to be email', () => {
    expect(functions.isEmail('o@o.oo')).toBe(true);
})

test('expect 0@1.1 to not be email', () => {
    expect(functions.isEmail('0@1.1')).toBe(false);
})

test('expect not-an-email to not be an email', () => {
    expect(functions.isEmail('not-an-email')).toBe(false);
})

//Passwort
test('expect aaaa to be strong passowrd', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
})
test('expect weakpassword to be strong password', () => {
    expect(functions.isStrongPassword('weakpassword')).toBe(true);
})
test('expect 1strongpassword to be weak password', () => {
    expect(functions.isStrongPassword('1strongpassword')).toBe(false);
})
test('expect uauhraoehroaehr@OIH#U$ho32uh402934082hohaodfha;djfh;ajsfh to be weak password', () => {
    expect(functions.isStrongPassword('uauhraoehroaehr@OIH#U$ho32uh402934082hohaodfha;djfh;ajsfh')).toBe(false);
})

//Dates
test('expect 03/24/2003 to be date', () => {
    expect(functions.isDate('03/24/2003')).toBe(true);
})
test('expect 01/01/0001 to be date', () => {
    expect(functions.isDate('01/01/0001')).toBe(true);
})
test('expect 2003/24/03 to not be date', () =>{
    expect(functions.isDate('2003/24/03')).toBe(false);
})
test('expect 03-24-2003 to not be date', () => {
    expect(functions.isDate('03-24-2003')).toBe(false);
})

//HexColor
test('expect AAAAAA to be color', () => {
    expect(functions.isHexColor('AAAAAA')).toBe(true);
})
test('expect AAA to be color', () => {
    expect(functions.isHexColor('AAA')).toBe(true);
})
test('expect 69696z to not be color', () => {
    expect(functions.isHexColor('69696z')).toBe(false);
})
test('expect AAz to not be color', () => {
    expect(functions.isHexColor('AAz')).toBe(false);
})
// TODO - Part 2