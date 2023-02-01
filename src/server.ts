//servidor
import express  from 'express'
//variavel de ambiente (PORT)
import dotenv from 'dotenv'
//mustahce é o HTML
import mustache from 'mustache-express'
//path para poder usar a pasta public
import path from 'path'

//importando o arquivo index.ts
import mainRoutes from './routes/index'


dotenv.config()
//criando a variavel server para receber o express
const server = express()

//configurações do mustache
server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
//diretorio da pasta public
server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes)

//página não encontrada
server.use((req,res) =>{
    res.send("Página não encontrada")
})


//escutando a porta do servidor
server.listen(process.env.PORT)



// import express from 'express'
// import dotenv from 'dotenv'
// import mustache from 'mustache-express'
// import path from 'path'
// import mainRoutes from './routes/index';

// dotenv.config()
// const server = express()
// server.set('view engine','mustache')
// server.set('views',path.join(__dirname,'views'))
// server.engine('mustache',mustache())
// server.use(express.static(path.join(__dirname,'../public')))
// server.use(express.urlencoded({extended:true}))
// server.use(mainRoutes);

// server.listen(process.env.PORT)

// server.use((req,res) =>{
//     res.send('Página não encontrada')
// })

// server.listen(process.env.PORT);