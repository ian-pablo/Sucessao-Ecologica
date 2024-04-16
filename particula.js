// Gets the Canvas of the particles
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Sets the size of the Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creates the array to store the particles
const particles = [];

// Function to create new particles
function createParticle(x, y) {

    const particle = {

        //Particles position
        x,
        y,

        // Particle velocity
        velocity: {
            x: (Math.random() - 0.5) * 2, // Horizontal velocity
            y: (Math.random() - 0.5) * 2 // Vertical velocity
        },

        // Particle size
        size: 120,

    };

    particles.push(particle);

}

// Function to update and draw the particles
function updateParticles() {

    // Command to erase the last frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // carrega a imagem
    const img = new Image();
    img.src = "folhaPart.png";

    // Draw and updates every particle in the canvas
    for (const particle of particles) {

        // Checks if the particle have go to out of the screen bounds
        if (particle.x < -particle.size) {
            particle.x = canvas.width+particle.size;
        }
        if (particle.y < -particle.size) {
            particle.y = canvas.height+particle.size;
        }
        if (particle.x > canvas.width+particle.size) {
            particle.x = -particle.size;
        }
        if (particle.y > canvas.height+particle.size) {
            particle.y = -particle.size;
        }


        // Updates the position of the particle
        particle.x += particle.velocity.x;// * 0.1;
        particle.y += particle.velocity.y;// * 0.1;

        // Changes the velocity
        particle.velocity.x += (Math.random() -0.5);
        particle.velocity.y += ((Math.random() -0.1) * 0.6);
        particle.velocity.x *= 0.95;
        particle.velocity.y *= 0.96;
        

        // Desenha uma imagem
        ctx.drawImage(img, particle.x, particle.y, 94, 60);
    }

    // Request other animation frame for this function, so it will repeat forever
    requestAnimationFrame(updateParticles);

}

// Create some initial particles
for (let i = 0; i < 20; i++) {

    // Creates an particle in an random location in the screen
    createParticle(Math.random() * canvas.width, Math.random() * canvas.height);

}

// Starts the animation
updateParticles();
