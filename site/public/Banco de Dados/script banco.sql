create database taylorswift;
use taylorswift;
drop database taylorswift;

-- Table Album
create table  Album (
  idAlbum int primary key auto_increment,
  nomeAlbum varchar(45),
  foto varchar(300)
);

select * from album;
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
    references Usuario (idUsuario),
  fkAlbum int,
  foreign key (fkAlbum)
    references Album (idAlbum)
   ); 

select * from quiz;

-- Table Musicas

create table Musicas (
  idMusicas int primary key auto_increment,
  Nome varchar(45) ,
  Single TINYINT ,
  fkAlbum int ,
    foreign key (fkAlbum)
    references Album (idAlbum)
);

desc album;
select * from album;
insert into Album values

	(null, 'Taylor Swift', 'assets/imgs/taylor swift.jfif'),
    (null, 'Fearless', 'assets/imgs/fearless.jfif'),
    (null, 'Speak Now', 'assets/imgs/speak now.jfif'),
    (null, 'RED', 'assets/imgs/red.jfif'),
    (null, '1989', 'assets/imgs/1989.jfif'),
    (null, 'Reputation', 'assets/imgs/reputation.jfif'),
    (null, 'Lover', 'assets/imgs/lover.jfif'),
    (null, 'Folklore', 'assets/imgs/folklore.jfif'),
    (null, 'Evermore', 'assets/imgs/evermore.jfif'),
    (null, 'Midnights', 'assets/imgs/midnigths.jfif');
    

desc Musicas;
select * from Musicas;

insert into Musicas values

-- singles 
(null, 'Our Song', 1, 1),
(null, 'Love Story', 1, 2),
(null, 'Mine', 1, 3),
(null, 'We Are Never Ever Getting Back Together', 1, 4),
(null, 'Shake It Off', 1, 5),
(null, 'Look What You Made Me Do', 1, 6),
(null, 'ME!', 1, 7),
(null, 'Cardigan', 1, 8),
(null, 'Willow', 1, 9),
(null, 'Anti-Hero', 1, 10);



-- teste select para API
select u.idUsuario , q.qtdPontos, a.foto, a.nomeAlbum, m.nome from Usuario as u 
	join Quiz as q on fkUsuario = idUsuario
		join Album as a on fkAlbum = idAlbum
			join Musicas as m on m.fkAlbum = idAlbum where idUsuario = 3;



-- teste select para validação API
select fkAlbum from quiz where fkUsuario = 1


--teste select para mostrar dados no grafico 
select fkAlbum, count(fkAlbum) as Album from quiz group by fkAlbum;





