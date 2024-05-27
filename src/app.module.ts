/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PessoaFisicaModule } from './modules/pessoa-fisica/module';
import { PessoaJuridicaModule } from './modules/pessoa-juridica/module';

@Module({
  imports: [
    PessoaFisicaModule,
    PessoaJuridicaModule,
  ],
})
export class AppModule {}
