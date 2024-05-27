/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { CreatePessoaFisicaDto } from '../dto/dto';

@Injectable()
export class PessoaFisicaService {
  private readonly baseUrl = 'http://localhost:3001/pessoasFisicas';

  async create(createPessoaFisicaDto: CreatePessoaFisicaDto) {
    const response = await axios.post(this.baseUrl, createPessoaFisicaDto);
    return response.data;
  }

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async findOne(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new HttpException('Pessoa física não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updatePessoaFisicaDto: CreatePessoaFisicaDto) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}`, updatePessoaFisicaDto);
      return response.data;
    } catch (error) {
      throw new HttpException('Pessoa física não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      throw new HttpException('Pessoa física não encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
