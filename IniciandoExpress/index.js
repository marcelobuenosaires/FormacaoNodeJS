const express = require ("express"); // Importando o express
const app = express (); // Iniciando o express



app.get("/",function(req,res){
    res.send("Bem vindo ao guia do programador www.youtube.com")

});


app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog");

})


app.get("/canal/youtube",function(req,res){
    res.send("<h1> Bem vindo ao meu canal!!</h1>");

})

app.get("/teste",function(req,res){
    res.send("<h1> apenas um teste 123 </h1> <h1> apenas um teste 123 </h1> ");

})



app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else {
        console.log("Servidor iniciado com sucesso!");

    }



})
