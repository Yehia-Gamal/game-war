class character {
  constructor(name, strength, health) {
    (this.name = name), (this.strength = strength), (this.health = health), (this.elements = new UIElements(this.name));
  }
}

class UIElements {
  constructor(name) {
    (this.attackBtn = document.querySelector(`#${name}-attack`)),
      (this.healthBtn = document.querySelector(`#${name}-health`));
    this.progress = document.querySelector(`.${name}-health-progress span`);
    this.adied = document.querySelector(`.${name}-health-progress`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.adiedImg = document.querySelector(`#${name}-adied`);
  }
}

character.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    if (opponent.health <= 0) {
      opponent.health = 0;
    }
    opponent.elements.progress.style.width = `${opponent.health}%`;
    console.log(opponent.health);
  } else {
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.alive.innerHTML = `${opponent.name} Is died *_*`;
    opponent.elements.adied.style.backgroundColor = '#f51e1e'
    opponent.elements.adiedImg.style.filter = 'grayscale(1)'
  }
};

character.prototype.makeHelath = function () {
  if (this.health < 100) {
    this.health += 10;
    if (this.health >= 100) {
      this.health = 100;
    }
    this.elements.progress.style.width = `${this.health}%`;
  }
  console.log(this.health);
};

character.prototype.status = function () {
  console.log(`Your Name is ${this.name}`);
  console.log(`Your Strength is ${this.strength}`);
  console.log(`Your Health is ${this.health}`);
};

let nartoo = new character("nartoo", 10, 100);
let sasakii = new character("sasakii", 7, 100);

nartoo.status();
sasakii.status();

nartoo.elements.attackBtn.addEventListener("click", function () {
  nartoo.attack(sasakii);
  sasakii.status();
});
nartoo.elements.healthBtn.addEventListener("click", function () {
  nartoo.makeHelath();
  nartoo.status();
});

sasakii.elements.attackBtn.addEventListener("click", function () {
  sasakii.attack(nartoo);
  nartoo.status();
});

sasakii.elements.healthBtn.addEventListener("click", function () {
  sasakii.makeHelath();
  sasakii.status();
});
