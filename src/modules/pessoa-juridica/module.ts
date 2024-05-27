/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PessoaJuridicaController } from './controller/controller';
import { PessoaJuridicaService } from './service/service';

@Module({
  controllers: [PessoaJuridicaController],
  providers: [PessoaJuridicaService],
})
export class PessoaJuridicaModule {}
