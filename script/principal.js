escrever = (msg) => alert (msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
div = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
eq2grau = (a,b,c) => {
    if(a == 0) return "Não é uma equação do Segundo Grau.";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if(a < 0)  return "Não Possui raiz real.";
    if(delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1" + div(soma(-b,raiz(delta)),mult(2,a)) +
    "x2" + div(sub(-b,raiz(delta)),mult(2,a));
}
let a = "";
let b = "";
let op = "";
let valor = "";
let tem_ponto =false;
let desligada = false;

function porcentagem(){
    if(op == "mult"){
        mostra_resultado(div(mult(a,valor),100));
        a = "";
        valor = "";
    }
}

function raiz_quadrada(){
    mostra_resultado(raiz(valor));
    valor = "";
}
function zerar(){
    if(desligada) return;
    a = "";
    b = "";
    op = "";
    valor = "";
    tem_ponto = false;
    mostra_resultado(0);
}

function desligar(){
   if (desligada){
    desligada = false;
    zerar();
   }else{
    zerar();
    desligada = true;
    mostra_resultado("");
   }
   return desligada;
}



function mostra_resultado(resul){
    if(desligada) return;
    document.getElementById("resultado").value = resul;
}
function operacao(nova_op){
    op = nova_op;
    a = valor;
    valor = "";
    tem_ponto = false;
}
function calcula(){
    if(op != ""){
        b = valor;
        if(op =="soma") mostra_resultado(soma(a,b));
        if(op =="sub") mostra_resultado(sub(a,b));
        if(op =="div") mostra_resultado(div(a,b));
        if(op =="mult") mostra_resultado(mult(a,b));
        a = "";
        b = "";
        tem_ponto = false;

    }
}


function digitando(tecla){
    if(tecla == "."){
        if(!tem_ponto){
            valor = valor + tecla;
            mostra_resultado(valor);
            tem_ponto = true;

        }
        return;
    }
    valor = valor + tecla;
    mostra_resultado(valor);
}


