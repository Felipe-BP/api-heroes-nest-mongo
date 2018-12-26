import { Model } from 'mongoose'
import { Injectable, Inject } from '@nestjs/common'
import { Heroes } from './heroes.interface'
import { CreateHeroesDto } from './create-heroes.dto'

@Injectable()
export class HeroesService {
    constructor(
        @Inject('HeroesModelToken')
        private readonly heroesModel : Model<Heroes>,
    ){}

    async create(createHeroesDto : CreateHeroesDto): Promise<Heroes> {
        const createdHeroes = new this.heroesModel(createHeroesDto);
        return await createdHeroes.save();
    }

    async findAllHeroes(): Promise<Heroes[]> {
        return await this.heroesModel.find().exec();
    }

    async findOne(id : string): Promise<Heroes> {
        return await this.heroesModel.find({"_id": id}).exec();
    }

    async findByName(name : string): Promise<Heroes[]> {
        if(!name) {
            return
        }
        return await this.heroesModel.find({"name": name}).exec();
    }

    async update(hero : Heroes): Promise<any> {
        return await this.heroesModel.update({"_id": hero}, { $set: { "name": hero.name } })
    }

    async delete(id : number): Promise<any> {
        return await this.heroesModel.deleteOne({"_id": id});
    }

}