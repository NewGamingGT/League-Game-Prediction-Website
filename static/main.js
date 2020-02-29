const NoneOfTheTeams = document.getElementsByClassName("0");

document.addEventListener("click", event => {
    if (event.target.type == "radio") {
        try {
            if (event.target.checked && event.target.className == "0") {
                    document.getElementsByName("blue_team_" + event.target.name.slice(6) + "_kills")[0].value = 0;
                    document.getElementsByName("red_team_" + event.target.name.slice(6) + "_kills")[0].value = 0;
                    document.getElementsByName("blue_team_" + event.target.name.slice(6) + "_kills")[0].readOnly = true;
                    document.getElementsByName("red_team_" + event.target.name.slice(6) + "_kills")[0].readOnly = true;
                    document.getElementsByName("blue_team_" + event.target.name.slice(6) + "_kills")[0].min = 0;
                    document.getElementsByName("red_team_" + event.target.name.slice(6) + "_kills")[0].min = 0;
            } else {
                document.getElementsByName("blue_team_" + event.target.name.slice(6) + "_kills")[0].readOnly = false;
                document.getElementsByName("red_team_" + event.target.name.slice(6) + "_kills")[0].readOnly = false;

                if (event.target.value == 1) {
                    document.getElementsByName("blue_team_" + event.target.name.slice(6) + "_kills")[0].min = 1;
                } else if (event.target.value == 2) {
                    document.getElementsByName("red_team_" + event.target.name.slice(6) + "_kills")[0].min = 1;
                }
            }
        } catch(error) {}
    }
});