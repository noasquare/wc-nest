import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { request } from 'https';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from '../../core/filters/demo.filter';
import { DemoAuthGuard } from '../../core/guards/demo-auth.guard';

@Controller('posts')
// @UseFilters(DemoFilter)
@UseGuards(DemoAuthGuard)
export class PostsController {
    constructor(private readonly demoService: DemoService) {
        this.demoService = demoService
    }
    @Get()
    index() {
       return this.demoService.findAll();
    }

    @Get(':id')
    show(@Param('id',ParseIntPipe) id) {
        console.log('id:', typeof id);
        
        return {
            title: `POST ${id}`
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    store(@Body() post: CreatePostDto) {
        this.demoService.create(post);
        // throw new HttpException('no promition',HttpStatus.FORBIDDEN);

    }


}
