namespace ProjFullstack.Server.Utilities
{
    public class ComparadorPrecos
    {
        //Retorna o melhor preço
        public static string CompararPrecos(string precoTextoMercadoLivreTexto, string linkMercadoLivre, string precoTextoMagazineLuiza, string linkMagazineLuiza, string nomeProduto)
        {

            if (precoTextoMercadoLivreTexto == null || precoTextoMagazineLuiza == null)
            {
                Console.WriteLine("string nula");
            }

            Console.WriteLine();
            Console.WriteLine($"Preço Mercado Livre:{precoTextoMercadoLivreTexto} | Preço Magazine Luiza:{precoTextoMagazineLuiza}");

            //Preparando string para conversão
            precoTextoMercadoLivreTexto = precoTextoMercadoLivreTexto.Replace("R", "").Replace("$", "").Replace(".", "");
            precoTextoMagazineLuiza = precoTextoMagazineLuiza.Replace("R", "").Replace("$", "").Replace(".", "");

            double valorMercadoLivre = Convert.ToDouble(precoTextoMercadoLivreTexto);
            double valorMagazineLuiza = Convert.ToDouble(precoTextoMagazineLuiza);

            if (valorMercadoLivre < valorMagazineLuiza)
            {
                Console.WriteLine($"O Mercado Livre tem {nomeProduto} de menor preço: {linkMercadoLivre}");
                return ($"O Mercado Livre tem o menor preço: {linkMercadoLivre}");
            }
            else if (valorMercadoLivre > valorMagazineLuiza)
            {
                Console.WriteLine($"A Magazine Luiza tem {nomeProduto} de menor preço: {linkMagazineLuiza}");
                return ($"A Magazine Luiza tem o menor preço: {linkMagazineLuiza}");
            }
            else if (valorMercadoLivre == valorMagazineLuiza)
            {
                Console.WriteLine($"Os preços são iguais: {valorMagazineLuiza} = {valorMercadoLivre}");
                return ($"Os preços de {nomeProduto} são iguais: {valorMagazineLuiza} = {valorMercadoLivre}");
            }
            return null;
        }

      }
}
