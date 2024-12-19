import {describe, expect, it} from 'vitest';
import {calcBaseStats, sumStats} from './base';

describe('sumStats', () => {
    it('should be defined', () => {
        expect(sumStats).toBeDefined();
    });

    it('should sum integer array, positive', () => {
        const result = sumStats([-1, 2, 0, 5, 0]);

        expect(result).eq(6);
    });

    it('should sum integer array, negative', () => {
        const result = sumStats([1, -2, 0, -5, 0]);

        expect(result).eq(-6);
    });

    it('should sum empty array', () => {
        const result = sumStats([]);

        expect(result).eq(0);
    });
});

describe('calcBaseStats', () => {
    it('should be defined', () => {
        expect(calcBaseStats).toBeDefined();
    });

    it('should accept number[], number[], number', () => {
        const result = calcBaseStats([0], [0], 0);

        expect(result).eq(0);
    });

    it('should accept [], [], number', () => {
        const result = calcBaseStats([], [], 0);

        expect(result).eq(0);
    });

    it('should accept number, number, number', () => {
        const result = calcBaseStats(0, 0, 0);

        expect(result).eq(0);
    });

    it('should accept number[], number, number', () => {
        const result = calcBaseStats([0], 0, 0);

        expect(result).eq(0);
    });

    it('should accept [], number, number', () => {
        const result = calcBaseStats([], 0, 0);

        expect(result).eq(0);
    });

    it('should accept number, number[], number', () => {
        const result = calcBaseStats(0, [0], 0);

        expect(result).eq(0);
    });

    it('should accept number, [], number', () => {
        const result = calcBaseStats(0, [], 0);

        expect(result).eq(0);
    });


    it('should accept main stats as array', () => {
        const result = calcBaseStats([1, -2, 3], 0, 0);

        expect(result).eq(2);
    });

    it('should accept main stats as integer', () => {
        const result = calcBaseStats(123, 0, 0);

        expect(result).eq(123);
    });

    it('should accept bonus stats as array', () => {
        const result = calcBaseStats(0, [-3, 2, -1], 0);

        expect(result).eq(2);
    });

    it('should accept bonus stats as integer', () => {
        const result = calcBaseStats(0, 321, 0);

        expect(result).eq(-321);
    });

    it('should accept ranks', () => {
        const result = calcBaseStats(0, 0, 6);

        expect(result).eq(-36);
    });
});
