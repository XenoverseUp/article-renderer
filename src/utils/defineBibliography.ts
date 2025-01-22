interface BibEntry {}

export const SortingStrategy = {
  YearAscending: "year-ascending",
  YearDescending: "year-descending",
  TitleAlphabetic: "title-alphabetic",
} as const;

type SortingStrategy = (typeof SortingStrategy)[keyof typeof SortingStrategy];

class Bibliography {
  entries: BibEntry[] = [];
  sortingStrategy: SortingStrategy = SortingStrategy.YearDescending;

  constructor(entries: BibEntry[], sortingStrategy: SortingStrategy) {
    this.entries = entries;
    this.sortingStrategy = sortingStrategy;
  }

  add(entry: BibEntry) {
    return this;
  }

  getIndex(name: string): Nullable<number> {
    return null;
  }
}

export default function defineBibliography(
  entries: BibEntry[],
  sortingStrategy: SortingStrategy = SortingStrategy.YearDescending,
): Bibliography {
  return new Bibliography(entries, sortingStrategy);
}
