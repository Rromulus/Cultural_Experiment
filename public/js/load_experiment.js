

// var background = "background-image: url('" + url + counter
//TODO: replace image e.g. $('canvas').attr('style', background)
var eventFire = false;
// Variables for referencing the canvas and 2dcanvas context
var canvas,ctx;

// Variables to keep track of the mouse position and left-button status
var mouseX,mouseY,mouseDown=0;

//number touches
var numberTouches = 1;

// Draws a dot at a specific position on the supplied canvas name
// Parameters are: A canvas context, the x position, the y position, the size of the dot
function drawDot(ctx,x,y,size) {
    // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
    r=255; g=0; b=0; a=100;

    // Select a fill style
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    // Draw a filled circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,40);  //change here the size of the dot
    //post Touch
    //sendTouch(true, event.screenX, event.screenY);
}

// Keep track of the mouse button being released
function sketchpad_mouseUp() {
    mouseDown=0;
}

// Keep track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) {
    // Update the mouse co-ordinates when moved
    getMousePos(e);

    // Draw a dot if the mouse button is currently being pressed
    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,12);
    }
}

// Get the current mouse position relative to the top-left of the canvas
function getMousePos(e) {
    if (!e)
        var e = event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

 }

 function touchHandler(event, xcoord, ycoord) {
    //console.log("trigger");
    // Get a reference to our coordinates div
    //var coords = document.getElementById("coords"); //uncomment for displaying coordinates
    // Write the coordinates of the touch to the div
    var xcoord = event.touches[0].pageX;
    var ycoord = event.touches[0].pageY;
    //coords.innerHTML = 'x: ' + xcoord + ', y: ' + ycoord; //uncomment for displaying coordinates

    var eventFire = true;
    sendTouch(eventFire, xcoord, ycoord);
}

function sendTouch(eventFire, xcoord, ycoord){
    if(eventFire==true){
        var participantID = localStorage.getItem("id");
        participantID = Number(participantID);
        //console.log(participantID)

        //time
        var timeStamp = performance.now(); 
        timeStamp = timeStamp/1000 //change millisecond into second
        timeStamp = timeStamp.toFixed(3); //till 3 numbers behind the comma

        //painting
        page = location.pathname; 
        //console.log(page);
        if (page == "/painting1") {
            var paintingNumber = 1;
            var width = 998;
            var height = 773;
        }
        else if (page == "/painting2"){
            var paintingNumber = 2;
            var width = 1165;
            var height = 798;
        }
        else if (page == "/painting3"){
            var paintingNumber = 3;
            var width = 1231;
            var height = 816;
        }
        else if (page == "/painting4"){
            var paintingNumber = 4;
            var width = 1221;
            var height = 806;
        }
        else if (page == "/painting5"){
            var paintingNumber = 5;
            var width = 1152;
            var height = 804;
        }
        else {
            var paintingNumber = 6;
            var width = 872;
            var height = 776;
        }
        
        //percentage calculation based on size painting: 
        xcoord = (xcoord * 100) / width; 
        xcoord = xcoord.toFixed(3); //till 3 numbers behind the comma
        ycoord = (ycoord * 100) / height; 
        ycoord = ycoord.toFixed(3); //till 3 numbers behind the comma

        var touch = {
            test: 1, //test = 1 means this is test data, 0 = real data
            participant: participantID,
            painting: paintingNumber,
            touch: numberTouches,
            time: timeStamp,
            x_coord: xcoord,
            y_coord: ycoord
        };
        //console.log(touch);
        
        
        $.ajax({type: 'POST',  
                data: JSON.stringify(touch),
                contentType: 'application/json',
                url: 'http://localhost:3000/touches',
                succes: function(touch) {
                    console.log('succes');
                }
        });
    eventFire = false;
    numberTouches = numberTouches + 1;
    }
}

// Set-up the canvas and add our event handlers after the page has loaded
function init(numberTouches) {
    // Get the specific canvas element from the HTML document
    canvas = document.getElementById('mycanvas');

    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        ctx = canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (ctx) {
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
		canvas.addEventListener("touchstart", touchHandler, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);
    }

    //play sound at the beginning
    new Audio('sound/beep-07.mp3').play()   
}
