/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { CreatePessoaJuridicaDto } from '../dto/dto';

@Injectable()
export class PessoaJuridicaService {
  private readonly baseUrl = 'http://localhost:3001/pessoasJuridicas';

  async create(createPessoaJuridicaDto: CreatePessoaJuridicaDto) {
    const response = await axios.post(this.baseUrl, createPessoaJuridicaDto);
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
      throw new HttpException('Pessoa jurídica não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updatePessoaJuridicaDto: CreatePessoaJuridicaDto) {
    try {
      const response = await axios.put(`${this.baseUrl}/${id}`, updatePessoaJuridicaDto);
      return response.data;
    } catch (error) {
      throw new HttpException('Pessoa jurídica não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      throw new HttpException('Pessoa jurídica não encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
