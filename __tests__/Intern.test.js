const { expect } = require('@jest/globals');
const Intern = require('../Lib/Intern');

//test
test('creates an intern object', () => {
    const intern = new Intern('Sonz', '7005', 'sonyarangraj@msn.com', 'Sam Houston State University');
    expect(intern.name).toBe('Sonz');
    expect(intern.id).toBe('7005');
    expect(intern.email).toBe('sonyarangraj@msn.com');
    expect(intern.school).toBe('Sam Houston State University');
});

//school
test('get users school info', () => {
    const intern = new Intern('Sonz', '7005', 'sonyarangraj@msn.com', 'Sam Houston State University');
    expect(intern.getSchool()).toBe('Sam Houston State University');
});

//role
test('retreive the users role', () => {
    const intern = new Intern('Sonz', '7005', 'sonyarangraj@msn.com', 'Sam Houston State University');
    expect(intern.getRole()).toBe('Intern');
});