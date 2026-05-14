import { PartialType } from '@nestjs/mapped-types';
import { CreateOfertavivaBotDto } from './create-ofertaviva-bot.dto';

export class UpdateOfertavivaBotDto extends PartialType(CreateOfertavivaBotDto) {}
