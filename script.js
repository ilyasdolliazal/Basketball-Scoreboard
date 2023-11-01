
// this is where the count will shown 
let countparagraph1 = document.getElementById("count-Team1")
let countparagraph2 = document.getElementById("count-Team2")





// TEAM 1
let countteam1 = 0

function add1(Team1) {
    countteam1 += 1
    countparagraph1.textContent = countteam1
}

function add2(Team1) {
    countteam1 += 2
    countparagraph1.textContent = countteam1
}

function add3(Team1) {
    countteam1 += 3
    countparagraph1.textContent = countteam1
}
/////////

let countteam2 = 0

function addp1(Team2) {
    countteam2 += 1
    countparagraph2.textContent = countteam2
}

function addp2(Team2) {
    countteam2 += 2
    countparagraph2.textContent = countteam2
}

function addp3(Team2) {
    countteam2 += 3
    countparagraph2.textContent = countteam2
}

/// Reset Score Button 

function resetScore() {
    countparagraph1.textContent = 0
    countteam1 = 0
    countparagraph2.textContent = 0
    countteam2 = 0
}