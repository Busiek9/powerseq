//https://github.com/ReactiveX/rxjs/blob/master/.make-packages.js

var fs = require('fs');
var pkg = require('../package.json');

// var cjsPkg = Object.assign({}, pkg, {
//   name: 'rxjs',
//   main: 'Rx.js',
//   typings: 'Rx.d.ts'
// });

delete pkg.scripts;

var filePath = "./npmpackage/package.json";
fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2));
console.log(filePath, " file generated");

fs.writeFileSync('./npmpackage/LICENSE.txt', fs.readFileSync('./LICENSE.txt').toString());
fs.writeFileSync('./npmpackage/README.md', fs.readFileSync('./README.md').toString());
