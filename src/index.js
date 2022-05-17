
const currentYear = 2022;
const locale = 'es';

const months = [...Array(12).keys()];
const intl = new Intl.DateTimeFormat(locale, { month: "long" });

const calendar = months.map(monthKey => {
    const monthName = intl.format(new Date(currentYear, monthKey));
    console.log(monthName);
    return { monthName };
})

const html = calendar.map(({ monthName }) => {
    return `<h1>${monthName} ${currentYear}</h1>`
}).join('');

document.querySelector('div').innerHTML = html

console.log(calendar);
