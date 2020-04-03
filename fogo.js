const fogoPixelArray =[]  //array linear, todos os pixel do fogo vão estar um do lado do outro  
const larguraDoFogo = 10
const alturaDoFogo = 10

//https://www.youtube.com/watch?v=fxm8cadCqbs


function inicial(){
    calculaEstruturaDados()
    console.log(fogoPixelArray)   
    renderizaFogo()
}

function calculaEstruturaDados(){
    const numeroDePixel = larguraDoFogo * alturaDoFogo //multiplicando a largura e altura encontra todos os pixel do fogo
    console.log(numeroDePixel,'calcula')
    for (let i = 0 ; i < numeroDePixel ; i++ ){
        fogoPixelArray[i] = 0 //incrementa 0 em todos os indices do array, pq a intencidade do fogo e 0 
    }
} 
function calculaPropagacaoFogo(){

}
function renderizaFogo(){
/*como fazer uma tabela em html
                    <table>
          __________   __________
        |            |            |
<tr>    | <td> </td> | <td> </td> |  </tr>
        | __________ | __________ |
        |            |            |
<tr>    | <td> </td> | <td> </td> |  </tr>
        | __________ | __________ |
                
                    </table>
*/
    let html = '<table cellpadding=0 cellspacing=0>'

    for (let linha = 0; linha < alturaDoFogo; linha++){
        html += '<tr>' // cria linha        
        for (let coluna = 0; coluna < larguraDoFogo; coluna++){
            const pixelIndice = coluna + (larguraDoFogo * linha)       
            // coluna --> descobre a posicao vertical
            // (larguraDoFogo * linha) --> Descobre a posição horizontal     

            html += '<td>'
            html += `<div class="pixel-index">${pixelIndice}</div>` // printa valor dentro da celula
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'    

    document.querySelector('#fogoCanvas').innerHTML = html
    //substitui o id "#fogoCanvas" esta no arquivo index.html, pelo conteudo do html
}

inicial()