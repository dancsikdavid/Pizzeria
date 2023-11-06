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

const registrationForm = document.getElementById("registration-form");
const orderForm = document.getElementById("order-form");
const customerInfo = document.getElementById("customer-info");
const customerName = document.getElementById("customer-name");
const customerMoney = document.getElementById("customer-money");
const orderList = document.getElementById("order-list");

let customer;

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const money = parseFloat(document.getElementById("money").value);

    customer = new Vasarlo(name, money);
    customerName.textContent = "Név: " + customer.nev;
    customerMoney.textContent = "Pénz: " + customer.penz + " forint";
    
    registrationForm.style.display = "none";
    orderForm.style.display = "block";
});

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pizzaType = document.getElementById("pizza-type").value;
    const pizza = new Pizza(pizzaType);

    customer.pizzatRendel(pizza);
    orderList.innerHTML += "<li>" + pizza.nev + "</li>";

    customerMoney.textContent = "Pénz: " + customer.penz + " forint";
});

