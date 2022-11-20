
let teams = ["Liverpool", "Man City", "Real Madrid", "PSG"];

teams.forEach(function(team) {
    let option = document.createElement("option");
    option.text = team;
    option.value = team;
    select.appendChild(option);

})