module.exports = (request, response) => {
	console.log('');
	console.log('🎉 ', request.url);
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.send([
		'c',
		'css',
		'cpp',
		'go',
		'html',
		'java',
		'javascript',
		'python',
		'rust',
		'typescript'
	]);
};
