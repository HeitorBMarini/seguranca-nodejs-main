const database = require('../models')

const permissoes = (listaPermissoes) => {
    return async (req, res, next) => {
        const { usuarioId } = req

        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.permissoes,
                    as : 'usuarios_permissoes',
                    attributes: ['id', 'nome']
                }
            ],
            where: {
                id: usuarioId
            }
        })
        if(!usuario){
            return res.status(401).send('Usuário não cadastrado')
        }
        constPermissoesCdastradas = usuario.usuario_permissoes
        .map((permissao) => permissoes.nome)
        .some((permissao) => listaPermissoes.includes(permissao))

            if(!permissoesCadastradas){
                return res.status(401).send('Usuário não possui acesso para essa rota')
            }

            return next()
    }
}
    module.exports = permissoes