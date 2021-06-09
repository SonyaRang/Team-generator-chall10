const { test, expect} = require('@jest/globals');
const { getMaxListeners} = require('process');
const Employee = require('../Lib/Employee');

//test
test('employee object created', () => {
    const employee = new Employee ('Sonz', '7005', 'sonyarangraj@msn.com');
    expect(employee.name).toBe('Sonz');
    expect(employee.id).toBe('7005');
    expect(employee.email).toBe('sonyarangraj@msn.com');
});

//name
test('creates a new employee name', () => {
    const employee = new Employee('Sonz', '7005', 'sonyarangraj@msn.com');
    expect(employee.getName()).toBe('Sonz');
});

//ID
test('test the users ID', () => {
    const employee = new Employee('Sonz', '7005', 'sonyarangraj@msn.com');
    expect(employee.getId()).toBe('7005');
});

//users email
test('test for the users email', () => {
    const employee = new Employee('Sonz', '7005', 'sonyarangraj@msn.com');
    expect(employee.getEmail()).toBe('sonyarangraj@msn.com');
});

//role
test('retrieve role', () => {
    const employee = new Employee('Sonz', '7005', 'sonyarangraj@msn.com');
    expect(employee.getRole()).toBe('Employee');
});