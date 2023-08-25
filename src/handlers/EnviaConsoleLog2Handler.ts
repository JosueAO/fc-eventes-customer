import { Customer } from '../models/Customer';

export function EnviaConsoleLog2Handler(customer: Customer) {
  customer.on('CustomerCreated', () => {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  });
}

