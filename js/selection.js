const updateSelect = (select_box, opposite_box, direction) => {
    // Updating years
    const year_amount = 50;

    const initial_opposite_year = Number(opposite_box.children[1].value);
    const initial_self_year = Number(select_box.children[1].value);

    // clear all options
    select_box.children[1].innerHTML = "";

    for(let i=0;i<=year_amount;i++) {
        const year = initial_opposite_year+i*direction;
        // Creating option element
        const option = document.createElement("option")
        option.setAttribute("value", year)
        option.innerText = year

        if (year === initial_self_year) {
            option.setAttribute("selected", "");
        }

        // If there is no element yet append if there is add it before the
        // others.
        if ((select_box.children[1].childElementCount === 0) || 
            (direction === 1)) {
            select_box.children[1].appendChild(option)
        }
        else {
            select_box.children[1].firstChild.before(option)
        }
    }

    // updating months
    updateSelectMonth(select_box, opposite_box, direction);
    updateSelectMonth(opposite_box, select_box, -direction);
}

const updateSelectMonth = (select_box, opposite_box, direction) => {
    const initial_opposite_year = Number(opposite_box.children[1].value);
    const initial_self_year = Number(select_box.children[1].value);

    // updating months
    const initial_opposite_month = Number(opposite_box.children[0].value);
    const initial_self_month = Number(select_box.children[0].value);

    // The months only have to be adjusted if the years are the same
    let until_month = undefined;
    if (initial_self_year === initial_opposite_year) {
        until_month = initial_opposite_month;
    }

    // clear all months
    select_box.children[0].innerHTML = "";

    for(let i=0;i<12;i++) {
        let month = i;
        if (direction === 1) month = 11-i

        const option = document.createElement("option");
        option.setAttribute("value", month);
        option.innerText = getLangStr("month")[month];

        if (month === initial_self_month) {
            option.setAttribute("selected", "");
        }
        
        if ((select_box.children[0].childElementCount === 0) || 
            (direction === -1)) {
            select_box.children[0].appendChild(option)
        }
        else {
            select_box.children[0].firstChild.before(option)
        }

        // Stop adding months after limit is readched
        if(until_month === month) break
    }
}
