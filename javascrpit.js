(function(){
    var nome = prompt ("qual seu nome")
    var paragrafo = document.querySelectorAll("p")
    var x =0;
    while(paragrafo [x]){
        paragrafo[x].textContent = nome +", deu certo!"
        x++;
    }

})()
