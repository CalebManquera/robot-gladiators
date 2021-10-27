var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(enemyNames.length);


//fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // comfirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money rom playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }  
  }
    
  // remove enemy's health by subtracting the amount set in the playerAttack variable
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        // award player moeny for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;  
    } else {
        window.alert(enemyName + " still has " + "health left.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack variable
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
    
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    // if no (false), ask question again by running fight() again
    window.alert(playerName + " has chosen to skip the fight!");
    } else {
    window.alert("You need to choose a valid option. Try again!");
    }
    };

for (var i = 0; i < enemyNames.length; i++) {
    // check player's health
    if (playerHealth > 0) {

        window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ) );
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;
    
    fight(pickedEnemyName);
    }    
    else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;    
    }
}