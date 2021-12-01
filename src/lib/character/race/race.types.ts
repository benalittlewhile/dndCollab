export interface Race {
  name: string;
  size: string;
  baseMoveSpeed: number;
  languages: {
    racial?: string[];
    elective?: number;
  };
  abilityMods: {
    str: number;
    dex: number;
    int: number;
    con: number;
    wis: number;
    cha: number;
  };
}
