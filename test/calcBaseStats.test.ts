import {describe, expect, it} from 'vitest';
import {calcBaseStats} from '../src';



describe('calcBaseStats', () => {
    it('should be defined', () => {
        expect(calcBaseStats).toBeDefined();
    });

    it ('zero is zero', () => {
        const result = calcBaseStats(0, 0, 0);

        expect(result).eq(0);
    })

    it ('Example 1: Highest known possible frigate', () => {
        const result = calcBaseStats(7+11+7+4, 1-6-4, 4);

        expect(result).eq(14);
    })

    it ('Example 2: Worst support EVER! ', () => {
        const result = calcBaseStats(1+3+1+2, 0, 2);

        expect(result).eq(-5);
    })

    it ('Example 3: Best rank 1 support frigate', () => {
        const result = calcBaseStats(2+3+4+3, 0, 0);

        expect(result).eq(12);
    })

    it ('only bonus', () => {
        const result = calcBaseStats(0, 10, 0);

        expect(result).eq(-10);
    })

    it ('only rank up', () => {
        const result = calcBaseStats(0, 0, 5);

        expect(result).eq(-30);
    })


});


