import faker from 'faker';
import { createServer, Model, Factory } from "miragejs"
import moment from 'moment'

export function makeServer({ environment = "development" } = {}) {
    return createServer({
        environment,

        models: {
            user: Model,
            report: Model,
        },

        factories: {
            user: Factory.extend({
                profile_img() {
                    // la api que usa faker para las imagenes esta rota
                    // return faker.image.avatar()
                    return faker.image.people(400, 400);
                },
                first_name() {
                    return faker.name.firstName();
                },
                last_name() {
                    return faker.name.lastName();
                },
                email() {
                    return faker.internet.email();
                },
                sessions() {
                    return [moment(faker.date.past()).format("LL"), moment(faker.date.past()).format("LL"), moment(faker.date.past()).format("LL")]
                },
                last_session(){
                    const last = []
                    this.sessions.map(e => last.push(moment(e).fromNow()))
                    return last
                },
                status() {
                    return faker.random.boolean();
                },
                department() {
                    return faker.commerce.department();
                },
            }),
        },

        seeds(server) {

            server.createList('user', 10);

            server.create('report', { category: 'DUNNO', total: faker.random.number() });
            server.create('report', { category: 'I\'m boring', total: faker.random.number() });
            server.create('report', { category: 'Money', total: faker.random.number() });
            server.create('report', { category: 'Fun', total: faker.random.number() });

        },

        routes() {
            this.namespace = 'api'

            this.get('/users', (schema) => schema.users.all());
            this.get('/reports', (schema) => schema.reports.all());
        },
    });
}
