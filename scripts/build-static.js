'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const name of ['index.html', 'css', 'js', 'assets', 'Md_Hasebul_Hasan_CV.pdf', 'Md_Hasebul_Hasan_Industry_CV.pdf']) {
    fs.cpSync(path.join(root, name), path.join(dist, name), { recursive: true });
}
console.log('Built the current portfolio, assets, and both CVs in dist/.');
