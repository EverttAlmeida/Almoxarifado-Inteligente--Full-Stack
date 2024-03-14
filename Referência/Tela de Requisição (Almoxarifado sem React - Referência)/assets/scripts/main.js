//Coloca a data atual como data mínima no elemento dataRequisicao
function dataRequisicaoMin(){
    var now = new Date();
        var year = now.getFullYear();
        var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
        var day = now.getDate().toString().padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
    
    document.getElementById('dataRequisicao').min = year + '-' + month + '-' + day;
}

//Muda a cor de fundo dos input com mudarCor="true"
function adicionarCorAoFocarInput(){
    const listInput = document.querySelectorAll("[mudarCor='true']");
    listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor = "lightgreen";
        });
        item.addEventListener('blur', function(){
            item.style.backgroundColor = "white";
        });
    })
}

//Converte o valor do campo total de texto para número
function totalTextoParaNumero(){
    let campoTotal = document.getElementById('total');
    campoTotal.value = campoTotal.value.replace("R$ ", "");
    campoTotal.value = campoTotal.value.replace(",", ".");
    campoTotal.value = parseFloat(campoTotal.value);
}
//Converte o valor do campo total de número para texto
function totalNumeroParaTexto(){
    let campoTotal = document.getElementById('total');
    campoTotal.value = parseFloat(campoTotal.value).toFixed(2);
    campoTotal.value = "R$ " + campoTotal.value;
    campoTotal.value = campoTotal.value.replace(".",",");
}

//Converte o valor de texto para número e retorna
function valorTextoParaNumero(texto){
    texto = texto.replace("R$ ", "");
    texto = texto.replace(",", ".");
    return parseFloat(texto);
}
//Converte o valor de número para texto e retorna
function valorNumeroParaTexto(numero){
    numero = parseFloat(numero).toFixed(2);
    numero = "R$ " + numero;
    return numero.replace(".",",");
}

//Checa o id e se existir um id igual carregar os dados
document.getElementById('idDepartamento').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p)=>p.idDep == codigoPesquisado);

    if (departamentosFiltrados.length>0) {
        document.getElementById('departamento').value = departamentosFiltrados[0].descricao;
    }
    else{
        document.getElementById('departamento').value = "";
    }
})

//Checa o id e se existir um id igual carregar os dados
document.getElementById('idFuncionario').addEventListener('keyup', function(){
    const codigoPesquisado = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p)=>p.idFuncionario == codigoPesquisado);

    if (funcionariosFiltrados.length>0) {
        document.getElementById('NomeFuncionario').value = funcionariosFiltrados[0].nome;
        document.getElementById('cargo').value = funcionariosFiltrados[0].cargo;
    }
    else{
        document.getElementById('NomeFuncionario').value = "";
        document.getElementById('cargo').value = "";
    }
})

//Mudar a cor de volta para o normal quando preenchido
document.getElementById('urgente').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})
document.getElementById('medio').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})
document.getElementById('baixo').addEventListener('click', function(){
    const divPrioridade2 = document.getElementById("radioPrioridade");
    divPrioridade2.classList.remove('radioPrioridadeDesabilitado');
    divPrioridade2.classList.add('radioPrioridade');
})

//Carrega as categorias
function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value = categoria.idCategoria;
        opt.text = categoria.descricao;
        selectCategoria.add(opt);
    })

}

