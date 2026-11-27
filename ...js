var student = {
    name: "Temi Adaramola",
    age: 5,
    yeargroup: 7,
    hobby: "Coding and sport",
    favSport: "Tennis and Football"
};
var colors = ["orange" , "black", "teal"];
document.getElementById("profile").innerHTML = "Name: " + student.name + " | Favourite sport: " + student["favSport"];
document.getElementById("hobby").innerHTML = "Pet: " + student.pet;
document.getElementById("favcolor").innerHTML = "My favourite colour is " + colors[3];
document.getElementById("before").innerHTML = "Before pop: " + colors.join(" * ") + " (" + colors.length + " colours)";
colors.pop();
document.getElementById("after").innerHTML = "After pop: " + colors.join(" * ") + " (" + colors.length + " colours)";