/**
 * Created by tarcisio on 02/05/15.
 */

window.onload = function(){

    var botao = document.getElementById('bt');
    botao.addEventListener('click', verificaPrimo);

    function verificaPrimo(){
        var a = document.getElementById('campo').value;
        var cont = 0;
        if(!(a=='' || a==null)){
            if(isNaN(a) || a == ' '){
                alert("'" +a + "' não é um número");
            }else{
                for(var i=1; i <= a; i++){
                    if(a%i==0){
                        cont += 1;
                    }
                }
                if(cont==2){
                    alert(a + " é primo");
                }else{
                    alert(a + " não é primo");
                }
            }
        }
    }
};