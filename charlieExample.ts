class Stats {
    // Language: typescript
    // Path: typescript\main.ts
    // Method
    lvl: number; 
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    hp: number;

    constructor(lvl=1,str=10,dex=10,con=10,int=10,wis=10,cha=10) {
        this.lvl = lvl;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.hp = this.calcHP();
    }

    // Method
    calcHP() {
      return 6 + this.con; 
    } 
  } 
const example = new Stats();
console.log(example.hp);