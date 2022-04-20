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

create table Sensor (
idSensor int primary key auto_increment,
setor varchar(50),
fkCliente int,
foreign key (fkCliente) references cliente(idCliente)
);

create table registro (
idRegistro int primary key auto_increment,
temperatura_C float,
alerta_temp varchar(15),
umidade_UR float,
alerta_umi varchar(15),
data_hora datetime default current_timestamp,
fkSensor int,
foreign key (fkSensor) references sensor(idSensor),
estado varchar(40)
);

