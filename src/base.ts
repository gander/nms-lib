const expeditionsRankUps: [number, number][] = [
    [0, 0],
    [4, 1],
    [8, 2],
    [15, 3],
    [25, 4],
    [30, 5],
    [35, 6],
    [40, 7],
    [45, 8],
    [50, 9],
    [55, 10],
];

export const MAX_BONUS = 60;
export const MAX_EXPEDITIONS = 55;

export function sumStats(stats: (number | string)[] = []): number {
    return stats
        .map((v: number | string) => Number.parseInt(String(v)))
        .filter(v => Number.isInteger(v))
        .reduce((s, v) => s + v, 0);
}

export function calcBaseStats(mainStats: number, bonusStats: number, rank_ups: number): number {
    return mainStats - (Math.min(bonusStats, MAX_BONUS) + 6 * rank_ups);
}

export function calcRankUps(expeditions: number): number {
    expeditions = Math.min(Math.max(0, expeditions), MAX_EXPEDITIONS);
    let closestRank = 0;
    for (let [expCount, rankCount] of expeditionsRankUps) {
        if (expCount <= expeditions) {
            closestRank = rankCount;
        }
    }
    return closestRank;
}

export default {};
