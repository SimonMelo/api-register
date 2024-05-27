import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaJuridicaDto {
  @ApiProperty()
  razaoSocial: string;

  @ApiProperty()
  nomeFantasia: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  telefone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  endereco: string;
}
