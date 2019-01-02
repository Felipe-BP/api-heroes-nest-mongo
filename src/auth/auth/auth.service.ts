import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken'

export enum Provider { GOOGLE = 'google' }

@Injectable()
export class AuthService {
    private readonly JWT_SECRET_KEY = 'sMIMmEw27uWpL9oTM5qxqJ4z+iWJcTXrgpHQ9BEd41uI9hVFfKXBIe3R27nWam/LA5j6x6PIDXlsulAoH/hWOzW+LkTeVDBR5OmOYZoDHaBcMcUNUHCet4sUHTQMYMHuOZ+SKHsMVRZFb49VsKeRa+ggOrExqD1RKKLfEy3Qcyh+jTPe98pB74U6jVtN5RhNTeeMwRQc/bP0XsjNJSnx3bAJCxqzEnldV2x4yoVsRSrcNhBQGFNA+IgyZlmFFmlzMtJ0/dpVB9DM5eBAEG/EE3Xn3WeKhWsoYSyNKyYuuzCQH4Y7rKCO/ucwmiXPJZWBih4IVyFAnHMUsM5qV+b7XA=='

    constructor(){}

    async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>{
        try{
            const payload = {
                thirdPartyId,
                provider
            }
            const jwt: string = sign(payload, this.JWT_SECRET_KEY, {expiresIn : 3600});
            return jwt;
        } catch (error) {
            throw new InternalServerErrorException('validateOAuthLogin', error.message);
        }
    }
}
