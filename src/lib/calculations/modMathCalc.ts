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
