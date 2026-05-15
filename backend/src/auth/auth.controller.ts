import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
@Post('Register')
async register(@Body() data: RegisterDto) {
    return await this.authService.register(data);
}

@Post('login')
async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
}

}