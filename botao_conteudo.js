function ShowOrHide(_element_){
    _element = document.getElementById(_element_)// procura pelo elemento da ID fornecida
    if(_element.style.display === "none"){
        _element.style.display = "block";// torna o elemento visível
    }
    else{
        _element.style.display = "none";// torna o elemento invisível
    }
}