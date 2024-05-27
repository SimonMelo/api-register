/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PessoaFisicaService } from '../service/service';
import { CreatePessoaFisicaDto } from '../dto/dto';

@Controller('pessoa-fisica')
export class PessoaFisicaController {
    constructor(private readonly pessoaFisicaService: PessoaFisicaService) { }

    @Post()
    create(@Body() createPessoaFisicaDto: CreatePessoaFisicaDto) {
        return this.pessoaFisicaService.create(createPessoaFisicaDto);
    }

    @Get()
    findAll() {
        return this.pessoaFisicaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.pessoaFisicaService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatePessoaFisicaDto: CreatePessoaFisicaDto) {
        return this.pessoaFisicaService.update(id, updatePessoaFisicaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.pessoaFisicaService.remove(id);
    }
}
