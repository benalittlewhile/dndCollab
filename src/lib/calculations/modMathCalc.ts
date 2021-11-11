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
  let futureMod = -5;
  abilityScore = Math.floor(abilityScore);
  if (abilityScore < 1 || abilityScore > 30) {
    console.log("That's not a legal ability score in 5e.");
  } else {
    //modifier incriments by 2 from 1 to 20 (30 for gods)
    for (let i = 1; i < abilityScore; i = i + 2) {
      futureMod += 1;
    }
    console.log("Here's our ability modifier: "+ futureMod);
  }
}
