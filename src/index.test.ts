import {describe, expect, it} from 'vitest';
import {main} from '.';

describe('main', () => {
    it('should be defined', () => {
        expect(main).toBeDefined();
    });

    it('should accept no arguments', () => {
        const result = main();

        expect(result).toBe('Hello World');
    });

    it('should accept null argument', () => {
        const result = main();

        expect(result).toBe('Hello World');
    });

    it('should accept string argument', () => {
        const result = main('You');

        expect(result).toBe('Hello You');
    });
});
