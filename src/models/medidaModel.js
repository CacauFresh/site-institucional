var database = require("../database/config");

function buscarUltimasMedidas(fkSetor, limite_linhas) {
    instrucaoSql = `select 
                        temperatura_C, 
                        umidade_UR, 
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                    from historico join sensor on fkSensor = idSensor
                    where fkSetor = ${fkSetor}
                    order by idHistorico desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fkSetor) {
    instrucaoSql = `select 
                        temperatura_C, 
                        umidade_UR, DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico, 
                        fkSetor 
                        from historico join sensor on fkSensor = idSensor where fkSetor = ${fkSetor} 
                    order by idHistorico desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}