//Carrega os motivos
function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    
    //console.log ("Categoria Selecionada: " + valorCategoria);
    const motivosFiltrados = motivos.filter((m)=>m.idCategoria==valorCategoria);

    motivosFiltrados.forEach(function(motivo){
        const opt = document.createElement('option');
        opt.value = motivo.idMotivo;
        opt.text = motivo.descricao;
        selectMotivo.add(opt);
    })

    var listaOpcoesMotivo = document.getElementById('Motivo').options;
    //console.log(listaOpcoesMotivo.length);

    //console.log("Valor opção " + valorCategoria);

    //Caso o select motivo não tenha uma opção válida o desabilita
    if (valorCategoria == -1 || valorCategoria == "" || listaOpcoesMotivo.length == 1) {
        selectMotivo.style.backgroundColor = "gray";
        selectMotivo.setAttribute("disabled", true);
    }
    else {
        selectMotivo.removeAttribute("disabled");
        selectMotivo.style.backgroundColor = "white";
    }

}
document.getElementById('categoriaMotivo').addEventListener('change', function(){
    carregarMotivos();
})

//Checa o id e se existir um id igual carregar os dados do produto
function carregarProduto() {

    const codigoPesquisado = document.getElementById('CodigoProduto').value;

    if (codigoPesquisado < 0) {
        document.getElementById('CodigoProduto').value = Math.abs(codigoPesquisado);
    }

    let produtosFiltrados = produtos.filter((p)=>p.idProduto == codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value = produtosFiltrados[0].Descricao;
        document.getElementById('Estoque').value = produtosFiltrados[0].Estoque;
        if (document.getElementById('Estoque').value <= 0) {
            //Desabilita o campo
            document.getElementById('Quantidade').setAttribute("disabled", true);
            document.getElementById('Quantidade').value = "";
        }
        else {
            //Habilita o campo
            document.getElementById('Quantidade').removeAttribute("disabled");
            document.getElementById('Quantidade').value = 1;
        }

        //Mostra o status do estoque com cores
        /*
        if (document.getElementById('Estoque').value >= produtosFiltrados[0].EstoqueMinimo*1.1) {
            document.getElementById('verde').style.display = 'inline';
            document.getElementById('amarelo').style.display = 'none';
            document.getElementById('vermelho').style.display = 'none';
        }
        else if(document.getElementById('Estoque').value >= produtosFiltrados[0].EstoqueMinimo){
            document.getElementById('verde').style.display = 'none';
            document.getElementById('amarelo').style.display = 'inline';
            document.getElementById('vermelho').style.display = 'none';
        }
        else{
            document.getElementById('verde').style.display = 'none';
            document.getElementById('amarelo').style.display = 'none';
            document.getElementById('vermelho').style.display = 'inline';
        }
        */
        corStatusEstoque(codigoPesquisado);
    }
    else{
        document.getElementById('verde').style.display = 'none';
        document.getElementById('amarelo').style.display = 'none';
        document.getElementById('vermelho').style.display = 'none';
        document.getElementById('DescricaoProduto').value = "";
        document.getElementById('Estoque').value = "";
        document.getElementById('Quantidade').setAttribute("disabled", true);
        document.getElementById('Quantidade').value = "";
    }

    // if ( document.getElementById('Quantidade').hasAttribute("disabled") == true) {
    //     document.getElementById('btnInserirItens').setAttribute("disabled", true);
    // }
    // else {
    //     document.getElementById('btnInserirItens').removeAttribute("disabled");
    // }

    validarQuantidade();
}

function corStatusEstoque(codigoPesquisado){
    let produtosFiltrados = produtos.filter((p)=>p.idProduto == codigoPesquisado);

    //Mostra o status do estoque com cores
    if (document.getElementById('Estoque').value >= produtosFiltrados[0].EstoqueMinimo*1.1) {
        document.getElementById('verde').style.display = 'inline';
        document.getElementById('amarelo').style.display = 'none';
        document.getElementById('vermelho').style.display = 'none';
    }
    else if(document.getElementById('Estoque').value >= produtosFiltrados[0].EstoqueMinimo){
        document.getElementById('verde').style.display = 'none';
        document.getElementById('amarelo').style.display = 'inline';
        document.getElementById('vermelho').style.display = 'none';
    }
    else{
        document.getElementById('verde').style.display = 'none';
        document.getElementById('amarelo').style.display = 'none';
        document.getElementById('vermelho').style.display = 'inline';
    }
}

