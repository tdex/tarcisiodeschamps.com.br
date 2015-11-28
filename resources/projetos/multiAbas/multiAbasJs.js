/**
 * Created by Tarcísio on 28/07/2014.
 */


window.onload = function () {
    var links = document.getElementsByClassName('link');
    var artigo = document.getElementById('artigo');
    var inicio = document.getElementById('inicio');
    var passos = document.getElementById('passos');
    var codigojs = document.getElementById('codigojs');
    var codigocss = document.getElementById('codigoCss');

    function mostraInicio(){
        artigo.style.display = 'block';
        inicio.style.display = 'block';
        passos.style.display = 'none';
        codigojs.style.display = 'none';
        codigocss.style.display = 'none';
    }
    function mostraPassos(){
        artigo.style.display = 'block';
        inicio.style.display = 'none';
        passos.style.display = 'block';
        codigojs.style.display = 'none';
        codigocss.style.display = 'none';
    }
    function mostraJs(){
        artigo.style.display = 'block';
        inicio.style.display = 'none';
        passos.style.display = 'none';
        codigojs.style.display = 'block';
        codigocss.style.display = 'none';
    }
    function mostraCss(){
        artigo.style.display = 'block';
        inicio.style.display = 'none';
        passos.style.display = 'none';
        codigojs.style.display = 'none';
        codigocss.style.display = 'block';
    }
    links[0].onclick = mostraInicio;
    links[1].onclick = mostraPassos;
    links[2].onclick = mostraJs;
    links[3].onclick = mostraCss;

};
