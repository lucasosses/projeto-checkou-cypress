import { faker } from '@faker-js/faker';

export function gerarUsuarioFaker() {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();

    return {
        nome,
        sobrenome,
        email: `${nome}.${sobrenome}@teste.com`.toLowerCase(),
        senha: faker.internet.password(),
        endereco: faker.location.streetAddress(),
        cidade: faker.location.city(),
        estado: faker.location.state(),
        cep: faker.location.zipCode(),
        telefone: faker.phone.number('(###) ###-####').replace(/\sx\d+/, '')

    };
}