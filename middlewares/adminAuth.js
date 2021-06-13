function adminAuth(request, response, next){
    if(request.session.admin != undefined){
        next();
    }else{
        response.redirect("/login");
    }
}

module.exports = adminAuth;