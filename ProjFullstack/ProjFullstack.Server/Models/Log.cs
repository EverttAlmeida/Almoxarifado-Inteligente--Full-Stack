using System;
using System.Collections.Generic;

namespace ProjFullstack.Server.Models
{
    public partial class Log
    {
        public int IdLog { get; set; }
        public string CodigoRobo { get; set; } = null!;
        public string UsuarioRobo { get; set; } = null!;
        public DateTime DateLog { get; set; }
        public string Etapa { get; set; } = null!;
        public string InformacaoLog { get; set; } = null!;
        public int IdEstoque { get; set; }

        public virtual Estoque IdEstoqueNavigation { get; set; } = null!;
    }
}
