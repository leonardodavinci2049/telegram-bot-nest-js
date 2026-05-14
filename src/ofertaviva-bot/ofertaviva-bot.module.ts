import { Module } from '@nestjs/common';
import { OfertavivaBotService } from './ofertaviva-bot.service';
import { OfertavivaBotController } from './ofertaviva-bot.controller';

@Module({
  controllers: [OfertavivaBotController],
  providers: [OfertavivaBotService],
})
export class OfertavivaBotModule {}
