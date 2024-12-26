import {describe, expect, it, test} from 'vitest';
import {calcRankUps} from '../src';

describe('calcRankUps', () => {
    it('should be defined', () => {
        expect(calcRankUps).toBeDefined();
    });

    test.each([
            {"expeditions": 0, "rankUp": false, "total": 0},
            {"expeditions": 1, "rankUp": false, "total": 0},
            {"expeditions": 2, "rankUp": false, "total": 0},
            {"expeditions": 3, "rankUp": false, "total": 0},
            {"expeditions": 4, "rankUp": true, "total": 1},
            {"expeditions": 5, "rankUp": false, "total": 1},
            {"expeditions": 6, "rankUp": false, "total": 1},
            {"expeditions": 7, "rankUp": false, "total": 1},
            {"expeditions": 8, "rankUp": true, "total": 2},
            {"expeditions": 9, "rankUp": false, "total": 2},
            {"expeditions": 10, "rankUp": false, "total": 2},
            {"expeditions": 11, "rankUp": false, "total": 2},
            {"expeditions": 12, "rankUp": false, "total": 2},
            {"expeditions": 13, "rankUp": false, "total": 2},
            {"expeditions": 14, "rankUp": false, "total": 2},
            {"expeditions": 15, "rankUp": true, "total": 3},
            {"expeditions": 16, "rankUp": false, "total": 3},
            {"expeditions": 17, "rankUp": false, "total": 3},
            {"expeditions": 18, "rankUp": false, "total": 3},
            {"expeditions": 19, "rankUp": false, "total": 3},
            {"expeditions": 20, "rankUp": false, "total": 3},
            {"expeditions": 21, "rankUp": false, "total": 3},
            {"expeditions": 22, "rankUp": false, "total": 3},
            {"expeditions": 23, "rankUp": false, "total": 3},
            {"expeditions": 24, "rankUp": false, "total": 3},
            {"expeditions": 25, "rankUp": true, "total": 4},
            {"expeditions": 26, "rankUp": false, "total": 4},
            {"expeditions": 27, "rankUp": false, "total": 4},
            {"expeditions": 28, "rankUp": false, "total": 4},
            {"expeditions": 29, "rankUp": false, "total": 4},
            {"expeditions": 30, "rankUp": true, "total": 5},
            {"expeditions": 31, "rankUp": false, "total": 5},
            {"expeditions": 32, "rankUp": false, "total": 5},
            {"expeditions": 33, "rankUp": false, "total": 5},
            {"expeditions": 34, "rankUp": false, "total": 5},
            {"expeditions": 35, "rankUp": true, "total": 6},
            {"expeditions": 36, "rankUp": false, "total": 6},
            {"expeditions": 37, "rankUp": false, "total": 6},
            {"expeditions": 38, "rankUp": false, "total": 6},
            {"expeditions": 39, "rankUp": false, "total": 6},
            {"expeditions": 40, "rankUp": true, "total": 7},
            {"expeditions": 41, "rankUp": false, "total": 7},
            {"expeditions": 42, "rankUp": false, "total": 7},
            {"expeditions": 43, "rankUp": false, "total": 7},
            {"expeditions": 44, "rankUp": false, "total": 7},
            {"expeditions": 45, "rankUp": true, "total": 8},
            {"expeditions": 46, "rankUp": false, "total": 8},
            {"expeditions": 47, "rankUp": false, "total": 8},
            {"expeditions": 48, "rankUp": false, "total": 8},
            {"expeditions": 49, "rankUp": false, "total": 8},
            {"expeditions": 50, "rankUp": true, "total": 9},
            {"expeditions": 51, "rankUp": false, "total": 9},
            {"expeditions": 52, "rankUp": false, "total": 9},
            {"expeditions": 53, "rankUp": false, "total": 9},
            {"expeditions": 54, "rankUp": false, "total": 9},
            {"expeditions": 55, "rankUp": true, "total": 10},
            {"expeditions": 56, "rankUp": false, "total": 10},
            {"expeditions": 57, "rankUp": false, "total": 10},
            {"expeditions": 58, "rankUp": false, "total": 10},
            {"expeditions": 59, "rankUp": false, "total": 10},
            {"expeditions": 60, "rankUp": false, "total": 10}
        ])('calc rankUps for $expeditions expeditions', ({expeditions, total}) => {
            expect(calcRankUps(expeditions)).toBe(total)
    })
});


