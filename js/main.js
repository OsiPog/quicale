

const div_calendar = document.querySelector("div.calendar");
const div_starts_at = document.querySelector(
                            "div.selection>div.selection-box#starts-at-box")
const div_ends_at = document.querySelector(
                            "div.selection>div.selection-box#ends-at-box")
const select_language = document.querySelector("#language-box>select");
const input_generate_button = document.querySelector("input.important-button");

// Adding available languages into the selectable
for(let language in lang) {
    const option = document.createElement("option");
    option.setAttribute("value", language);
    option.innerText = language;

    select_language.appendChild(option)
}

// Function to update strings on the site
select_language.addEventListener("change", () => {
    const subtitle = document.querySelector("h1>span");
    subtitle.innerText =getLangStr("subtitle");

    const h2s = document.querySelectorAll("div.selection>h2");
    h2s[0].innerText = getLangStr("starts_at");
    h2s[1].innerText = getLangStr("ends_at");

    input_generate_button.value = getLangStr("generate");

    // generateCalendar()
})

// These functions makes sure that the user won't be able to select a starts at
// month earlier than the ends at month and vice versa.
div_starts_at.addEventListener("change", () => {
    updateSelect(div_ends_at, div_starts_at, 1)
})

div_ends_at.addEventListener("change", () => {
    updateSelect(div_starts_at, div_ends_at, -1)
})

// Initialising dropdown selects with current month
for(let box of [div_starts_at, div_ends_at]) {
    const today = new Date();
    const year = today.getFullYear()
    const month = today.getMonth();

    // Month
    const default_month = box.children[0].children[0];
    default_month.value = month
    default_month.innerText = getLangStr("month")[month];

    // Year
    const default_year = box.children[1].children[0];
    default_year.value = year
    default_year.innerText = year;
}

updateSelect(div_ends_at, div_starts_at, 1)
updateSelect(div_starts_at, div_ends_at, -1)