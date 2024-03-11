/* document.getElementById('').addEventListener('focus',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="green";
});

document.getElementById('').addEventListener('blur',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="white";
}); */

var totReq = 0;

function adicionarCoraoFocarInput(){

  const listInput = document.querySelectorAll("input:not([type=radio])");
  console.log(listInput.length);
  console.log(listInput);

  listInput.forEach(function(item){

    item.addEventListener('focus',function(){

      item.style.backgroundColor="green";

    });

    item.addEventListener('blur',function(){

      item.style.background="none";

    });

  })

}

/* const radioBtns = document.querySelectorAll(".chkPrioridade");
radioBtns.forEach(radioBtn => {
  
  radioBtn.addEventListener('change',e=>{

    console.log(e.target.checked);
    e.target.style.backgroundColor="red";

  })

}); */

function carregarCategorias(){

  const selectCategoria = document.getElementById('categoriaMotivo');
  selectCategoria.innerHTML="";

  const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectCategoria.add(optFirst);


  categorias.forEach(function(categoria){

    var opt = document.createElement('option');
    opt.value=categoria.idCategoria;
    opt.text = categoria.Descricao;
    selectCategoria.add(opt);

  })

}

function carregarMotivos(){

  const selectMotivo = document.getElementById('Motivo');
  selectMotivo.removeAttribute("disabled");
  selectMotivo.innerHTML="";

  const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst);

  const valorCategoria = document.getElementById('categoriaMotivo').value;
  const motivosFiltrados = motivos.filter((m)=>m.idCategoria==valorCategoria); 

  motivosFiltrados.forEach(function(motivo){

    var opt = document.createElement('option');
    opt.value= motivo.idMotivo;
    opt.text = motivo.Descricao;
    selectMotivo.add(opt);

  })

}

function carregarFuncionario(){

  console.log("Entrou na função");
  const valorId = document.getElementById("idFuncionario").value;
  console.log("Valor id: " + valorId);
  const funcionarioDesejado = funcionarios.filter((f)=>f.Id==valorId) 

  funcionarioDesejado.forEach(function(func){

    console.log('Intro');
    var CaixaNome = document.getElementById("NomeFuncionario");
    console.log(CaixaNome);
    CaixaNome.value = func.Nome;

    var CaixaCargo = document.getElementById("cargo");
    console.log(CaixaCargo);
    CaixaCargo.value = func.Cargo;

  })

}

function carregarDepartamento(){

  console.log("Entrou na função");
  const valorId = document.getElementById("idDepartamento").value;
  const departamentoDesejado = departamentos.filter((d)=>d.Id==valorId) 

  departamentoDesejado.forEach(function(dep){

    var CaixaTexto = document.getElementById("departamento");
    console.log(CaixaTexto);
    CaixaTexto.value = dep.Descricao;

  })

}

function carregarProduto(){

  /* const selectProduto = document.getElementById('tabelaItens');
  selectProduto.innerHTML=""; */

  /* const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst); */

  const valorId = document.getElementById('CodigoProduto').value;
  const produtoFiltrado = produtos.filter((m)=>m.idProduto==valorId) 

  if(produtoFiltrado.length>0){
    produtoFiltrado.forEach(function(produto){
      document.getElementById("DescricaoProduto").value=produto.Descricao;

    })
  }

}

/* document.getElementById('btnGravar').addEventListener('click',function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    // console.log(elementosObrigatorios);
    
    let validadoCamposPreenhcidos=true;

    setTimeout(function(){ 
        validadoCamposPreenhcidos=true;           
        if(validadoCamposPreenhcidos){
            document.getElementById('modalSucesso').style.display='block';
        }
    },1000); 

    elementosObrigatorios.forEach(function(item){
        
        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
            validadoCamposPreenhcidos=false;
        } 
    })
*/
    /* const chkUrgenteValue = document.getElementById('urgente');
    const chkMedioValue = document.getElementById('medio');
    const chkBaixoValue = document.getElementById('baixo');
    if (chkUrgenteValue.cheched==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
        validadoCamposPreenhcidos=false;
    }    
}); 
*/
/* function adicionarRegraCamposSomenteNumeros(){ */
    /* const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]'); */
    const elementosAceitaSoNumeros = document.querySelectorAll('.id');
    elementosAceitaSoNumeros.forEach((item)=>{
        item.addEventListener('keypress', (e)=>{  
               
                if (e.keyCode<48 || e.keyCode>59){
                    e.preventDefault();
                };
        });
        
        item.addEventListener('change',(e)=>{

            if(e.target.value<0){

                e.target.value=e.target.value*-1;

            }

        });
    })
