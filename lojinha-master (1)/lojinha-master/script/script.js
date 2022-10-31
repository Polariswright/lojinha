// var nome = prompt("Seja bem vindo(a), qual o seu nome?");

// document.write("Olá, " + nome + ".");

//Primeiro card:
/*function showTexto() {
    document.getElementById("texto").innerHTML = "Comprar";
}
function phaseTexto() {
    document.getElementById("texto").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto(){
    document.getElementById("texto").innerHTML = "Comprar";
}

//Segundo card:
function showTexto1() {
    document.getElementById("texto1").innerHTML = "Comprar";
}
function phaseTexto1() {
    document.getElementById("texto1").innerHTML = "Por que não? 🤔";
} 
function resetTexto1() {
    document.getElementById("texto1").innerHTML = "Comprar";
} 

//Terceiro card:
function showTexto2() {
    document.getElementById("texto2").innerHTML = "Comprar";
}
function phaseTexto2() {
    document.getElementById("texto2").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto2() {
    document.getElementById("texto2").innerHTML = "Comprar";
} 

//Quarto card:
function showTexto3() {
    document.getElementById("texto3").innerHTML = "Comprar";
}
function phaseTexto3() {
    document.getElementById("texto3").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto3() {
    document.getElementById("texto3").innerHTML = "Comprar";
} 

//Quinto card:
function showTexto4() {
    document.getElementById("texto4").innerHTML = "Comprar";
}
function phaseTexto4() {
    document.getElementById("texto4").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto4() {
    document.getElementById("texto4").innerHTML = "Comprar";
} 

//Sexto card:
function showTexto5() {
    document.getElementById("texto5").innerHTML = "Comprar";
}
function phaseTexto5() {
    document.getElementById("texto5").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto5() {
    document.getElementById("texto5").innerHTML = "Comprar";
} 

//Sexto card:
function showTexto6() {
    document.getElementById("texto6").innerHTML = "Comprar";
}
function phaseTexto6() {
    document.getElementById("texto6").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto6() {
    document.getElementById("texto6").innerHTML = "Comprar";
} 

//Sexto card:
function showTexto7() {
    document.getElementById("texto7").innerHTML = "Comprar";
}
function phaseTexto7() {
    document.getElementById("texto7").innerHTML = "Talvez sim...? 🤔";
} 
function resetTexto7() {
    document.getElementById("texto7").innerHTML = "Comprar";
} */



function Person(nome,sobrenome,idade,endereco){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.endereco = endereco;

}
var John = new Person('Joca','da Silva',12,'onde Judas perdeu as botas');
console.log(John)

function Card(texto1,texto2,texto3,texto4,texto5,texto6,texto7){
    this.texto1 = texto1
    this.texto2 = texto2
    this.texto3 = texto3
    this.texto4 = texto4
    this.texto5 =  texto5
    this.texto6 = texto6
    this.texto7 =  texto7
}

//console.log(card.texto1)
function teste(z){
    var card = new Card("Talvez sim...?","Compra ai namoral","teste2","teste3","teste4","teste5","teste6")

     z.innerHTML = card.texto2
     
}

function txt(x){
     x.innerHTML = "Talvez sim...? 🤔"
}
function txtOut(y){
    y.innerHTML = "Comprar"
}

function zoomIn(x){
    x.style.height = "320px";
    x.style.width = "300px"
}
function zoomOut(z){
    z.style.height = "300px";
    z.style.width = "280px";
}






