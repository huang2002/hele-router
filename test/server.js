const Router = require('3h-router');

const port = 88;

const router = new Router({
    privateDirectories: [],
    defaultPages: [
        'test.html'
    ]
});

router.on('before', url => {
    console.log(url);
    if (url === '/') {
        router.route('/test');
    } else if (url.match(/^\/test\/.+/) && url !== '/test/test.js') {
        router.route('/test/');
    } else {
        router.route(url);
    }
});

router.start(port);

console.log(`Test server started on port ${port}.`);
