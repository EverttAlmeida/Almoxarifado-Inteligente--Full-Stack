using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProjFullstack.Server.Models
{
    public partial class db_almoxarifado_inteligente_APIContext : DbContext
    {
        public db_almoxarifado_inteligente_APIContext()
        {
        }

        public db_almoxarifado_inteligente_APIContext(DbContextOptions<db_almoxarifado_inteligente_APIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Estoque> Estoques { get; set; } = null!;
        public virtual DbSet<Log> Logs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-UU01SNDQ; Database=db_almoxarifado_inteligente_API; Trusted_Connection = True; TrustServerCertificate = True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Estoque>(entity =>
            {
                entity.HasKey(e => e.IdEstoque)
                    .HasName("PK__Estoques__A3D2521C84BBA479");

                entity.Property(e => e.IdEstoque).HasColumnName("id_estoque");

                entity.Property(e => e.EstoqueAtual).HasColumnName("estoque_atual");

                entity.Property(e => e.EstoqueMinimo).HasColumnName("estoque_minimo");

                entity.Property(e => e.PrecoUn)
                    .HasColumnType("decimal(12, 2)")
                    .HasColumnName("preco_un");

                entity.Property(e => e.Produto)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("produto");
            });

            modelBuilder.Entity<Log>(entity =>
            {
                entity.HasKey(e => e.IdLog)
                    .HasName("PK__Logs__6CC851FE2AA570D5");

                entity.Property(e => e.IdLog).HasColumnName("id_log");

                entity.Property(e => e.CodigoRobo)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("codigo_robo");

                entity.Property(e => e.DateLog)
                    .HasColumnType("datetime")
                    .HasColumnName("date_log");

                entity.Property(e => e.Etapa)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("etapa");

                entity.Property(e => e.IdEstoque).HasColumnName("id_estoque");

                entity.Property(e => e.InformacaoLog)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("informacao_log");

                entity.Property(e => e.UsuarioRobo)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("usuario_robo");

                entity.HasOne(d => d.IdEstoqueNavigation)
                    .WithMany(p => p.Logs)
                    .HasForeignKey(d => d.IdEstoque)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Logs__id_estoque__398D8EEE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
