import newman from 'newman'; // require newman in your project

// List of reporters
const reporters = ['junit', 'cli', 'progress', 'json'];

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/postman_echo.postman_collection.json'),
    reporters: reporters,
}, function (err: Error | null) {
	if (err) { throw err; }
    console.log('Collection run complete!');
});

// Cloud Collection example
newman.run({
    collection: 'https://www.getpostman.com/collections/f2d90da9138461037858',
    reporters: reporters,
}, function (err: Error | null) {
	if (err) { throw err; }
    console.log('Cloud Collection run complete!');
});
