//Resolução 1
class Hero {
  constructor(name, age, category) {
    this.name = name;
    this.age = age;
    this.category = category;
  }

  attack() {
    const atqs = {
      sorcerer: "fireball",
      warrior: "sword",
      monk: "martial arts",
      ninja: "shuriken",
    };
    const atq = atqs[this.category] || " an undiscovered attack.";
    console.log(`The ${this.category} attacked using ${atq}`);
  }
}

const hero1 = new Hero("Merlin", 150, "sorcerer");
const hero2 = new Hero("Arthas", 35, "warrior");
const hero3 = new Hero("Lee", 28, "monk");
const hero4 = new Hero("Hanzo", 22, "ninja");

hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();

// Resolução 2

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    console.log("O herói atacou!");
  }
}

class Mago extends Heroi {
  atacar() {
    console.log("O mago atacou usando magia.");
  }
}

class Guerreiro extends Heroi {
  atacar() {
    console.log("O Guerreiro atacou usando espada.");
  }
}

class Monge extends Heroi {
  atacar() {
    console.log("O Monge atacou usando artes marciais.");
  }
}

class Ninja extends Heroi {
  atacar() {
    console.log("O Ninja  atacou usando shuriken.");
  }
}

const heroi1 = new Mago("Merlin", 150);
const heroi2 = new Guerreiro("Arthas", 35);
const heroi3 = new Monge("Lee", 28);
const heroi4 = new Ninja("Hanzo", 22);

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
