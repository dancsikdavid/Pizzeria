class Etel {
    constructor(nev, kaloriaSzam) {
      this.nev = nev;
      this.kaloriaSzam = kaloriaSzam;
      this._fogyaszthato = true;
    }
  
    get kaloriaSzam() {
      return this._kaloriaSzam;
    }
  
    set kaloriaSzam(value) {
      if (value >= 0) {
        this._kaloriaSzam = value;
      } else {
        this._kaloriaSzam = 0;
      }
    }
  
    get fogyaszthato() {
      return this._fogyaszthato;
    }
  
    set fogyaszthato(value) {
      if (typeof value === 'boolean') {
        this._fogyaszthato = value;
      } else {
        this._fogyaszthato = false;
      }
    }
  
    info() {
      const fogyaszthatoSzoveg = this.fogyaszthato ? 'igen' : 'nem';
      return `${this.nev} (${this.kaloriaSzam} kaloria), fogyaszthato: ${fogyaszthatoSzoveg}!`;
    }
  }