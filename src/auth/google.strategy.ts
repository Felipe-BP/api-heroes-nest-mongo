import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-google-oauth20'
import { AuthService, Provider } from './auth/auth.service'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(private readonly authService : AuthService){
        super({
            clientID: '372738843622-gbcs2a4e1ss7cq3g8r25qdrojaus54r4.apps.googleusercontent.com',
            clientSecret: 'jcFn9YJC317WbWGFohvlYh6y',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile']
        })
    }

    async validate(req: any, accessToken: string, refreshToken: string, profile, done: Function){
        try{
            console.log(profile)
            const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE)
            const user = { jwt }
            done(null, user)
        } catch (error){
            done(error, false)
        }
    }

}