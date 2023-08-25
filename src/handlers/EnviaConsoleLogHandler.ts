import { Customer } from '../models/Customer';

export function EnviaConsoleLogHandler(customer: Customer) {
  customer.on('CustomerAddressChanged', (id, nome, endereco) => {
    console.log(`Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`);
  });
}
