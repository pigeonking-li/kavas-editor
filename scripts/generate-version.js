import fs from "fs-extra"
import path, { dirname } from "node:path"
import { fileURLToPath } from 'node:url';
import packageJSON from '../package.json' with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'version', 'version.ts'),
    `export default '${packageJSON.version}';`,
    'utf8',
);

fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'version', 'releaseTime.ts'),
    `export default '${(new Date()).toLocaleString()}';`,
    'utf8',
);