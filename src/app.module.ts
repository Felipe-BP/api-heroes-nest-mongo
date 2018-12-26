import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module'

@Module({
  imports: [HeroesModule],
})
export class AppModule {}
