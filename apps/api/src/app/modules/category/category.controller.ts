import { Controller, Get, Post, Body } from '@nestjs/common';
import { create } from 'domain';

@Controller('category')
export class CategoryController {
  @Get()
  findAll() {}

  @Get('children')
  findChildren() {}

  @Post()
  create(@Body() category ) {}
}

