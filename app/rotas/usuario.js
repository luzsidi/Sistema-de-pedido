module.exports = function (app) {

    app.get('/usuario/cadastro_usuario', function (request, response) {
        app.app.controllers.usuario.cadastro_usuario(app, request, response)
    })
    
    app.post('/usuario/cadastrar', function (request, response) {
        app.app.controllers.usuario.cadastrar(app, request, response)
    })

    app.get('/usuario/login', function(request, response){
        app.app.controllers.usuario.usuario_login(app, request, response)
    })

    app.post('/usuario/validar', function(request, response){
        app.app.controllers.usuario.validar(app, request, response)
    })
    app.get('/usuario/sair', function(request, response){
        app.app.controllers.usuario.sair(app, request, response)
    })
    app.get('/usuario/listar', function(request, response){
        app.app.controllers.usuario.listar(app, request, response)
    })   
    app.get('/listaProdutos', function(request, response){
        app.app.controllers.usuario.listaProdutos(app, request, response)
    })
    //app.post('/adicionar',function(request, response){
       // app.app.controllers.usuario.adicionar(app, request, response)
    //})
    app.get('/usuario/alterar_senha', function (request, response) {
      app.app.controllers.usuario.alterar_senha(app, request, response)
    })

   app.post('/usuario/alterar_senha',function(request,response){
       app.app.controllers.usuario.alterar_senha(app,request,response)
        })
    app.get('/usuario/alterar_dados', function (request, response) {
        app.app.controllers.usuario.alterar_dados(app, request, response)
   })

   app.post('/usuario/alterar_dados',function(request,response){
      app.app.controllers.usuario.alterar_dados(app,request,response)
})
    
};