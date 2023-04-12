import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
