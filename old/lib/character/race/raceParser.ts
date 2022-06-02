import { Race } from "./race.types";
import readRaces from "content/races.json";

export default function importRaces(): Race[] {
  let raceList: Race[] = [];

  readRaces.map((readRace) => {
    raceList.push(readRace as Race);
  });

  return raceList;
}
