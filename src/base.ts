export const MAX_BONUS = 60;
export type RankUps = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export const MAX_EXPEDITIONS = 55;

export function sumStats(stats: (number | string)[] = []): number {
    return stats
        .map((v: number | string) => Number.parseInt(String(v)))
        .filter(v => Number.isInteger(v))
        .reduce((s, v) => s + v, 0);
}


export function calcBaseStats(mainStats: number, bonusStats: number, rank_ups: RankUps): number {
    return mainStats - (Math.min(bonusStats, MAX_BONUS) + 6 * rank_ups);
}

export default {};
