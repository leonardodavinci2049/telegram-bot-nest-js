import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertavivaBotService } from './ofertaviva-bot.service';
import { CreateOfertavivaBotDto } from './dto/create-ofertaviva-bot.dto';
import { UpdateOfertavivaBotDto } from './dto/update-ofertaviva-bot.dto';

@Controller('ofertaviva-bot')
export class OfertavivaBotController {
  constructor(private readonly ofertavivaBotService: OfertavivaBotService) {}

  @Post()
  create(@Body() createOfertavivaBotDto: CreateOfertavivaBotDto) {
    return this.ofertavivaBotService.create(createOfertavivaBotDto);
  }

  @Get()
  findAll() {
    return this.ofertavivaBotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertavivaBotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfertavivaBotDto: UpdateOfertavivaBotDto) {
    return this.ofertavivaBotService.update(+id, updateOfertavivaBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertavivaBotService.remove(+id);
  }
}
