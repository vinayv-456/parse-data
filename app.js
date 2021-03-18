// File: app.js
const COMMA_ENTRIES = [ // First name, City, Birth date
    'Mckayla, Atlanta, 5/29/1986',
    'Elliot, New York City, 4/3/1947',
]
const DOLLAR_ENTRIES = [ // City, Birth date, Last name, First name
    'LA $ 10-4-1974 $ Nolan $ Rhiannon',
    'NYC $ 12-1-1962 $ Bruen $ Rigoberto',
]

// WRITE YOUR FUNCTIONS / CLASSES HERE
const changeDateFormat = (unformattedDate) => {
    let dateFormat = new Date(unformattedDate);
    return `${dateFormat.getMonth()+1}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`
}

const commaParser = (entry) => {
    const parseEntry = entry.split(',');
    return `${parseEntry[0].trim()} ${parseEntry[1].trim()} ${parseEntry[2].trim()}`;
}

const dollarParser = (entry) => {
    const parseEntry = entry.split('$');
    const dateFormat = changeDateFormat(parseEntry[1])
    return `${parseEntry[3].trim()} ${parseEntry[0].trim()} ${dateFormat}`;
}

class App {
    static run({ comma = [], dollar = [] }) {
        comma.forEach(entry => {
            console.log(commaParser(entry));
        });
        dollar.forEach(entry => {
            console.log(dollarParser(entry));
        })
    }
}

App.run({ comma: COMMA_ENTRIES, dollar: DOLLAR_ENTRIES })

module.exports = {dollarParser, commaParser, changeDateFormat};

  // Expected standard output:
  //   Mckayla Atlanta 5/29/1986
  //   Rhiannon Los Angeles 10/4/1974
  //   Elliot New York City 4/3/1947
  //   Rigoberto New York City 12/1/1962

  // WRITE YOUR SPECS HERE