export interface ICombinationsValue {
  value: number;
}

export class CombinatorialAnalysis {
  public byValue<T extends ICombinationsValue>(list: T[], value: number, resolveIfDirectMatch = false): T[][] {
    if (resolveIfDirectMatch) {
      const directMatches = list.filter((el: T): boolean => +el.value === +value);

      if (directMatches.length) {
        return directMatches.map((el: T): T[] => [el]);
      }
    }

    const combinations = this.findCombination([], list, value);

    return combinations.filter((el: T[]): boolean => el.length > 0);
  }

  private findCombination<T extends ICombinationsValue>(current: T[], remaining: T[], remainingValue: number): T[][] {
    if (remainingValue === 0) {
      return [current];
    }

    const innerRemaining = remaining.filter((el: T): boolean => el.value <= remainingValue);
    if (remainingValue < 0 || innerRemaining.length === 0) {
      return [];
    }

    const sumOfRemaining = innerRemaining.reduce((total: number, el: T): number => +(total + (+el.value)).toFixed(2), 0);
    if (sumOfRemaining < remainingValue) {
      return [];
    }

    const item = innerRemaining[0];
    const itemValue = item.value;

    const includeItem = this.findCombination(
      [...current, item],
      innerRemaining.slice(1),
      +(remainingValue - itemValue).toFixed(2),
    );

    const excludeItem = this.findCombination(
      current,
      innerRemaining.slice(1),
      remainingValue,
    );

    return [...includeItem, ...excludeItem];
  }
}
