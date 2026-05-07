// aqui é o 
import { IsOptional, IsString } from "class-validator";

// aqui é o 
export class RegisterDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}