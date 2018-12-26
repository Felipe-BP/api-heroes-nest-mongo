import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common'
import { CreateHeroesDto } from './create-heroes.dto'
import { HeroesService } from './heroes.service'
import { Heroes } from './heroes.interface'

@Controller('heroes')
export class HeroesController {

    constructor(private readonly heroesService : HeroesService){}

    @Get()
    async findAll() : Promise<Heroes[]> {
        return this.heroesService.findAllHeroes();
    }

    @Get(':id')
    async findOne(@Param() params) : Promise<Heroes> {
        return this.heroesService.findOne(params.id);
    }
    
    @Get('?name=:name')
    async search(@Param() params) : Promise<Heroes[]> {
        return this.heroesService.findByName(params.name);
    }

    @Post()
    async create(@Body() hero : CreateHeroesDto) {
        this.heroesService.create(hero);
    }

    @Put()
    async update(@Body() hero : Heroes) {
        this.heroesService.update(hero);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.heroesService.delete(params.id);
    }
}