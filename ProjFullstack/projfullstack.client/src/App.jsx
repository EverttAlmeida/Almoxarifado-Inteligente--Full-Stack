import { createElement, useEffect, useState } from 'react';
import './App.css';

function App() {

    const [produto,setProdutos] = useState();

    useEffect(() => {

        carregarProdutos();


    }, []); 



    async function carregarProdutos(){

        const response = await fetch("https://localhost:7117/api/Estoques");
        const data = await response.json();
        setProdutos(data);

    }

    function listarProdutos() {

        var tabela = document.getElementById("produtos");

        for (let i = 0; i < data.length; i++) {

            var td = document.createElement(td)
            td.innerHTML = produto[i].idEstoque


        }
            
                <td>Resma A4</td>
                <td>R$ 25,00</td>
                <td>200</td>
                <td>100</td>
                <td>
                    <button><img className="btnicons" src="src/assets/iniciar.png" /></button>
                    <button><img className="btnicons" src="src/assets/email desativado.png" /></button>
                    <button><img className="btnicons" src="src/assets/editar.png" /></button>
                    <button><img className="btnicons" src="src/assets/fechar.png" /></button>
                </td>
            </tr >

    }
    


    return (
        <div>
            <div className="tabs">
                <button>Produto</button>
                <button>Requisicao</button>
                <button>BenchMarking Log</button>
            </div>
            <div className="content">
                <h1>Gestao de Produtos</h1>
                <button className="newButton">NOVO</button>
                <table id= "produtos">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Preço</th>
                            <th>Estoque Atual</th>
                            <th>Estoque Mínimo</th>
                            <th>Acoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>Resma A4</td>
                            <td>R$ 25,00</td>
                            <td>200</td>
                            <td>100</td>
                            <td>
                                <button><img className="btnicons" src="src/assets/iniciar.png" /></button>
                                <button><img className="btnicons" src="src/assets/email desativado.png" /></button>
                                <button><img className="btnicons" src="src/assets/editar.png" /></button>
                                <button><img className="btnicons" src="src/assets/fechar.png" /></button>
                            </td>
                        </tr>
                        {/* Repita as linhas da tabela para cada produto */}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default App;