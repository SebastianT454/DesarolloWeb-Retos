import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ImageService } from './image.service';
import { UploadImageDto } from './dto/upload-image.dto';
import { AddComment } from './dto/add-comment.dto';
import { AuthGuard } from 'src/security/auth/auth.guard';
import { RoleGuard } from 'src/security/role/role.guard';

@Controller('v1/image')
export class ImageController {

  constructor(private readonly imageService: ImageService) {}


  @UseGuards(AuthGuard, RoleGuard) // Aqui verificamos el token, obtenemos el usuario y el RoleGuard verifica que si sea el que hizo la misma request.
  @Post()
  uploadImage(@Body() uploadImageDto:UploadImageDto){
    console.log(uploadImageDto)
    return this.imageService.uploadImage(uploadImageDto);
  }

  @UseGuards(AuthGuard) // Esto no estaba pero para diferencia, acá esta el AuthGuard que verificara si el token es valido.
  @Post("add/comment")
  addComment(@Body() comment:AddComment){
    return this.imageService.addComment(comment);
  }

  deleteImage(){

  }

  deleteComment(){

  }

  @UseGuards(AuthGuard, RoleGuard) // Aqui verificamos el token, obtenemos el usuario y el RoleGuard verifica que si sea el que hizo la misma request.
  @Get("gallery/:id")
  getGalleryByUserId(@Param("id") userId: string, @Query("page") page:string, @Query("pageSize") pageSize:string){
    console.log({page, pageSize})
    return this.imageService.getGalleryByUserId(userId, +page||1, +pageSize||100);
  }
  
}
