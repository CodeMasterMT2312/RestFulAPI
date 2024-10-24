import app from './server.js'

const appPort = app.get('port')

app.listen(appPort,()=>{
    console.log(`Server ok on http://localhost:${appPort}`);
})