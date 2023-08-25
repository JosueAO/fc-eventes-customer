import { Customer } from '../models/Customer';

export function CustomerCreatedEvent(customer: Customer) {
  customer.on('CustomerCreated', () => {
    console.log("Evento: Customer criado!");
  });
}
