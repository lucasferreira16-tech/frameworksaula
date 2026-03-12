import { IsDateString, IsNotEmpty, IsOptional, IsString ,IsBoolean, IsEnum} from "class-validator";


enum TodoPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export class CreateTodoDto{
  @IsString()
  title: string;

  @IsString() 
  @IsOptional()
  descripition?: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsEnum(TodoPriority)
  @IsNotEmpty()
  priority: TodoPriority;

  @IsDateString()
  @IsOptional()
  dueAt?: Date;

  @IsDateString()
  completedAt: Date;

  @IsDateString()
  userId: string;

  @IsDateString() 
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}