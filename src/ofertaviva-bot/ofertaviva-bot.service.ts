import { Injectable } from '@nestjs/common';
import { CreateOfertavivaBotDto } from './dto/create-ofertaviva-bot.dto';
import { UpdateOfertavivaBotDto } from './dto/update-ofertaviva-bot.dto';

@Injectable()
export class OfertavivaBotService {
  create(createOfertavivaBotDto: CreateOfertavivaBotDto) {
    return 'This action adds a new ofertavivaBot';
  }

  findAll() {
    return `This action returns all ofertavivaBot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertavivaBot`;
  }

  update(id: number, updateOfertavivaBotDto: UpdateOfertavivaBotDto) {
    return `This action updates a #${id} ofertavivaBot`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertavivaBot`;
  }
}
