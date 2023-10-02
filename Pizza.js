class Pizza extends Etel {
  constructor(nev, kaloriaSzam, ar = 1500) {
    if (!nev.endsWith("pizza")) {
      nev += " pizza";
    }
    super(nev, kaloriaSzam);
    this._ar = ar;
    this.feltetek = [];
  }

  get ar() {
    return this._ar;
  }

  set ar(value) {
    if (value >= 0) {
      this._ar = value;
    } else {
      this._ar = 1000;
    }
  }

  megromlik() {
    this.fogyaszthato = false;
    console.log("A pizza megromlott.");
  }

  feltetetFelvesz(feltet) {
    if (typeof feltet !== "object" || !feltet.nev || !feltet.kaloria) {
      console.log("HIBA! Nem egy feltét!");
      return;
    }

    if (typeof feltet.nev !== "string" || typeof feltet.kaloria !== "number") {
      console.log("HIBA! Nem megfelelő típus!");
      return;
    }

    if (this.feltetek.some((f) => f === feltet.nev)) {
      console.log("HIBA! Már van ilyen feltét!");
      return;
    }

    this.feltetek.push(feltet.nev);
    this._kaloriaSzam += feltet.kaloria;
    this._ar += 100;
    console.log("Feltét felvétel sikeres!");
  }

  info() {
    let feltetSorozat = this.feltetek.join(", ");
    if (this.feltetek.length === 0) {
      feltetSorozat = "";
    }

    return `${this.nev} (${this.kaloriaSzam} kaloria), fogyaszthato: ${
      this.fogyaszthato ? "igen" : "nem"
    }, ar: ${this.ar} forint, feltetek: ${feltetSorozat}`;
  }
}