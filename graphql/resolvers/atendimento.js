const Operacoes = require('../../infraestrutura/operations')

const Atendimentos = new Operacoes('atendimento')

const resolver = {
   Query: {
      atendimentos: () => Atendimentos.lista()
   },
   Mutation: {
      adicionarAtendimento: (root, params) => Atendimentos.adiciona(params)
   }

}
module.exports = resolver