import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup() {
    return 'This is signup route!';
  }

  signin() {
    return 'This is signin route!';
  }
}
