const RankUpValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
type RankUps = typeof RankUpValues[number];

export const MAX_BONUS = 60;
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

export function calcRankUps(expeditions: number): RankUps {
    switch (true) {
        case expeditions < 4:
            return RankUpValues[0];
        case expeditions < 8:
            return RankUpValues[1];
        case expeditions < 15:
            return RankUpValues[2];
        case expeditions < 25:
            return RankUpValues[3];
    }

    expeditions = Math.min(expeditions, MAX_EXPEDITIONS)
    const rankUps = Math.floor(expeditions/5) - 1;

    if (rankUps in RankUpValues) {
        return rankUps as RankUps;
    }

    return RankUpValues[0];
}

export default {};
