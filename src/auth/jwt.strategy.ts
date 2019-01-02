import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from './auth/auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly authService : AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'sMIMmEw27uWpL9oTM5qxqJ4z+iWJcTXrgpHQ9BEd41uI9hVFfKXBIe3R27nWam/LA5j6x6PIDXlsulAoH/hWOzW+LkTeVDBR5OmOYZoDHaBcMcUNUHCet4sUHTQMYMHuOZ+SKHsMVRZFb49VsKeRa+ggOrExqD1RKKLfEy3Qcyh+jTPe98pB74U6jVtN5RhNTeeMwRQc/bP0XsjNJSnx3bAJCxqzEnldV2x4yoVsRSrcNhBQGFNA+IgyZlmFFmlzMtJ0/dpVB9DM5eBAEG/EE3Xn3WeKhWsoYSyNKyYuuzCQH4Y7rKCO/ucwmiXPJZWBih4IVyFAnHMUsM5qV+b7XA=='
        })
    }

    async validate(payload, done: Function) {
        console.log('fsndfnsd')
        try{
            done(null, payload)
        } catch(error){
            console.log(error.message)
            throw new UnauthorizedException('unauthorized', error.message)
        }
    }

}