// document.getElementById('CodigoProduto').addEventListener('change', function(){
//     //Valida a entrada de dados CodigoProduto
//     let codigoProduto = document.getElementById('CodigoProduto').value;
//     if (codigoProduto < 0) {
//         document.getElementById('CodigoProduto').value = Math.abs(document.getElementById('CodigoProduto').value);
//     }
    
//     carregarProduto();
// })

//Válida a entrada no input quantidade
function validarQuantidade() {
    atualizarEstoque();
    
    let campoQuantidade = document.getElementById('Quantidade');
    let campoEstoque = document.getElementById('Estoque');

    if (campoQuantidade.value < 0 && campoQuantidade.value != "") {
        campoQuantidade.value = Math.abs(campoQuantidade.value);
        //console.log("Quantidade negativa mudada para positiva");
    }
    if (campoQuantidade.value == 0) {
        campoQuantidade.value = 1;
    }

    let quantidade = parseInt(campoQuantidade.value);
    let estoque = parseInt(campoEstoque.value);
    //if (campoQuantidade.value < campoEstoque.value) {
    if (quantidade <= estoque && quantidade > 0 && Number.isInteger(quantidade)) {
        document.getElementById('btnInserirItens').removeAttribute("disabled");
        document.getElementById('Quantidade').style.backgroundColor = "white";
        //console.log("Quantidade válida");
    }
    else {
        document.getElementById('btnInserirItens').setAttribute("disabled", true);
        document.getElementById('Quantidade').value = "";
        document.getElementById('Quantidade').style.backgroundColor = "grey";
        //console.log("Quantidade inválida");
    }

}
document.getElementById('Quantidade').addEventListener("keyup", function(){
    validarQuantidade();
})
document.getElementById('Quantidade').addEventListener("change", function(){
    validarQuantidade();
})

function atualizarEstoque(){
    let campoEstoque = document.getElementById('Estoque');
    //let campoQuantidade = document.getElementById('Quantidade');
    let tabelaItens = document.getElementById('tabelaItens');
    let linhas = tabelaItens.children;
    let codigoProduto = parseFloat(document.getElementById('CodigoProduto').value);

    //Se um codigoProduto válido for selecionado
    if (codigoProduto != null && codigoProduto > 0) {

        //Subtrai o valor do campo estoque pelo valor já pedido abaixo
        for (let index = 1; index < linhas.length; index++) {

            //Checa se a linha tem o código pesquisado
            if (codigoProduto == parseInt(linhas[index].children[0].innerHTML)) {
                //Prepara o campo Estoque para a atualização
                let produtosFiltrados = produtos.filter((p)=>p.idProduto == codigoProduto);
                campoEstoque.value = parseInt(produtosFiltrados[0].Estoque);

                //Diminui o estoque pela quantidade de itens pedidos
                campoEstoque.value = parseInt(campoEstoque.value) - parseInt(linhas[index].children[2].innerHTML);

                //Mudar a cor que representa o status do estoque
                corStatusEstoque(codigoProduto);
                return;
            }
            
        }
    }

}

//Checa se os campos estão preenchidos de forma válida
document.getElementById('btnGravar').addEventListener('click', function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    // console.log(elementosObrigatorios);

    elementosObrigatorios.forEach(function(item){
        if(item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
        }
        else if(item.type !== document.getElementById("urgente").type )
        {
            item.style.backgroundColor='white';
        }
    })

    const elementosInt = document.querySelectorAll('[data-id="true"]')
    //console.log(elementosInt);

    elementosInt.forEach(function(item){
        if (item.value=="" || item.value < 0 || Number.isInteger(parseFloat(item.value)) == false) {
            item.style.backgroundColor='red';
        }
        else if(item.type !== document.getElementById("urgente").type )
        {
            item.style.backgroundColor='white';
        }
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");        
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
    }
    else{
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridadeDesabilitado');
        divPrioridade.classList.add('radioPrioridade');
    }
});

