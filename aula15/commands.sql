--SELECIONAR A DB QUE ESTA SENDO USADO
USE ti3k5791_enricogabriel;

--CRIANDO TABELA
CREATE TABLE IF NOT EXISTS clientes(
    idClientes INT PRIMARY KEY,
    nome VARCHAR (50),
    telefone VARCHAR (50)
);

--ALTERANDO TABELA DEPOIS DE CRIADA
ALTER TABLE clientes
ADD email VARCHAR(100);

--MODIFICA TIPO DA TABELA
ALTER TABLE clientes
MODIFY email TEXT;

--MODIFICAR NOME E TIPO DE UMA COLUNA
ALTER TABLE clientes
CHANGE COLUMN email emailCliente VARCHAR(200);

--REMOVER UMA COLUNA
ALTER TABLE clientes
DROP COLUMN telefone;

--ALTERAR O NOME DE UMA TABELA
ALTER TABLE clientes
RENAME TO clientes2;

--DELETAR UMA TABELA
DROP TABLE clientes;

--INSERIR DADOS EM UMA TABELA, IGNORA OS ITENS QUE JA EXISTEM NA TABELA
INSERT IGNORE INTO clientes (idClientes, nome, email)
VALUES (1, 'João', 'joao@email.com'),
(2, 'Maria', 'maria@email.com');

--ATUALIZAR DADOS EM UMA TABELA
UPDATE clientes 
SET email = 'novoemail@email.com'
WHERE idClientes = 1; --condição

--DELETAR DADOS DE UMA TABELA
DELETE FROM clientes
WHERE idClientes = 1; --condição

--CONSULTA DADOS
SELECT idClientes, nome, email
FROM clientes;

--CONSULTA TODA TABELA
SELECT *
FROM clientes;

--CONSULTA COM CONDIÇÃO
SELECT email
FROM clientes
WHERE idClientes = 2;

--CONSULTA COM DADOS ORDENADOS
SELECT *
FROM clientes
ORDER BY nome ASC -- ou DESC