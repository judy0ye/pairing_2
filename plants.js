var gets_sunshine = true;
var ounces_of_water = 5;
if (ounces_of_water >= 10 && gets_sunshine) {
    console.log("Your plant will thrive")
} else if(ounces_of_water >= 10 && !gets_sunshine) {
    console.log("Your plant needs sunshine")
} else if(gets_sunshine) {
    console.log("Your plant needs water")
} else {
    console.log("Your plant has died")
}