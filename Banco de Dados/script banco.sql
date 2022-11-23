
create database taylorswift;
use taylorswift;


-- Table Usuario
create table Usuario (
  idUsuario int primary key auto_increment,
  Nome varchar(60),
  email varchar(45),
  senha varchar(45)
  );
select * from Usuario;

-- Table Quiz

create table Quiz (
  idQuiz int primary key auto_increment,
  qtdPontos int,
  fkUsuario int,
    foreign key (fkUsuario)
    references Usuario (idUsuario)
   ); 
  

-- Table Album

create table  Album (
  idAlbum int primary key auto_increment,
  nome varchar(45),
  fkQuiz int,
    foreign key (fkQuiz)
    references Quiz (idQuiz)
);


-- Table Musicas

create table Musicas (
  idMusicas int primary key auto_increment,
  Nome varchar(45) ,
  Single TINYINT ,
  fkAlbum int ,
    foreign key (fkAlbum)
    references Album (idAlbum)
);


