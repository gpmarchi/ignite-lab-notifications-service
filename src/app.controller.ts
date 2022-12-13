import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notifications.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content: 'content',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
