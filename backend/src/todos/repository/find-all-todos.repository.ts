import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindAllTodoRepository {
    constructor(private readonly prisma: PrismaService) {}
    async findMany (id: string){
        return await this.prisma.todo.findmany()
    }
}