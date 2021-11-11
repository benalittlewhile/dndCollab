import { CharacterTypes } from "./character.types";

export class Character implements CharacterTypes {
  characterName: string;
  playerName: string;
  characterClass: string;
  race: string;
  alignment: string;
  age: number;
  exp: number;
  lvl: number;
  hp: number;
  armorClass: number;
  initiative: number;
  speed: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  passivePerception: number;
  proficiencies: string[];
  skills: string[];
  feats: string[];
  equipment: string[];
  inventory: string[];
  spells: string[];
  languages: string[];
  personalityTraits: string[];
  ideals: string[];
  bonds: string[];
  flaws: string[];
  features: string[]
  attacks: string[];
  spellsKnown: string[];

  constructor(
    characterName: string = "characterName",
    playerName: string = "playerName",
    characterClass: string = "characterClass",
    race: string = "race",
    alignment: string = "neutral",
    age: number = -1,
    exp: number = -1,
    lvl: number = -1,
    hp: number = -1,
    armorClass: number = -1,
    initiative: number = -1,
    speed: number = -1,
    str: number = -1,
    dex: number = -1,
    con: number = -1,
    int: number = -1,
    wis: number = -1,
    cha: number = -1,
    passivePerception: number = -1,
    proficiencies: string[] = [],
    skills: string[] = [],
    feats: string[] = [],
    equipment: string[] = [],
    inventory: string[] = [],
    spells: string[] = [],
    languages: string[] = [],
    personalityTraits: string[] = [],
    ideals: string[] = [],
    bonds: string[] = [],
    flaws: string[] = [],
    features: string[] = [],
    attacks: string[] = [],
    spellsKnown: string[] = []
  ) {
    this.characterName = characterName;
    this.playerName = playerName;
    this.characterClass = characterClass;
    this.race = race;
    this.alignment = alignment;
    this.age = age;
    this.exp = exp;
    this.lvl = lvl;
    this.hp = hp;
    this.armorClass = armorClass;
    this.initiative = initiative;
    this.speed = speed;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.passivePerception = passivePerception;
    this.proficiencies = proficiencies;
    this.skills = skills;
    this.feats = feats;
    this.equipment = equipment;
    this.inventory = inventory;
    this.spells = spells;
    this.languages = languages;
    this.personalityTraits = personalityTraits;
    this.ideals = ideals;
    this.bonds = bonds;
    this.flaws = flaws;
    this.features = features;
    this.attacks = attacks;
    this.spellsKnown = spellsKnown;
  }

  public getCharacterName(): string {
    return this.characterName;
  }

  public setCharacterName(characterName: string): void {
    this.characterName = characterName;
  }

  public getPlayerName(): string {
    return this.playerName;
  }

  public setPlayerName(playerName: string): void {
    this.playerName = playerName;
  }

  public getCharacterClass(): string {
    return this.characterClass;
  }

  public setCharacterClass(characterClass: string): void {
    this.characterClass = characterClass;
  }

  public getRace(): string {
    return this.race;
  }

}
