const { exec } = require('child_process')
const execPromise = require('util').promisify(exec);

// must $sudo apt-get install mpg123

/* LINUX PLAY COMMAND */
const linuxPlay = path => `mpg123 ${path}`
const linuxStop = () => exec('pkill mpg123');

const play = async path => {
  const playCommand =
    linuxPlay(path);
  try {
    await execPromise(playCommand)
  } catch (err) {
    throw err
  }
}

play('./sw.mp3');

setTimeout(() => {
  linuxStop();
}, 3000);
