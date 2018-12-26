import { Module } from '@nestjs/common'
import { HeroesController } from './heroes.controller'
import { HeroesService } from './heroes.service'
import { HeroesProvider } from './heroes.provider'
import { DatabaseModule } from '../database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers: [HeroesController],
    providers: [HeroesService, ...HeroesProvider,],
})
export class HeroesModule {}