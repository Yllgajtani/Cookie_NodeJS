var express = require('express');
var cookieParser= require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookieset',function(req,res){
res.cookie('cookie_name','cookie_value')
res.cookie('company','jCoders');
res.cookie('name','Ylli');

res.status(200).send('Gjthiqka ka shkrua ne rregull!');
});

app.get('/cookieget',function(req,res){
res.send(req.cookies);    
});

app.get('/',function(req,res){
    const username = req.cookies.name || 'I panjohur';
    const company = req.cookies.company || 'e paditur';
    res.send(`welcome to, ${company}  ${username}`);
});

const server = app.listen(2641, () => {
    const host = 'localhost';
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
}); 		 		
