import * as mongoose from 'mongoose'

export const HeroesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});