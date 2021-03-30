const syncFn = require ('./syncFn');


describe('Function return array',  ()  => {
    let arr;
    beforeEach( ()=>{
        arr = [false, 33, undefined, 0, '', true, null, 'test', " ", NaN, false, 0n, 1n]
    }
    )
    const testFn = new syncFn();
    test('should be defined', ()=> {
    expect(testFn).toBeDefined()
        expect(testFn).not.toBeUndefined()
    });

        
    test ("should remove falsy values from array", ()=> {
        const result = [33, true, "test", " ", 1n];
        expect(testFn.compact(arr)).toEqual(result)    
    });

    test ("should Not contain falsy values", ()=> {    
        expect(testFn.compact(arr)).not.toContain(false);
        expect(testFn.compact(arr)).not.toContain(null);

    });

    
});