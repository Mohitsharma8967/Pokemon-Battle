// Define Pokemon objects
const pokemon1 = {
    name: "mohit",
    health: 100,
    attack: 20
};

const pokemon2 = {
    name: "Sonu",
    health: 100,
    attack: 15
};

// Function to perform attack
function attack() {
    // Calculate damage
    const damage1 = Math.floor(Math.random() * pokemon1.attack) + 1;
    const damage2 = Math.floor(Math.random() * pokemon2.attack) + 1;

    // Apply damage
    pokemon2.health -= damage1;
    pokemon1.health -= damage2;

    // Update health display
    document.getElementById("health1").innerText = pokemon1.health;
    document.getElementById("health2").innerText = pokemon2.health;

    // Check for winner
    if (pokemon1.health <= 0) {
        alert(pokemon2.name + " wins!");
    } else if (pokemon2.health <= 0) {
        alert(pokemon1.name + " wins!");
    }
}
