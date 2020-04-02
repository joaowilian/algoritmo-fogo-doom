const fogoPixelArray =[]  //array linear, todos os pixel do fogo vão estar um do lado do outro  
const alturaDoFogo = 2
const larguraDoFogo = 3
//https://www.youtube.com/watch?v=fxm8cadCqbs

function inicial(){
    calculaEstruturaDados()
    console.log(fogoPixelArray)
}

function calculaEstruturaDados(){
    const numeroDePixel = larguraDoFogo * alturaDoFogo //multiplicando a largura e altura encontra todos os pixel do fogo

    for (let i = 0 ; numeroDePixel ; i++ ){
        fogoPixelArray[i] = 0 //incrementa 0 em todos os indices do array, pq a intencidade do fogo e 0 
    }
} 
function calculaPropagacaoFogo(){

}
function renderizaFogo(){

}