const fogoPixelArray =[]  //array linear, todos os pixel do fogo vão estar um do lado do outro  
const larguraDoFogo = 10
const alturaDoFogo = 10
const PaletaDeCores = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]

//https://www.youtube.com/watch?v=fxm8cadCqbs


function inicial(){
    calculaEstruturaDados()     
    criandoOrigemDoFogo()
    renderizaFogo()

    setInterval(calculaPropagacaoFogo,1000)

}

function calculaEstruturaDados(){
    const numeroDePixel = larguraDoFogo * alturaDoFogo //multiplicando a largura e altura encontra todos os pixel do fogo
    console.log(numeroDePixel,'quantiadade de pixel criada')
    for (let i = 0 ; i < numeroDePixel ; i++ ){
        fogoPixelArray[i] = 0 //incrementa 0 em todos os indices do array, pq a intencidade do fogo e 0 
    }
} 

function atualizaIntencidadeDoFogo(pixelAtual){
    const indeceDoPixelAbaixo = pixelAtual + larguraDoFogo
    
    if(indeceDoPixelAbaixo >= larguraDoFogo * alturaDoFogo){
        return 
    }

    //calcular o enfraquecimento da intencidade do fogo
    const decair = 1
    const intencidadePixeDeBaixo =  fogoPixelArray[indeceDoPixelAbaixo]
    const novaIntencidadeDoFogo = 
        intencidadePixeDeBaixo - decair >= 0 ? intencidadePixeDeBaixo - decair : 0

    fogoPixelArray[pixelAtual] = novaIntencidadeDoFogo
}

function calculaPropagacaoFogo(){
    for(let coluna = 0;coluna < larguraDoFogo;coluna++){
        for(let linha = 0;linha < alturaDoFogo;linha++){
            const pixelindice = coluna + ( larguraDoFogo * linha )

            atualizaIntencidadeDoFogo(pixelindice)
            
        }
    }
    renderizaFogo()
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

            const fogoIntensidade = fogoPixelArray[pixelIndice]    
            html += '<td>'
            html += `<div class="pixel-index">${pixelIndice}</div>` // printa valor dentro da celula
            console.log(fogoIntensidade)
            html += fogoIntensidade
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'    

    document.querySelector('#fogoCanvas').innerHTML = html
    //substitui o id "#fogoCanvas" esta no arquivo index.html, pelo conteudo do html
}

function criandoOrigemDoFogo(){
    for (let coluna = 0; coluna <= larguraDoFogo; coluna++){
        console.log(coluna)
        const mudarIntensidade = larguraDoFogo * alturaDoFogo
        const pixelIndice = (mudarIntensidade - larguraDoFogo) + coluna

        fogoPixelArray[pixelIndice] = 36 // a tabela de cores utilizada no fogo tem 36 cores
    }
/*
 Canto superio direito e o indece do ARRAY
 numero no centro e a intencidade do fogo
 _______ _______ _______       _______
|      0|      1|      2|     |      9|
|   0   |   0   |   0   | ... |   0   | 
|_______|_______|_______|     |_______|         
|     10|     11|     12|     |     19|
|   0   |   0   |   0   | ... |   0   | 
|_______|_______|_______|     |_______|         
            .
            .
            .
 _______ _______ _______       _______          
|     90|     91|     92|     |     99|
|   0   |   0   |   0   | ... |   0   | 
|_______|_______|_______|     |_______|       

*/












}

inicial()