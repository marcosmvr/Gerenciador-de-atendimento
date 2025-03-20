class Tabelas {
  init(connection) {
    this.connection = connection
    this.criarTabelaAtendimentos()
  }

  criarTabelaAtendimentos() {
    const sql = `
    CREATE TABLE IF NOT EXISTS atendimentos (  
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DATA DATE,
    servico VARCHAR(100),
    CLIENTE VARCHAR(100),
    status ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
    );
    `
    this.connection.query(sql, error => {
      if (error) {
        console.log('Deu erro na criação de tabela atendimento')
        console.log(error.message)
        return
      }
      console.log('Deu certo ao criar a tabela de atendimentos')
    })
  }
}

module.exports = new Tabelas()
