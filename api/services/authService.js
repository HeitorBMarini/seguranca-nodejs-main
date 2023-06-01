class AuthService {
    async login(dto){
        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if (!usuario) { // ! verificar se usuário existe
            throw new Error('Usuario não cadastrado')
        }
    }
    
}

module.exports = AuthService