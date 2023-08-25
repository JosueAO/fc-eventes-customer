import { Customer } from '../models/Customer';

export function EnviaConsoleLog1Handler(customer: Customer) {
  customer.on('CustomerCreated', () => {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  });
}
