
const { spawn } = require('child_process');

const cmds = [
  'zip -r extension.zip src prism styles.css manifest.json'
]; 

spawn(
  'sh',
  [
    '-c',
    cmds.join(' && ')
  ]
);