//Constante do valor total de requisição, zerado para evitar erro
const totalRequisicao = document.getElementById('total');
totalRequisicao.value = "R$ " + (0).toFixed(2);
totalRequisicao.value = totalRequisicao.value.replace(".",",");

//Retonar o elemento btnRemover
function criarBtnRemover(tabela, objLinha, numeroLinha){
    const btnRemoverItem = document.createElement('div');
        btnRemoverItem.className = "BtnRemover";
        btnRemoverItem.id = 'btnRemover' + numeroLinha;
        btnRemoverItem.innerHTML = '<span>Remover</span>';
    
    btnRemoverItem.addEventListener('click', function(){
        if (objLinha && tabelaItens.contains(objLinha)){
            tabelaItens.removeChild(objLinha);
        }

        const colunas = objLinha.getElementsByTagName('td');
        //let valorLinha = colunas[5].innerText;
        let valorLinha = colunas[5].innerText.replace("R$ ", "");
        valorLinha = parseFloat(valorLinha.replace(",","."));

        //Subtraindo valor da linha do total
        totalTextoParaNumero();

        //Versão antiga funcional
        totalRequisicao.value = parseFloat(totalRequisicao.value - parseFloat(valorLinha));

        //Desabilita o botão gravar se total igual a zero ou menos
        //Versão antiga funcional
        if (document.getElementById('total').value <= 0) {
            document.getElementById('btnGravar').setAttribute("disabled", true);
        }
        else {
            document.getElementById('btnGravar').removeAttribute("disabled");
        }

        totalNumeroParaTexto();

        //Resetar campos
        document.getElementById('CodigoProduto').value = "";
        carregarProduto();
    });

    return btnRemoverItem;
}

//Insere os itens na tabela
var qtdLinhasAtualNaTabela = 0;