/* } */

/* 
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');  
    
    checkboxesPrioridade.forEach((trigger)=>{trigger.addEventListener('click',function(e){

      console.log(checkboxesPrioridade);
      checkboxesPrioridade.forEach(function(checkbox) {
          checkbox.addEventListener('click', function() {     
              const divPrioridade = document.querySelectorAll(".radioPrioridade");
              console.log(divPrioridade)
              /* divPrioridade.classList.add('radioPrioridade'); */
              /* divPrioridade.forEach(e=>{})
                    
              document.getElementById('urgente').classList.add('chkPrioridade');
              document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
              document.getElementById('medio').classList.add('chkPrioridade');
              document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
              document.getElementById('baixo').classList.add('chkPrioridade');
              document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado'); */
           /* });
      });
 
    })}) */ 

    
    function criarBtnRemover(tabelaItems,objlinha, numeroLinha){
      
      const btnRemoverItem = document.createElement('div');
      btnRemoverItem.className = "BtnRemover";
      btnRemoverItem.id = 'btnRemover' + numeroLinha;
      btnRemoverItem.innerHTML = '<span> Remover </span>';
        
      btnRemoverItem.addEventListener('click',(e)=>{

        const tabelaItems = document.getElementById('tabelaItens');
        var objLinha = e.target.parentElement.parentElement.parentElement;
        console.log(objLinha);
        if (objLinha && tabelaItems.contains(objLinha)) {
          tabelaItems.removeChild(objLinha);
        }
        
        const totalRequisicao = document.getElementById('total');
        const colunas = objLinha.getElementsByTagName('td');
        let valorLinha = colunas[5].innerText;
        let novoTotal = parseFloat(totalRequisicao.textContent - parseFloat(valorLinha))
        totalRequisicao.textContent = novoTotal;

        if(novoTotal==0){
          document.getElementById('btn').style.display='none';
        }

      })
      return btnRemoverItem;
    }



document.getElementById('BtnInserirItens').addEventListener('click',function(){
  
  const campoProduto = document.getElementById('CodigoProduto');
 
  const produtoPesquisado = produtos.filter((p)=>p.idProduto==campoProduto.value);
  var campoEstoque = parseFloat(produtoPesquisado[0].Estoque);
  const campoQuantidade = document.getElementById('Quantidade');

  if((parseFloat(campoQuantidade.value)>0) && (parseFloat(campoEstoque)-parseFloat(campoQuantidade.value)>0)){
    
    const tabelaItens = document.getElementById('tabelaItens');
    const campoDescricaoProduto = document.getElementById('DescricaoProduto');
    const totalRequisicao = document.getElementById('total');

    var linhas = tabelaItens.children;

    if(linhas.length>1){

      for(var i=1; i<linhas.length; i++){

        console.log(linhas[i].children[1].innerHTML);
        console.log(campoDescricaoProduto.value);
        console.log(linhas[i].children[1].innerHTML==campoDescricaoProduto.value);

        if(linhas[i].children[1].innerHTML==campoDescricaoProduto.value){
          console.log("Entrou no if");
          if(parseFloat(linhas[i].children[2].innerHTML)+parseFloat(campoQuantidade.value)<produtoPesquisado[0].Estoque){
            
          linhas[i].children[2].innerHTML = parseFloat(linhas[i].children[2].innerHTML) + parseFloat(campoQuantidade.value);
          linhas[i].children[5].innerHTML = (parseFloat(linhas[i].children[2].innerHTML) * parseFloat(linhas[i].children[4].innerHTML)).toFixed(2);
          totalRequisicao.textContent = linhas[i].children[5].innerHTML;
          corBloco();
          
          }else{

            alert("Sem estoque")

          }
          return;
        }

      }

    }

    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdUnd = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');
    const tdBtnRemover = document.createElement('td');
    
    

    tdCodigo.innerHTML = campoProduto.value;
    tdDescricao.innerHTML = campoDescricaoProduto.value;
    tdQuantidade.innerHTML = campoQuantidade.value;
    tdUnd.innerHTML = produtoPesquisado[0].Unidade;
    tdPreco.innerHTML = produtoPesquisado[0].Preco.toFixed(2);
    tdTotalLinha.innerHTML =(parseFloat(campoQuantidade.value) * produtoPesquisado[0].Preco).toFixed(2);

    linha.appendChild(tdCodigo);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidade);
    linha.appendChild(tdUnd);
    linha.appendChild(tdPreco);
    linha.appendChild(tdTotalLinha);
    tabelaItens.appendChild(linha);

    var qtdLinhasAtualNaTabela = 0;
    var linhas = tabelaItens.querySelectorAll("tr");
    
    linhas.forEach(e=>{

      qtdLinhasAtualNaTabela++;

    })

    totalRequisicao.textContent = (parseFloat(totalRequisicao.textContent) + parseFloat(campoQuantidade.value*produtoPesquisado[0].Preco)).toFixed(2);
    var btnRemover = criarBtnRemover(tabelaItens, linha,qtdLinhasAtualNaTabela)

    tdBtnRemover.appendChild(btnRemover);
    linha.appendChild(tdBtnRemover);
    tabelaItens.appendChild(linha);

    document.getElementById("btn").style.display="block";

    }else{

      alert("Sem estoque")

    }
  });


