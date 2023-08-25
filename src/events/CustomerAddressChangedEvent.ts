import { Customer } from '../models/Customer';

export function CustomerAddressChangedEvent(customer: Customer) {
  customer.on('CustomerAddressChanged', (id, nome, endereco) => {
    console.log(`Evento: Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`);
  });
}
