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
    let arrDotDash = expr.split('**********');
    let res = [];
    let messege = '';

    arrDotDash.map((item) => {
        let str = '';
        
        for (let i = 0; i < item.length; i += 2 ) {
            if (item[i] + item[i + 1] === '10') {
                str += '.';
            };
            if (item[i] + item[i + 1] === '11') {
                str += '-';
            };
            if (item[i] + item[i + 1] === '00') {
                str += ' ';
            };
        }
        console.log(str)
        res.push(str.split(' '))
    });
    console.log(res)
    res.forEach(item => {
        if (messege.length > 0) {
            messege += ' ';
        }

        for (let i = 0; i < item.length; i++) {
            if (MORSE_TABLE[item[i]]) {
                messege += MORSE_TABLE[item[i]]
            };
        }
    })
    
    return messege
}

module.exports = {
    decode
}