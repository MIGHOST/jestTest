const sum = require('./sum');
describe('Sum function:', ()=> {
    test('should return sum of two values', () => {
        expect(sum(4, 3)).toBe(7);
        expect(sum(4, 3)).toBeGreaterThan(5);
        expect(sum(4, 3)).toBeGreaterThanOrEqual(7);
    });
});


describe('Expect null entity: ', () => {
    test('null must be', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });
});

describe('Expect zero entity:',  ()=> {
    test('zero must be -', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

});

