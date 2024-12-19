export function sumStats(stats: number[]): number {
    return stats.reduce((sum, stat) => sum + stat, 0);
}


export function calcBaseStats(mainStats: number | number[], bonusStats: number | number[], ranks: number) {
    mainStats = Array.isArray(mainStats) ? sumStats(mainStats) : mainStats;
    bonusStats = Array.isArray(bonusStats) ? sumStats(bonusStats) : bonusStats;
    return mainStats - (bonusStats + ranks * 6);
}

export default {};
