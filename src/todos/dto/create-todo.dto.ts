import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({
    description: 'Short title of the todo item',
    maxLength: 255,
    example: 'Complete project report',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'Detailed description (optional)',
    example: 'Need to finish before Friday meeting',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Completion status',
    example: false
  })
  @IsBoolean()
  status: boolean;
}
