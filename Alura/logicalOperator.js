console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);

}

else{
    console.log("Comprador não é maior de idade");
}

/*
console.log(IdadeDoComprador > 18)
console.log(IdadeDoComprador < 18)
console.log(IdadeDoComprador >= 18)
console.log(IdadeDoComprador <= 18)
console.log(IdadeDoComprador == 18)
*/


if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestionos.splice(1,1); //removendo item
}else{
    //a pessoa é menor de idade
if(estaAcompanhada){
    console.log("Comprador está acompanhado");
    }else{
       console.log("Não é maior de Idade e não posso vender");

    }
} 




