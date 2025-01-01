import {calcBaseStats, calcRankUps, isGlitched, sumStats, type SumStatsArgument} from './functions';
import {computed, type ComputedRef, type Ref} from '@vue/reactivity';

export function useCalcBaseStats(mainStats: Ref<number>, bonusStats: Ref<number>, rankUps: Ref<number>): ComputedRef<number> {
    return computed(() => calcBaseStats(mainStats.value, bonusStats.value, rankUps.value));
}

export function useCalcRankUps(expeditions: Ref<number>): ComputedRef<number> {
    return computed(() => calcRankUps(expeditions.value));
}

export function useIsGlitched(baseStats: Ref<number>, expeditions: Ref<number>): ComputedRef<boolean> {
    return computed(() => isGlitched(baseStats.value, expeditions.value));
}

export function useSumStats(stats: Ref<SumStatsArgument[]>): ComputedRef<number> {
    return computed(() => sumStats(stats.value));
}

