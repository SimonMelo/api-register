/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PessoaFisicaController } from './controller/controller';
import { PessoaFisicaService } from './service/service';

@Module({
  controllers: [PessoaFisicaController],
  providers: [PessoaFisicaService],
})
export class PessoaFisicaModule {}
