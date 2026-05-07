import { IsString } from "class-validator";

// aqui é o 
export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}