const server = require('./api/server');

const port = process.env.PORT || 5150;
server.listen(port,() => {
    console.log('\n\t\t**********\n\t\t** 5150 **\n\t\t**********\n')
})