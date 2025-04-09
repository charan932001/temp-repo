const http =require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('welcome to our home page');
    return;
   
  }
  if(req.url==='/about'){
    res.end(`<p>welcome to our about page</p>
        <a href='/'>back home</a>`)
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page</p>
    <a href='/about'>back home</a>`
)
})
server.listen(5100)
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Welcome to our home page');
//     return;
//   }

//   if (req.url === '/about') {
//     res.end('Welcome to our about page');
//     return;
//   }

//   // Default fallback route
//   res.end(`
//     <h1>Oops!</h1>
//     <p>We can't find the page</p>
//     <a href='/'>Back home</a>
//   `);
// });

// server.listen(5100, () => {
//   console.log('Server running on http://localhost:5100');
// });