document.getElementById('btnInserirItens').addEventListener('click', function(){
    
    const campoProduto = document.getElementById('CodigoProduto');
 
    const produtoPesquisado = produtos.filter((p)=>p.idProduto==campoProduto.value);

    //Código novo atualizar estoque -
    // Link: https://amandexspeed.github.io/Almoxarifado/

    //var campoEstoque = parseFloat(produtoPesquisado[0].Estoque);
    let campoEstoque = document.getElementById('Estoque');
    const campoQuantidade = document.getElementById('Quantidade');
  
    if((parseFloat(campoQuantidade.value)>0) && (parseFloat(campoEstoque.value)-parseFloat(campoQuantidade.value)>=0)){
      
      const tabelaItens = document.getElementById('tabelaItens');
      const campoDescricaoProduto = document.getElementById('DescricaoProduto');
      const totalRequisicao = document.getElementById('total');
  
      var linhas = tabelaItens.children;
  
      if(linhas.length>1){
  
        for(var i=1; i<linhas.length; i++){

          /*
          console.log(linhas[i].children[1].innerHTML);
          console.log(campoDescricaoProduto.value);
          console.log(linhas[i].children[1].innerHTML==campoDescricaoProduto.value);
          */
  
          if(linhas[i].children[1].innerHTML==campoDescricaoProduto.value){
            //console.log("Entrou no if");
            //console.log(parseFloat(campoQuantidade.value) + " " + campoEstoque.value);
            //if(parseFloat(linhas[i].children[2].innerHTML)+parseFloat(campoQuantidade.value)<produtoPesquisado[0].Estoque){
            if(parseFloat(campoQuantidade.value)<=campoEstoque.value){
              
                linhas[i].children[2].innerHTML = parseFloat(linhas[i].children[2].innerHTML) + parseFloat(campoQuantidade.value);
                linhas[i].children[5].innerHTML = valorNumeroParaTexto(parseFloat(valorTextoParaNumero(linhas[i].children[2].innerHTML)) * parseFloat(valorTextoParaNumero(linhas[i].children[4].innerHTML)));

                totalTextoParaNumero();
                //Total
                //totalRequisicao.value = parseFloat(valorTextoParaNumero(linhas[i].children[5].innerHTML)) + parseFloat(valorTextoParaNumero(totalRequisicao.value));
                totalRequisicao.value = valorNumeroParaTexto(parseFloat(valorTextoParaNumero(campoQuantidade.value)) * parseFloat(valorTextoParaNumero(linhas[i].children[4].innerHTML)) + parseFloat(valorTextoParaNumero(totalRequisicao.value)));
            
            }
            else{
                totalTextoParaNumero();
                totalRequisicao.value = parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco);

                alert("Sem estoque")
  
            }
            //Resetar campos
            document.getElementById('CodigoProduto').value = "";
            carregarProduto();
            //totalNumeroParaTexto();
            return;
          }
  
        }
  
      }
    


    //Criando elemento linha
    const linha = document.createElement('tr')

    //Criando elementos coluna da linha
    const tdCodigo = document.createElement('td')
    const tdDescricao = document.createElement('td')
    const tdQuantidade = document.createElement('td')
    const tdUnidade = document.createElement('td')
    const tdPreco = document.createElement('td')
    const tdTotalLinha = document.createElement('td')
    const tdBtnRemover = document.createElement('tr')

    tdCodigo.innerHTML = campoProduto.value;
    tdDescricao.innerHTML = campoDescricaoProduto.value;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdUnidade.innerHTML = produtoPesquisado[0].Unidade;
    //tdPreco.innerHTML = produtoPesquisado[0].Preco;
    tdPreco.innerHTML = "R$ " + produtoPesquisado[0].Preco.toFixed(2).replace(".", ",");
    //tdTotalLinha.innerHTML = campoQuantidade.value*produtoPesquisado[0].Preco;
    tdTotalLinha.innerHTML = "R$ " + (campoQuantidade.value*produtoPesquisado[0].Preco).toFixed(2).replace(".", ",");

    linha.appendChild(tdCodigo)
    linha.appendChild(tdDescricao)
    linha.appendChild(tdQuantidade)
    linha.appendChild(tdUnidade)
    linha.appendChild(tdPreco)
    linha.appendChild(tdTotalLinha)
    tabelaItens.appendChild(linha)
  

    //Código Antigo Funcional
    totalTextoParaNumero();
    totalRequisicao.value = (parseFloat(totalRequisicao.value) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco));

    //Ativa ou desativa o botão gravar dependendo da validação
    if (totalRequisicao.value > 0) {
        document.getElementById('btnGravar').removeAttribute("disabled");
    }
    else{
        document.getElementById('btnGravar').setAttribute("disabled", true);
    }

    //BtnRemover
    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha, qtdLinhasAtualNaTabela));
    linha.appendChild(tdBtnRemover);
    tabelaItens.appendChild(linha);
    qtdLinhasAtualNaTabela = qtdLinhasAtualNaTabela + 1;
    
    //Resetar campos
    document.getElementById('CodigoProduto').value = "";
    carregarProduto();
    totalNumeroParaTexto();
}
else{
    alert("Sem estoque 1")}
})

document.getElementById('total').addEventListener("change", function () {
    const campoPrecoTotal = document.getElementById('total');

    totalTextoParaNumero();

    //Versão antiga funcional
    let total = parseFloat(campoPrecoTotal.value);

    console.log("Mudança total");

    if (total > 0) {
        document.getElementById('btnGravar').removeAttribute("disabled");
    }
    else {
        document.getElementById('btnGravar').setAttribute("disabled", true);
    }

    totalNumeroParaTexto();
})

//Funções chamadas para inicialização
adicionarCorAoFocarInput();
dataRequisicaoMin();
carregarCategorias();
carregarMotivos();
carregarProduto();