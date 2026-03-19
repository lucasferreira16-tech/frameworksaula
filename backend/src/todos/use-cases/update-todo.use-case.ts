import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindUniqueTodoRepository, UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase{
    constructor(
    private readonly updateTodoRepository: UpdateTodoRepository,
    private readonly findTodoByIdRepository: FindUniqueTodoRepository,
    private readonly logger: Logger, 
   ) {}

   async execute(id: string, data: UpdateTodoDto) {
    try {
        this.logger.log('Updating ToDo...')
        const todo = await this.findTodoByIdRepository.findById(id);
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