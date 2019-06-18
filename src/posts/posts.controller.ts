import { Controller, Get, Req, Query, Headers, Param, Post, Body } from '@nestjs/common';
import { request } from 'https';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
    @Get()
    index(@Headers() headers) {
        console.log(
            headers
            )
        return [
            {
                title:'hello!'
            }
        ]
    }

    @Get(':id')
    show(@Param() params) {
        return {
            title: `POST${params.id}`
        }
    }

    @Post()
    store(@Body() post: CreatePostDto) {
        console.log(post.title)
    }


}
