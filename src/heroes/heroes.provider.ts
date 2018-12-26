import { Connection } from 'mongoose'
import { HeroesSchema } from './schema/heroes.schema'

export const HeroesProvider = [
    {
        provide: 'HeroesModelToken',
        useFactory: (connection: Connection) => connection.model('Heroes', HeroesSchema),
        inject: ['DbConnectionToken'],
    },
];