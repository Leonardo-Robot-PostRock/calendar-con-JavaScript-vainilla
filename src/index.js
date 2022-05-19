
const currentYear = 2022;
const locale = 'es-AR';

const weekdays = [...Array(7).keys()];
const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: 'short' });

const el = document.querySelector('div');

document.getElementById('up').addEventListener('click', () => {
    el.scrollTo({ top: el.scrollTop - window.innerHeight, behavior: 'smooth' });
})

document.getElementById('down').addEventListener('click', () => {
    el.scrollTo({ top: el.scrollTop + window.innerHeight, behavior: 'smooth' });
})

const weekDaysNames = weekdays.map(weekDayIndex => {
    const date = new Date(2022, 10, weekDayIndex);
    const weekDayName = intlWeekDay.format(date);
    console.log(weekDayName);
    return weekDayName;
})

const renderedWeekDays = weekDaysNames.map(weekDayName =>
    `<li class='day-name'>${weekDayName}</li>`
).join('');

const months = [...Array(12).keys()];
const intl = new Intl.DateTimeFormat(locale, { month: "long" });

const calendar = months.map(monthKey => {
    const monthName = intl.format(new Date(currentYear, monthKey));
    console.log(monthName);

    //reveer y explicar
    const nextMonthIndex = monthKey + 1;
    const daysOfMonth = new Date(2022, nextMonthIndex, 0).getDate()

    const startsOn = new Date(currentYear, monthKey, 1).getDay();


    return {
        monthName,
        daysOfMonth,
        startsOn
    };
})

console.log(calendar);

const html = calendar.map(({ daysOfMonth, monthName, startsOn }) => {
    const days = [...Array(daysOfMonth).keys()];

    const firstDayAtributes = `class='first-day' style='--first-day-start: ${startsOn}'`;

    const renderedDays = days.map((day, index) => `<li ${index === 0 ? firstDayAtributes : ''}>${day + 1}</li>`).join('');

    const title = `<h1>${monthName} ${currentYear}</h1>`

    return `<div class='month'>${title}<ol>${renderedWeekDays} ${renderedDays}</ol></div>`
}).join('');

el.innerHTML = html;