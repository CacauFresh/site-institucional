create database cacaufresh;

use cacaufresh;
 
CREATE TABLE Empresa (
  idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(30),
  CEP CHAR(9),
  rua VARCHAR(100),
  CNPJ CHAR(18),
  telefone VARCHAR(20),
  estado CHAR(45));
  
  CREATE TABLE usuario (
  idusuario INT PRIMARY KEY auto_increment,
  nome VARCHAR(45) ,
  email VARCHAR(100) ,
  senha VARCHAR(20) ,
  fkEmpresa INT ,
  FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa));
  select * from usuario;
  
create table setor (
idSetor int primary key auto_increment,
nome_setor varchar(50),
fkEmpresa int,
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table Sensor (
idSensor int primary key auto_increment,
nome_sensor varchar(50),
fkSetor int,
foreign key (fkSetor) references setor(idSetor)
);

create table historico (
idHistorico int primary key auto_increment,
temperatura_C float,
umidade_UR float,
data_hora datetime default current_timestamp,
fkSensor int,
foreign key (fkSensor) references sensor(idSensor)
);

insert into  empresa (nome, cep , rua, CNPJ, telefone, estado)
VALUES ('chocotop' , '09551020' , 'rua manoel coelho 158' , '03455894658754' , '5511998765321' , 'sp'),
		('cacaufarm' , '09754250' , 'av. goias 1020' , '05875412596548', '5511965305579' , 'sp'),
        ('cocoaking' , '09754015' , 'av.presidente kennedy 1649' , '04896578454121' , '5511963254479' , 'sp');

insert into usuario (nome, email, senha, fkEmpresa)
values  ('Fernanda Caramico' , 'fernanda@sptech.school' , 'sptech123*', 1),
		('Fernando Brandao' , 'brandao@sptech.school' , 'sptech456*', 1),
        ('Thiago Bonacelli' , 'thiago@sptech.school' , 'sptech789*', 2 );

insert into setor (nome_setor, fkEmpresa)
values  ('setor1' , 1),
		('setor2' , 1),
        ('setor3' , 1),
        ('setor1' , 2),
        ('setor2' , 2),
        ('setor1' , 3),
        ('setor2' , 3),
        ('setor3' , 3);

insert into sensor (nome_sensor, fkSetor)
values  ('sensorA' , 1),
		('sensorB' , 2),
        ('sensorC' , 3),
        ('sensorD' , 4),
        ('sensorE' , 5),
        ('sensorF' , 6),
        ('sensorG' , 7),
        ('sensorH' , 8);
        
        
insert into historico (temperatura_C , umidade_UR, fkSensor)
values 				(23 , 78 , 1 ),
					(25 , 75 , 2 ),
                    (22 , 81 , 3 ),
                    (23 , 77 , 4 ),
                    (26 , 76 , 5 ),
                    (24 , 80 , 6 ),
                    (29 , 72 , 7 ),
                    (27 , 77 , 8 );