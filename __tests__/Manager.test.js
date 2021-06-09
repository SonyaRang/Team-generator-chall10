
const Manager = require('../Lib/Manager');

// test 
test('creates a manager object', () => {
    const manager = new Manager('Sonz', '7005', 'sonyarangraj@msn.com', '3000');
    expect(manager.name).toBe('Sonz');
    expect(manager.id).toBe('7005');
    expect(manager.email).toBe('sonyarangraj@msn.com');
    expect(manager.officeNumber).toBe('3000');
});

// office-number
test('get users office number info', () => {
    const manager = new Manager('Sonz', '7005', 'sonyarangraj@msn.com', '3000');
    expect(manager.getOfficeNumber()).toBe('3000');
});

//role
test('retrieve the users role', () => {
    const manager = new Manager('Sonz', '7005', 'sonyarangraj@msn.com', '3000');
    expect(manager.getRole()).toBe('Manager');
});