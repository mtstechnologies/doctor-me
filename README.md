## Requisitos da API

A API deve garantir:

- [x] Garantir que a API tenha um código limpo e de fácil manutenção
- [x] Garantir que a API tenha uma forma ágil de acesso ao banco de dados
- [x] Garantir que a API tenha um tratamento de erros
- [x] Garantir que a API não pare quando algum erro for retornado
- [x] Garantir que a API valide qualquer payload recebido
- [x] Garantir que a API armazene senhas seguras
- [x] Garantir que a API isole as operações por casos de uso

A API deve ter os seguintes casos de uso:

- [x] Listar médicos
  - [x] Incluir no retorno a agenda de cada médico
- [x] Obter dados do médico
  - [x] Garantir que o ID de um médico foi enviado na chamada - Request
  - [x] Garantir que o ID do médico existe
  - [x] Retornar os dados do médico com a agenda
- [x] Obter dados do paciente
  - [x] Garantir o acesso somente a usuários autenticados - Request
  - [x] Garantir que o Telefone de um paciente foi enviado na chamada - Requesrt
  - [x] Garantir que o Telefone é de um paciente que existe
  - [x] Incluir no retorno os agendamentos
- [x] Criar conta do paciente
  - [x] Criar conta com nome, telefone e senha
  - [x] Garantir somente um usuário por telefone
- [x] Fazer login do paciente
  - [x] Garantir que o telefone é de um cadastro válido
- [x] Adicionar agendamento para o paciente
  - [x] Garantir que foi enviado o paciente e o id de agenda disponível - Request
  - [x] Garantir que a agenda está disponível

### Tabelas do sistema

- [x] Patient _Paciente_
  - _Campos: ID, UserID, Name, Phone, CreatedAt_
  - _Relações: Appointments[], User_
- [x] User
  - _Campos: ID, Phone, Password, CreatedAt_
  - _Relações: Patient_
- [x] Appointment
  - _Campos: ID, Date, Made, PatientID, DoctorID, CreatedAt_
  - _Relações: Patient, Doctor_
- [x] Doctor
  - _Campos: ID, FirstName, LastName, City, State, Speciality, Bio, Picture, Price, Availability, Experience, Attendances, Address, CreatedAt_
  - _Relações: Agenda, Appointment_
- [x] Agenda
  - _Campos: ID, Date, Available, DoctorID, CreatedAt_
  - _Relações: Doctor_
