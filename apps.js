console.log("Name: " + "luis garcia".toUpperCase());
console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like turtles");
console.log("");

console.log("My Interests:"); 
console.log("* Fall TV (The best)"); 
console.log("* Locomotives");
console.log("* Observing awkward situations"); 
console.log("* Film soundtracks"); 
console.log("");

console.log("My Previous Experience:");
displayPosition("MST WELDING", "Supervisor");
displayPosition("Welder", "Travel", "WebDev")
console.log("");

console.log("My Skills:");
displaySkills("Soccer", "Volleyball", "Gaming", true);
displaySkills("Running", "Singing", "Welding", "Landscape", false);


function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
};

function displaySkills(skillName, isCool) {
    if (isCool) {
        console.log("BAM: " + skillName);
    } else {
        console.log(skillName);
    }
};



