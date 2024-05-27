/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PessoaJuridicaService } from '../service/service';
import { CreatePessoaJuridicaDto } from '../dto/dto';

@Controller('pessoa-juridica')
export class PessoaJuridicaController {
  constructor(private readonly pessoaJuridicaService: PessoaJuridicaService) {}

  @Post()
  create(@Body() createPessoaJuridicaDto: CreatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.create(createPessoaJuridicaDto);
  }

  @Get()
  findAll() {
    return this.pessoaJuridicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pessoaJuridicaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePessoaJuridicaDto: CreatePessoaJuridicaDto) {
    return this.pessoaJuridicaService.update(id, updatePessoaJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pessoaJuridicaService.remove(id);
  }
}
