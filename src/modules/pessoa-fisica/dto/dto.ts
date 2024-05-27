/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaFisicaDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  dataNascimento: string;

  @ApiProperty({ enum: ['Masculino', 'Feminino', 'Outro'] })
  sexo: string;

  @ApiProperty()
  telefone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  endereco: string;
}
