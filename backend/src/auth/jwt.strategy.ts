import 'dotenv/config';
import { Injectable } from "@nestjs/common";
import {ExtractJwt, Strategy} from "passport-jwt"

import {PassportStrategy} from "@nestjs/passport"

// aqui é o 
type JwtPayload = {
    sub: string;
    email: string;
};

@Injectable()
export class JwtStrategy extend PassportStrategy(Strategy) {
    constructor() {  

    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET as string,
    });
      }

       validate(payload: JwtPayload) {
        return {
            id: PayloadTooLargeException.sub,
            email: PayloadTooLargeException.email,
        }
      }
}