const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const letters = 'qwertyuiopasdfghjklzxcvbnm0987654321'.split('');
const rand = () => letters[Math.floor(Math.random() * letters.length)];
let filesCount = 50000;
const filenameLen = 48;
const base = './app';

if (!existsSync(base)) {
    mkdirSync(base, { recursive: true });
}

while (filesCount) {
    const filename = new Array(filenameLen).fill().map(rand).join('') + '.ts';
    writeFileSync(path.join(base, filename), '// shim of a real file');
    filesCount--;
    if (filesCount % 1000 === 0) console.log(filesCount, 'left...');
}