/* // Seleciona todos os botões de opção
let radios = document.querySelectorAll (".chkPrioridade");

// Adiciona um evento de mudança a cada botão
for (let radio of radios) {

  radio.addEventListener ("change", function () {
    // Obtém o elemento pai do botão
    let grupo = this.parentElement;

    for (let g of document.querySelectorAll (".grupoPrioridade")) {
      g.style.backgroundColor = "";
    }
    
    // Obtém o valor do botão
    let valor = this.value;
    // Define a cor de fundo do elemento pai de acordo com o valor
    if (valor == "Urgente") {
      grupo.style.backgroundColor = "red";
    } else if (valor == "Médio") {
      grupo.style.backgroundColor = "yellow";
    } else if (valor == "Baixo") {
      grupo.style.backgroundColor = "green";
    }
  });
} */

function apareceModal(){

  document.querySelector('.modal').style.display="block"
  document.querySelector('.modal').style.zIndex="2"
  document.querySelector('.modal').style.float="left"
  document.querySelector('.modal').style.marginRight="-20vw"
  document.querySelector('.modal').style.marginTop="-8vh"
}

function modalSumiu(){

  document.querySelector('.modal').style.display="none"

}

document.getElementById('Quantidade').addEventListener('blur',e=>{

  corBloco()  

});

function corBloco(){

  var idProduto = document.getElementById('CodigoProduto').value
    if(idProduto){
      
      const produtoPesquisado = produtos.filter((p)=>p.idProduto==parseInt(idProduto));
      var quant = parseInt(document.getElementById('Quantidade').value);
      var dif = parseInt(produtoPesquisado[0].Estoque)-quant;
      const campoDescricaoProduto = document.getElementById('DescricaoProduto');

      const tabelaItens = document.getElementById('tabelaItens')

      var linhas = tabelaItens.children;

      if(linhas.length>1){
  
        for(var i=1; i<linhas.length; i++){
  
          if(linhas[i].children[1].innerHTML==campoDescricaoProduto.value){
  
            dif = dif - parseFloat(linhas[i].children[2].innerHTML);
            break;
          }
  
        }
  
      } 

      if(dif>produtoPesquisado[0].EstoqueMinimo*1.1){
        
        document.getElementById("corEstoqueImg").src ="./assets/img/verde.svg"

      }else 
        if(dif>=produtoPesquisado[0].EstoqueMinimo){

          document.getElementById("corEstoqueImg").src ="https://www.bing.com/th?id=OIP.-LfoomBRwiE4ucNzaiga6gHaFj&w=148&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"

        }else{
          document.getElementById("corEstoqueImg").src = "https://www.bing.com/th?id=OIP.sB7oAgOuL9mBm8PiFvb_nQHaEo&w=164&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
        }

    }else{

      alert("Produto não identificado")

    }

}

adicionarCoraoFocarInput();
carregarCategorias();
// carregarMotivos();

