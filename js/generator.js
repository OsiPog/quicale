const generateCalendar = () => {
    const start_year = Number(div_starts_at.children[1].value);
    const start_month = Number(div_starts_at.children[0].value);

    const end_year = Number(div_ends_at.children[1].value);
    const end_month = Number(div_ends_at.children[0].value);

    // clear previous month entries in the calendar div
    div_calendar.innerHTML = "";

    // Going through every month in the selected time span
    for(let year=start_year;year<=end_year;year++) {
        for(let month=-1;month<12;month++) {
            // If its in the first year, it has to be started at the month
            // specified. Not at 0
            if ((year === start_year) && (month === -1)) {
                month = start_month;
            }
            // The -1 is needed to truly identify the start of the loop 
            // (0 could also just be the start month)
            if (month === -1) {
                continue;
            }

            // heading
            const div_month = document.createElement("div");
            div_month.className = "month";
            div_calendar.append(div_month)
            
            const h3 = document.createElement("h3");
            h3.innerText = `${getLangStr("month")[month]} ${year}`;
            div_month.appendChild(h3)

            //generating the table
            const table = document.createElement("table");
            table.className = "weeks";
            div_month.appendChild(table);

            // Getting the amount the first day of the month is offset in the
            // first week in the month.
            let day_of_month = 2-(new Date(year, month, 1).getDay());
            const last_day = new Date(year, month + 1, 0).getDate()

            // Row by row
            for(let r=0;r<6;r++) {
                const tr = document.createElement("tr");
                for(let i=0;i<7;i++) {
                    // That would be the table headings
                    if(r === 0) {
                        const th = document.createElement("th");
                        th.innerText = getLangStr("day")[i];
                        tr.appendChild(th)
                        continue
                    }

                    // Normal day
                    const td = document.createElement("td");
                    if((day_of_month > 0) && (day_of_month <= last_day)) { 
                        td.innerText = day_of_month;
                    }
                    tr.appendChild(td)

                    day_of_month++;
                }
                // Adding the row to the table
                table.appendChild(tr)
            }
            

            if ((month === end_month) && (year === end_year))
                break;
        }
    }
}