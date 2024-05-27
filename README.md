# Documentação da API - Cadastro PF e PJ
Cadastro PF e PJ API
Esta é uma API RESTful para o cadastro de pessoas físicas (PF) e pessoas jurídicas (PJ). A API permite que os usuários realizem operações CRUD (Create, Read, Update, Delete) sobre os dados cadastrais de indivíduos e empresas.

## Base URL

http://localhost:3000

## Endpoints

### Pessoa Física

#### Listar Pessoas Físicas

- **Endpoint:** `/pessoa-fisica`
- **Método HTTP:** GET
- **Descrição:** Retorna uma lista de todas as pessoas físicas cadastradas.
- **Parâmetros de consulta:** Nenhum.
- **Resposta de Sucesso:**
  - **Código:** 200
  - **Conteúdo:** Lista de objetos JSON, cada um representando uma pessoa física.
- **Exemplo de Resposta:**

  ```json
  [
    {
      "nome": "João Silva",
      "cpf": "123.456.789-00",
      "dataNascimento": "1980-01-01",
      "sexo": "Masculino",
      "telefone": "(11) 12345-6789",
      "email": "joao.silva@example.com",
      "endereco": "Rua Exemplo, 123"
    },
    {
      "nome": "Maria Souza",
      "cpf": "987.654.321-00",
      "dataNascimento": "1990-05-15",
      "sexo": "Feminino",
      "telefone": "(11) 98765-4321",
      "email": "maria.souza@example.com",
      "endereco": "Avenida Exemplo, 456"
    }
  ]
  ```

  Criar Pessoa Física
  Endpoint: /pessoa-fisica
  Método HTTP: POST
  Descrição: Cria uma nova pessoa física.
  Parâmetros de entrada: Objeto JSON com os dados da pessoa física.
  Exemplo de Parâmetro de entrada:

  ```json
  {
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "dataNascimento": "1980-01-01",
  "sexo": "Masculino",
  "telefone": "(11) 12345-6789",
  "email": "joao.silva@example.com",
  "endereco": "Rua Exemplo, 123"
  }
  ```

  Resposta de Sucesso:
  Código: 201
  Conteúdo: Objeto JSON representando a pessoa física criada.
  ```json
  {
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "dataNascimento": "1980-01-01",
  "sexo": "Masculino",
  "telefone": "(11) 12345-6789",
  "email": "joao.silva@example.com",
  "endereco": "Rua Exemplo, 123"
  }
  ```

Pessoa Jurídica
Listar Pessoas Jurídicas
Endpoint: /pessoa-juridica
Método HTTP: GET
Descrição: Retorna uma lista de todas as pessoas jurídicas cadastradas.
Parâmetros de consulta: Nenhum.
Resposta de Sucesso:
Código: 200
Conteúdo: Lista de objetos JSON, cada um representando uma pessoa jurídica.

Exemplo de Resposta:

```json
[
  {
    "razaoSocial": "Empresa Exemplo Ltda",
    "nomeFantasia": "Empresa Exemplo",
    "cnpj": "12.345.678/0001-99",
    "telefone": "(11) 98765-4321",
    "email": "contato@empresaexemplo.com",
    "endereco": "Avenida Exemplo, 456"
  }
]
```

Criar Pessoa Jurídica
Endpoint: /pessoa-juridica
Método HTTP: POST
Descrição: Cria uma nova pessoa jurídica.
Parâmetros de entrada: Objeto JSON com os dados da pessoa jurídica.

Exemplo de Parâmetro de entrada:

```json
{
  "razaoSocial": "Empresa Exemplo Ltda",
  "nomeFantasia": "Empresa Exemplo",
  "cnpj": "12.345.678/0001-99",
  "telefone": "(11) 98765-4321",
  "email": "contato@empresaexemplo.com",
  "endereco": "Avenida Exemplo, 456"
}
```

Resposta de Sucesso:
Código: 201
Conteúdo: Objeto JSON representando a pessoa jurídica criada.

Exemplo de respostas:

```json
{
  "razaoSocial": "Empresa Exemplo Ltda",
  "nomeFantasia": "Empresa Exemplo",
  "cnpj": "12.345.678/0001-99",
  "telefone": "(11) 98765-4321",
  "email": "contato@empresaexemplo.com",
  "endereco": "Avenida Exemplo, 456"
}
```
