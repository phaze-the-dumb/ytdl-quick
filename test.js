const Downloader = require('./');

let downloader = new Downloader('https://www.youtube.com/watch?v=iqUBmeFn7qM', { verbose: true, output: 'out.mp4' });

downloader.onend = () => {
    console.log('Finished')
}