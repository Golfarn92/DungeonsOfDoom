import "./style.css";
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = .join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

window.onload = function() {
  class readData {
    monstervalue: number;
    player: any;
    monsterList: any;
    listOfMonsters: any;

    playerName: HTMLInputElement;
    playerHealth: HTMLInputElement;
    playerStrength: HTMLInputElement;
    monsterName: HTMLInputElement;
    monsterStrength: HTMLInputElement;
    monsterHealth: HTMLInputElement;

    constructor() {
      this.monsterList = document.querySelectorAll("#monsters input");
      this.player = document.querySelector("#playerData");
      this.listOfMonsters = [];
      this.monstervalue = 0;
    }

    getMonsterList() {
      for (let monster of this.monsterList) {
        let oneMonster =
          monster.dataset.name +
          " - " +
          monster.dataset.health +
          " - " +
          monster.dataset.strength;

        this.listOfMonsters.push(monster.dataset.name);
        this.listOfMonsters.push(monster.dataset.health);
        this.listOfMonsters.push(monster.dataset.strength);
      }
      console.log(this.listOfMonsters);
    }

    getMonster() {}

    getPlayer() {
      let ygritte =
        this.player.dataset.name +
        " - " +
        this.player.dataset.health +
        " - " +
        this.player.dataset.strength;
      console.log(ygritte);
    }

    printout() {}

    render() {
      let playerName: HTMLInputElement = document.querySelector("#playerName");
      let playerStrength: HTMLInputElement = document.querySelector(
        "#playerStrength"
      );
      let playerHealth: HTMLInputElement = document.querySelector(
        "#playerHealth"
      );

      playerName.value = this.player.dataset.name;
      playerHealth.value = this.player.dataset.health;
      playerStrength.value = this.player.dataset.strength;

      let monsterName: HTMLInputElement = document.querySelector(
        "#monsterName"
      );
      let monsterStrength: HTMLInputElement = document.querySelector(
        "#monsterStrength"
      );
      let monsterHealth: HTMLInputElement = document.querySelector(
        "#monsterHealth"
      );

      monsterName.value = this.listOfMonsters[this.monstervalue];
      monsterHealth.value = this.listOfMonsters[this.monstervalue + 1];
      monsterStrength.value = this.listOfMonsters[this.monstervalue + 2];

      if (game.monstervalue > game.monsterList.length * 3 - 2) {
        //   monsterName.value = "You are the king";
      }
      if (game.player.dataset.health <= 0) {
        // playerName.value = "Looser!";
        // playerHealth.value = "Better luck next time";
        //  playerStrength.value = "Looser!";
      }
    }
  }

  var game = new readData();
  game.getPlayer();
  game.getMonsterList();

  game.render();

  var button: HTMLInputElement = document.querySelector("#fight");

  button.onclick = function(event: any) {
    console.log("You did an attack vs the monster");

    let todo = document.createElement("li");
    todo.innerHTML =
      "You just did an attack and did " +
      game.player.dataset.strength +
      " damage and the monster did an attack and you lost " +
      game.listOfMonsters[game.monstervalue + 2] +
      " health";
    let todoList = document.querySelector("#console");
    todoList.appendChild(todo);

    game.player.dataset.health =
      game.player.dataset.health - game.listOfMonsters[game.monstervalue + 2];

    game.listOfMonsters[game.monstervalue + 1] =
      game.listOfMonsters[game.monstervalue + 1] - game.player.dataset.strength;

    if (game.player.dataset.health <= 0) {
      alert("You died and lost the fight");
      todo.innerHTML = "You died and lost the fight";
      todoList.appendChild(todo);
    }

    if (game.listOfMonsters[game.monstervalue + 1] <= 0) {
      game.monstervalue = game.monstervalue + 3;
      console.log("new monster");
      todo.innerHTML = "You won the fight and a new monster arrived";
      todoList.appendChild(todo);

      if (game.monstervalue > game.monsterList.length * 3 - 2) {
        alert("You won the game!");
        todo.innerHTML = "You won the game";
        todoList.appendChild(todo);
      }
    }

    game.render();
  };
};

/* class Player {
    constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    }
    }
    
    class Monster {
    constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    }
    } */
