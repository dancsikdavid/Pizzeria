class Vasarlo {
  constructor(nev, penz) {
    this.nev = nev;
    this.penz = penz;
    this.rendelesek = [];
  }

  pizzatRendel(pizza) {
    if (!(pizza instanceof Pizza)) {
      console.log("HIBA! Nem pizza!");
      return;
    }

    if (!pizza.fogyaszthato) {
      console.log("HIBA! Nem ehető pizza!");
      return;
    }

    if (this.penz < pizza.ar) {
      console.log("HIBA! Nincs elég pénz!");
      return;
    }

    this.penz -= pizza.ar;
    this.rendelesek.push(pizza.nev);
    console.log("Sikeres rendelés!");
  }

  pizzakatListaz() {
    if (this.rendelesek.length === 0) {
      return "Nincs rendelés!";
    }

    const rendelesDarabok = {};
    for (const pizzaNev of this.rendelesek) {
      if (!rendelesDarabok[pizzaNev]) {
        rendelesDarabok[pizzaNev] = 1;
      } else {
        rendelesDarabok[pizzaNev]++;
      }
    }

    const rendelesSzovegek = [];
    for (const [pizzaNev, darab] of Object.entries(rendelesDarabok)) {
      rendelesSzovegek.push(`${darab} darab ${pizzaNev}`);
    }

    return rendelesSzovegek.join(", ");
  }
}