/**
 * Created by Tarcísio on 29/07/2014.
 */
window.onload = function(){
    var links = document.getElementsByClassName('links');
    var artigos = document.getElementsByTagName('article');
    var corDoLink = '#5aa2ed';   //esta variavel serve para deixar os itens da barra na mesma cor do artigo
    var zeraCor ='#FFF';

    artigos[0].style.display = 'block';  //exibe assim que abre a pagina o primeiro artigo por padrão
    links[0].style.backgroundColor = corDoLink;
/*
    //loop que deveria funcionar substituindo todos os metodos individuais, mas não está entrando o parametro select no addEventListner
    function mostra(select){
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }

    links[0].addEventListener('click',mostra);
    links[1].addEventListener('click',mostra);
    links[2].addEventListener('click',mostra);
    links[3].addEventListener('click',mostra);
    links[4].addEventListener('click',mostra);
    links[5].addEventListener('click',mostra);
*/

    var select;
    function mostra0(){
        select= 0;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }
    function mostra1(){
        select= 1;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }
    function mostra2(){
        select= 2;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }
    function mostra3(){
        select= 3;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }
    function mostra4(){
        select= 4;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }
    function mostra5(){
        select= 5;
        for(var i=0;i<links.length;i++){
            links[i].style.background = zeraCor;
            artigos[i].style.display = 'none';
        }
        links[select].style.backgroundColor = corDoLink;
        artigos[select].style.display = 'block';
    }

    links[0].onclick = mostra0;
    links[1].onclick = mostra1;
    links[2].onclick = mostra2;
    links[3].onclick = mostra3;
    links[4].onclick = mostra4;
    links[5].onclick = mostra5;
};