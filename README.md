# Projeto Full Stack - Java e React

## Descrição
Este repositório contém um projeto full stack utilizando Java (Spring Boot) para o backend e React para o frontend. O backend se comunica com um banco de dados MySQL para gerenciar uma tabela chamada `foods`, que armazena `id`, `price`, `title`, e `image`.

## Estrutura do Projeto
O projeto está dividido em duas pastas principais:
- `backend`: Contém o código do servidor em Java com Spring Boot.
- `frontend`: Contém o código do cliente em React.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Java JDK 11+](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Node.js e npm](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Configuração do Backend

### Passo 1: Configurar o Banco de Dados MySQL
1. Crie um banco de dados no MySQL:
   ```sql
   CREATE DATABASE foods_db;
   ```
Atualize o arquivo application.properties com suas credenciais do MySQL:

```java
properties
spring.datasource.url=jdbc:mysql://localhost:3306/foods_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
```

### Passo 2: Executar o Servidor Backend
Navegue até a pasta do backend:

```bash
cd backend
```
Compile e execute o servidor:
```bash
./mvnw spring-boot:run
```

## Configuração do Frontend
### Passo 1: Instalar Dependências
Navegue até a pasta do frontend:
```bash
cd frontend
```
Instale as dependências do projeto:
```bash
npm install
```

### Passo 2: Executar o Servidor Frontend
Inicie o servidor de desenvolvimento:
```bash
npm start
```

## Como Usar
O backend estará rodando em http://localhost:8080.

O frontend estará rodando em http://localhost:3000.

## Estrutura de Diretórios

```plaintext
.
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── seu_pacote
│   │   │   │           └── ... (código Java)
│   │   └── resources
│   │       └── application.properties
│   └── ... (arquivos de configuração do Spring Boot)
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── ... (componentes React)
│   │   ├── App.js
│   │   └── ... (outros arquivos React)
│   └── ... (arquivos de configuração do React)
```

## Contribuição
1. Faça um fork do projeto.

2. Crie uma branch para sua feature (git checkout -b feature/fooBar).

3. Commit suas mudanças (git commit -am 'Add some fooBar').

4. Push para a branch (git push origin feature/fooBar).

5. Abra um Pull Request.

## Licença
- Distribuído sob a licença MIT.
- Veja LICENSE para mais informações.
