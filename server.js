var express = require('express'),
    jade = require('jade'),
    app = express(),
    port = process.env.PORT || 3000; 

app.set('port', port);
app.set('views', __dirname + '/views/layouts');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Leannovate',
        metaTitle: 'Leannovate',
        metaDescription: 'For young entrepreneurs that eat, sleep, think, talk startups. Are you one?'
    });
});

app.get('/about/', function(req, res) {
    res.render('about', {
        title: 'About Leannovate',
        metaTitle: 'About Leannovate',
        metaDescription: 'Learn more about Leannovate and what we want to do and how we want to make a difference in the world by inspiring and providing great content for young entrepreneurs.'
    });
});

app.get('/mini/', function(req, res) {
    res.render('mini', {
        title: 'Mini Bits | Leannovate',
        metaTitle: 'Mini Bits',
        metaDescription: 'Don\'t have the time to watch a 20 minute video about entrepreneurship? Mini Bits section ONLY shows you quick videos that are amazingly good in content, which will leave you content.'
    });
});

app.get('/top/', function(req, res) {
    res.render('top', {
        title: 'Top Tens | Leannovate',
        metaTitle: 'Top Ten',
        metaDescription: 'Learn more about Leannovate and what we want to do and how we want to make a difference in the world by inspiring and providing great content for young entrepreneurs.'
    });
});

app.get('/speak/', function(req, res) {
    res.render('speak', {
        title: 'Speak Startup | Leannovate',
        metaTitle: 'Top Ten',
        metaDescription: 'Learn more about Leannovate and what we want to do and how we want to make a difference in the world by inspiring and providing great content for young entrepreneurs.'
    });
});

app.get('/readings/', function(req, res) {
    res.render('readings', {
        title: 'Recommended Readings | Leannovate',
        metaTitle: 'Top Ten',
        metaDescription: 'Learn more about Leannovate and what we want to do and how we want to make a difference in the world by inspiring and providing great content for young entrepreneurs.'
    });
});

// Listens to server on assigned port
app.listen(port);
console.log("Server is listening at http://localhost:" + port);