using ProjFullstack.Server.Models;
using ProjFullstack.Server.Scraper;
using ProjFullstack.Server.Utilities;

namespace ProjFullstack.Server.Utilities
{
    public class Benchmarking
    {
        public void benchmarking(string descricaoProduto, int idProduto)
        {
            MercadoLivre mercadoLivre = new MercadoLivre();
            List<string> listaMercadoLivre = mercadoLivre.ObterPreco(descricaoProduto, idProduto);
            string precoObtidoMercadoLivre = listaMercadoLivre[0];
            string linkProdutoMercadoLivre = listaMercadoLivre[1];
            string nomeProdutoMercadoLivre = listaMercadoLivre[2];

            MagazineLuiza magazineLuizaScraper = new MagazineLuiza();
            List<string> listaMagazineLuiza = magazineLuizaScraper.ObterPreco(descricaoProduto, idProduto);
            string precoObtidoMagazineLuiza = listaMagazineLuiza[0];
            string linkProdutoMagazineLuiza = listaMagazineLuiza[1];
            string nomeProdutoMagazineLuiza = listaMagazineLuiza[2];

            //ComparadorPrecos comparadorPrecos = new ComparadorPrecos();
            string melhorCompra = ComparadorPrecos.CompararPrecos(precoObtidoMercadoLivre, linkProdutoMercadoLivre, precoObtidoMagazineLuiza, linkProdutoMagazineLuiza, descricaoProduto);

        }
    }
    
}
