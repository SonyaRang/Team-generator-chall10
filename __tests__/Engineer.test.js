const Engineer = require('../Lib/Engineer');

//test
test('engineer object creation', () => {
    const engineer = new Engineer('Sonz', '7005', 'sonyarangraj@msn.com', 'SonyaRang');
    expect(engineer.name).toBe('Sonz');
    expect(engineer.id).toBe('7005');
    expect(engineer.email).toBe('sonyarangraj@msn.com');
    expect(engineer.github).toBe('SonyaRang');
});

//github
test('Users GitHub info',() => {
    const engineer = new Engineer ('Sonz','7005', 'sonyarangraj@msn.com', 'SonyaRang');
    expect(engineer.getGitHub()).toBe('SonyaRang');
});

//role
test('retrieve role', () => {
    const engineer = new Engineer('Sonz', '7005', 'sonyarangraj@msn.com', 'SonyaRang');
    expect(engineer.getRole()).toBe('Engineer');
});