import { Document } from 'mongoose'

export interface Heroes extends Document {
    readonly name : string;
}