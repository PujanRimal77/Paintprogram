// Javascript to implement painting done by Pujan Rimal

document.addEventListener("DOMContentLoaded", function() {
    // Getting the canvas element and context
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
  
    // A variable to indicate whether the user is presently engaged in painting
    let painting = false;
  
    // Function to start painting
    function startPosition(e) {
        painting = true;
        draw(e);
    }
  
    // Function to stop painting
    function endPosition() {
        painting = false;
        ctx.beginPath(); // Starting a new path
    }
  
    // A function designed to create graphical marks on the canvas
    function draw(e) {
        if (!painting) return; // If user is not painting, exit
  
        // Setting the line properties
        ctx.lineWidth = document.getElementById('slider').value; // Getting brush size
        ctx.lineCap = 'round'; // Setting line cap
  
        // Drawing line from previous point to current point
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke(); 
        ctx.beginPath(); 
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); // Moving to the new point
    }
  
    // Listeners set to detect and respond to mouse interactions
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', endPosition);
  
    // Listeners configured to react to clicks on color selection buttons
    document.getElementById('black').addEventListener('click', function() {
        ctx.strokeStyle = "#000000"; // Setting stroke color to black
        ctx.lineWidth = document.getElementById('slider').value; // Setting brush size
    });
  
    document.getElementById('pink').addEventListener('click', function() {
        ctx.strokeStyle = "#F50057"; // Setting stroke color to pink
        ctx.lineWidth = document.getElementById('slider').value; // Setting brush size
    });
  
    document.getElementById('blue').addEventListener('click', function() {
        ctx.strokeStyle = "#2979FF"; // Setting stroke color to blue
        ctx.lineWidth = document.getElementById('slider').value; // Setting brush size
    });
  
    document.getElementById('yellow').addEventListener('click', function() {
        ctx.strokeStyle = "#FFD600"; // Setting stroke color to yellow
        ctx.lineWidth = document.getElementById('slider').value; // Setting brush size
    });
  
    // Listener established to respond to clicks on the eraser button
    document.getElementById('erase').addEventListener('click', function() {
        ctx.strokeStyle = "#ffffff"; // Setting stroke color to white for erasing
        ctx.lineWidth = document.getElementById('slider').value; 
    });
  
    // Listener created to handle clicks on the button for creating a new canvas
    document.getElementById('new').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    });
  
    // Listener established to handle changes in the brush size slider
    document.getElementById('slider').addEventListener('input', function() {
        document.getElementById('brushSize').textContent = this.value; // Displaying current brush size
    });
});

