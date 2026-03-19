import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindAllTodoRepository, UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase{
    constructor(
    private readonly updateTodoRepository: UpdateTodoRepository,
    private readonly findTodoByIdRepository: FindAllTodoRepository,
    private readonly logger: Logger, 
   ) {}

   async execute(id: number, data: UpdateTodoDto) {
    try {
        this.logger.log('Updating ToDo...')
        const todo = await this.updateTodoRepository.update(id,data);
        if(!todo) {
            throw new NotFoundException('ToDo not found');
        }
        await this.updateTodoRepository.update(id,data);
        this.logger.log('Todo deleted secessfuly')
        return todo;
     }  catch (error) {
         this.logger.error(error);
         throw error;
     }
}
}