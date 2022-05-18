
const currentYear = 2022;
const locale = 'ja';

const weekdays = [...Array(7).keys()];
const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: 'long' });

const weekDaysNames = weekdays.map(weekDayIndex => {
    const date = new Date(2022, 10, weekDayIndex  +6 );
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

    const nextMonthIndex = monthKey + 1;
    const daysOfMonth = new Date(2022, nextMonthIndex, 0).getDate()

    console.log(daysOfMonth);
    return {
        monthName,
        daysOfMonth,
        startsOn: 0
    };
})

const html = calendar.map(({ daysOfMonth, monthName }) => {
    const days = [...Array(daysOfMonth).keys()];
    const renderedDays = days.map(day => `<li>${day + 1}</li>`).join('');

    const title = `<h1>${monthName} ${currentYear}</h1>`

    return `${title}<ol>${renderedWeekDays} ${renderedDays}</ol>`
}).join('');

document.querySelector('div').innerHTML = html

console.log(calendar);
