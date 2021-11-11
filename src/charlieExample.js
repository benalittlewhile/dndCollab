var Stats = /** @class */ (function () {
    function Stats(lvl, str, dex, con, int, wis, cha) {
        if (lvl === void 0) { lvl = 1; }
        if (str === void 0) { str = 10; }
        if (dex === void 0) { dex = 10; }
        if (con === void 0) { con = 10; }
        if (int === void 0) { int = 10; }
        if (wis === void 0) { wis = 10; }
        if (cha === void 0) { cha = 10; }
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
    Stats.prototype.calcHP = function () {
        return 6 + this.con;
    };
    return Stats;
}());
var example = new Stats();
console.log(example.hp);
