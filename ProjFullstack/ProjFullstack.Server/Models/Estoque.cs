using System;
using System.Collections.Generic;

namespace ProjFullstack.Server.Models
{
    public partial class Estoque
    {
        public Estoque()
        {
            Logs = new HashSet<Log>();
        }

        public int IdEstoque { get; set; }
        public string Produto { get; set; } = null!;
        public decimal PrecoUn { get; set; }
        public int EstoqueAtual { get; set; }
        public int EstoqueMinimo { get; set; }

        public virtual ICollection<Log> Logs { get; set; }
    }
}
