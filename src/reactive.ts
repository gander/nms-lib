import {calcBaseStats} from '../src';
import {computed, ComputedRef, Ref} from '@vue/reactivity';

export function useCalcBaseStats(mainStats: Ref<number>, bonusStats: Ref<number>, rankUps: Ref<number>): ComputedRef<number> {
    return computed(() => calcBaseStats(mainStats.value, bonusStats.value, rankUps.value));
}


export default {};