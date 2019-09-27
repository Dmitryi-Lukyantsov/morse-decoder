const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = [];
    let morA = [];
    let messege = '';
    
    expr.split().forEach((item) => {
        for (let i = 0; i < item.length; i += 10 ) {
            res.push(item.slice(i, i + 10))
        }
    });

    res.forEach(item => {
        let str = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item[i] + item[i + 1] === '10') {
                str += '.';
            };
            if (item[i] + item[i + 1] === '11') {
                str += '-';
            };
            if (item[i]  === '*') {
                str += '*';
                break;
            }
        }
        morA.push(str)
    })

    morA.forEach(item => {
        if (!MORSE_TABLE[item]) {
            messege += ' ';
        }
        if (MORSE_TABLE[item]) {
            messege += MORSE_TABLE[item];
        }
    })

    return messege
}


module.exports = {
    decode
}