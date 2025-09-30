const fs = require('fs-extra');
const path = require('path');

const { version } = require('../package.json');
const releaseTime = (new Date()).toLocaleString()

fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'version', 'version.ts'),
    `export default '${version}';`,
    'utf8',
);

fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'version', 'releaseTime.ts'),
    `export default '${releaseTime}';`,
    'utf8',
);