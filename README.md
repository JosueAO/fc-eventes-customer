# Atividade/Exercício: Full Cycle 3.0

## DDD: Modelagem Tática e Patterns

Neste exercício, você será introduzido ao conceito de Domain Events (Eventos de Domínio) usando TypeScript.

### Requisitos

1. **Evento ao Criar um novo Cliente (Customer)**  
   Quando um novo cliente é criado, dois handlers devem ser acionados para exibir mensagens no console.

    - **Handler1: EnviaConsoleLog1Handler**  
      Mensagem: "Esse é o primeiro console.log do evento: CustomerCreated".

    - **Handler2: EnviaConsoleLog2Handler**  
      Mensagem: "Esse é o segundo console.log do evento: CustomerCreated".

2. **Evento ao Mudar o Endereço de um Cliente (Customer)**  
   Quando o endereço de um cliente é alterado usando o método `changeAddress()`, um evento deve ser disparado.

    - **Handler: EnviaConsoleLogHandler**  
      Mensagem: "Endereço do cliente: {id}, {nome} alterado para: {endereco}".

### Testes

Todos os testes devem ser realizados para garantir o bom funcionamento dos eventos.

### Linguagem Utilizada

* A linguagem de programação para este desafio é TypeScript.

### Boa sorte!
