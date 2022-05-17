
const currentYear = 2022;
const locale = 'es';

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
    return `<h1>${monthName} ${currentYear}</h1>
    <ol>${renderedDays}</ol>`
}).join('');

document.querySelector('div').innerHTML = html

console.log(calendar);
