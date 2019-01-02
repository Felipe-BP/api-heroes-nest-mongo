import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HeroesModule, AuthModule]
})
export class AppModule {}
