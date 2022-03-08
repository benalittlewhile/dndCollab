export class Modifiers {
  strMod: number;
  dexMod: number;
  conMod: number;
  wisMod: number;
  intMod: number;
  chaMod: number;

  constructor() {
    this.strMod = 0;
    this.dexMod = 0;
    this.conMod = 0;
    this.wisMod = 0;
    this.intMod = 0;
    this.chaMod = 0;
  }
}

//requires the ability score to calculate the modifier
export function asModifier(abilityScore: number) {
  if (abilityScore < 1 || abilityScore > 30) {
    console.log("That's not a legal ability score in 5e.");
    return null;
  } else {
    //modifier incriments by 2 from 1 to 20 (30 for gods)
    let futureMod = Math.floor(abilityScore / 2) - 5;
    return futureMod;
  }
}

export function calculateProficiencyBonus(level: number) {
  //proficiency bonus incriments by 1 every 4 levels
  let futureProficiency = Math.floor((level - 1) / 4) + 2;
  return futureProficiency;
}

export function calculateHitPoints(
  level: number,
  hitDie: number,
  conMod: number
) {
  // at level 1, adding your constitution modifier to the highest possible total of your class's assigned hit die
  // beyond level 1, you add avg hit die plus con mod to total per level
  let futureHitPoints = 0;
  if (level === 1) {
    futureHitPoints = hitDie + conMod;
  } else {
    futureHitPoints =
      Math.floor(((level - 1) * hitDie) / 2) + hitDie + level * conMod;
  }
  return futureHitPoints;
}

export function calculatePassivePerception(
  wisMod: number,
  profBonus: number = 0
) {
  //10 + wisMod + proficiency bonus (if applicable) + any other bonuses
  let futurePassivePerception = 10 + wisMod + profBonus;
  return futurePassivePerception;
}

export function calculateArmorClass(
  dexMod: number,
  profBonus: number = 0,
  armorBonus: number = 0,
  shieldBonus: number = 0
) {
  //10 + dexMod + proficiency bonus (if applicable) + any other bonuses
  let futureArmorClass = 10 + dexMod + profBonus + armorBonus + shieldBonus;
  return futureArmorClass;
}

export function calculateInitiative(dexMod: number, profBonus: number = 0) {
  //dexMod + proficiency bonus (if applicable)
  let futureInitiative = dexMod + profBonus;
  return futureInitiative;
}
