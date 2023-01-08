img = "";

function preload()
{
    img= loadImage('bedroom.jfif');
}

function setup() 
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

