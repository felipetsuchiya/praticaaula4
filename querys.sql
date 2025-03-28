CREATE DATABASE productsDb;

USE productsDb;



CREATE TABLE products (

id INT PRIMARY KEY AUTO_INCREMENT,

  nome_do_produto VARCHAR(255) NOT NULL,

  fornecedor VARCHAR(255) NOT NULL,

  endereco_fornecedor VARCHAR(255) NOT NULL,

  quantidade INT NOT NULL,

  descricao VARCHAR(255) NOT NULL,
  
  data_registro DATETIME NOT NULL,

  data_update DATETIME NOT NULL

)



insert into products (nome_do_produto, fornecedor, endereco_fornecedor, quantidade, descricao)

values ('Redmi Note 11', 'Xiaomi', 'Rua Xiaomi, bairro X', "1", "Tem uma enorme tela Touchscreen de 6.43 polegadas com uma resolução de 2400x1080 pixel. Sobre as características deste Redmi Note 11 na verdade não falta nada."),