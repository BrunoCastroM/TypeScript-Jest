describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toBeTruthy();
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThan(9);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toHaveProperty('toNumber');
  });
});

// Diferença entre toBe e toEqual:
describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const person = { name: 'Bruno', age: 30 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 30);
    expect(person.name).toBe('Bruno');
  });
});
