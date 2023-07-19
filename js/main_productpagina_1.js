let allGames = document.getElementsByClassName("game")
let filters = document.getElementsByClassName("filter");

let adventure = document.getElementById("checkbox-action-adventure")

window.scrollTo(0, 0);

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);


for (let i = 0; i < filters.length; i++) {
    filters[i].checked = false;
}

adventure.onchange = function () {
    if (adventure.checked === false) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'action-adventure') {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'action-adventure') {
                allGames[i].style.display = "none";
            }
        }

    }
}



let party = document.getElementById("checkbox-party")

party.onchange = function () {
    if (party.checked === false) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'party') {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'party') {
                allGames[i].style.display = "none";
            }
        }

    }
}


let consoles = document.getElementById("checkbox-consoles")

consoles.onchange = function () {
    if (consoles.checked === false) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'consoles') {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'consoles') {
                allGames[i].style.display = "none";
            }
        }

    }
}


let racing = document.getElementById("checkbox-racing")

racing.onchange = function () {
    if (racing.checked === false) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'Racing') {
                allGames[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === 'Racing') {
                allGames[i].style.display = "none";
            }
        }

    }
}

