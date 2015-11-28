/**
 * Created by tarcisio on 08/05/15.
 */

window.onload = function(){

    var botao = document.getElementById('bt');
    botao.addEventListener('click', blitz);

    function blitz(){
        var user = prompt("Você encontrou uma blitz ao dirigir embriagado, escolhe: \n- subornar o guarda(SUBORNO), \n- fugir (FUGIR) ou \n- se recusa a fazer o bafômetro(RECUSAR)?").toUpperCase();

        switch(user){
            case 'SUBORNO':
                var labia = prompt('você tem lábia? (SIM) ou (NÂO)?').toUpperCase();
                var dinheiro = prompt('você tem uma onça?').toUpperCase();
                if (labia == 'SIM'&& dinheiro == 'SIM'){
                    alert('Você deu a onça para o guarda e conseguiu não ir preso!');
                }else if(!(labia =='SIM') || dinheiro=='SIM'){
                    alert('O guarda lhe prendeu por tentar subornar o policial e ainda pegou seu dinheiro');
                }else {
                    alert('Você não conseguiu subornar o guarda, foi preso e teve o carro apreendido');
                }
                break;


            case 'FUGIR':

                var rapido = prompt('seu carro é rápido? (SIM) ou (NÂO)?').toUpperCase();
                var condicao = prompt('Você está em condição de dirigir em uma perseguição?');
                if(rapido == 'SIM' && condicao == 'SIM'){
                    alert('mesmo um pouco tonto, você conseguiu escapar rápido o suficiente e despistou os policiais');
                }else if(rapido =='SIM' && !(condicao == 'SIM')){
                    alert('você estava muito tonto, perdeu o controle do carro, capotou, perdeu as duas pernas no acidente e foi preso');
                }else{
                    alert('Você dirigindo essa carroça não conseguiu nem virar a esquina sem que os policiais lhe pegassem');
                }
                break;


            case 'RECUSAR':
                var visivelmente = prompt('você está visivelmente bebo? (SIM) ou (NÂO)?').toUpperCase();
                if (visivelmente == 'SIM'){
                    alert('A policia lhe levou para fazer o exame onde viram que estava bêbado, e aprenderam seu carro, lhe prenderam e ainda foi multado');
                }else{
                    alert('A blitz lhe liberou, vá ao bar mais próximo comemorar');
                }
                break;


            default:
                alert('Você estava tão bêbado que não conseguia nem falar, os guardas lhe prenderam');
        }
    }
};

