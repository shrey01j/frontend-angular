const exrpess = require('express')
const app = exrpess()

app.use(exrpess.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);