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

select temperatura_C, umidade_UR, data_hora from historico as h join sensor as s on h.fkSensor = s.idSensor where fkSetor = 