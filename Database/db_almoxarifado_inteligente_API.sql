CREATE DATABASE db_almoxarifado_inteligente_API

USE db_almoxarifado_inteligente_API

-- Tabela para gestão de produtos --
--Parte Completa

--Tabela estoques
--Completa
CREATE TABLE Estoques(
id_estoque INT PRIMARY KEY IDENTITY(10,10),
produto VARCHAR(100) NOT NULL,
preco_un DECIMAL(12,2) DEFAULT 0 NOT NULL,
estoque_atual INT NOT NULL,
estoque_minimo INT NOT NULL
);

----------------------------------------------

-- Tabela Log --
--Parte Completa

--Tabela logs
--Completa
CREATE TABLE Logs(
id_log INT PRIMARY KEY IDENTITY(1,1),
codigo_robo VARCHAR(4) NOT NULL,
usuario_robo VARCHAR(100) NOT NULL,
date_log DATETIME NOT NULL,
etapa VARCHAR(100) NOT NULL,
informacao_log VARCHAR(100) NOT NULL,
id_estoque INT NOT NULL,
FOREIGN KEY (id_estoque) REFERENCES Estoques(id_estoque)
);

----------------------------------------------

-- Tabelas para tela de Requisição --
--Parte Incompleta.
--Faltar saber se é preciso salvar o pedido de
--requisição no banco de dados

--Tabela Departamentos
--Completo
--CREATE TABLE Departamentos(
--id_departamento INT PRIMARY KEY IDENTITY(1,1),
--descricao VARCHAR(100) NOT NULL
--);

----Tabela Funcionários
----Completa
--CREATE TABLE Funcionarios(
--id_funcionario INT PRIMARY KEY IDENTITY(1,1),
--nome VARCHAR(100) NOT NULL,
--cargo VARCHAR(100) NOT NULL
--);

----Tabela de categorias de motivos
----Completa
--CREATE TABLE Categorias_Motivo(
--id_categoria INT PRIMARY KEY IDENTITY(1,1),
--descricao VARCHAR(100) NOT NULL
--);

--Tabela de motivos de requisição
--Completa
--CREATE TABLE Motivos(
--id_motivo INT PRIMARY KEY IDENTITY(1,1),
--descricao VARCHAR(100) NOT NULL,
--id_categoria INT NOT NULL,
--FOREIGN KEY (id_categoria) REFERENCES Categorias_Motivo(id_categoria)
--);

--CREATE TABLE 

----------------------------------------------