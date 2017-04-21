// Do your work in this file.

// 1. Create a `div` element with a class name of "**view**" and append it to the document `body`.
var view = document.createElement("div");
view.className = "view";    
document.body.appendChild(view);

// 1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.
var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);

// 1. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.
var sun = document.createElement("div");
sun.className = "sun";    
view.appendChild(sun);

// 1. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", 
// and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.
var i = 0;
while (i < 5){
    var ray = document.createElement("div");
    ray.className = "ray-" + (i + 1);    
    sun.appendChild(ray);
    i++;     
}

// 1. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.
var mountain = document.createElement("div");
mountain.className = "mountain";    
view.appendChild(mountain);

// 1. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.
var mountainTop = document.createElement("div");
mountainTop.className = "mountain-top";    
mountain.appendChild(mountainTop);

// 1. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", 
// and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.
var i = 0;
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = "mountain-cap-" + (i + 1);    
    mountainTop.appendChild(mountainCap);
    i++;
} while (i < 3);

