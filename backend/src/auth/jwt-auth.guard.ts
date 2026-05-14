import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport"
// aqui é o ]
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}