import { EventEmitter } from 'events';

export class Customer extends EventEmitter {
  constructor(public id: string, public nome: string, public endereco: string) {
    super();
    this.emit('CustomerCreated');
  }

  changeAddress(newAddress: string) {
    this.endereco = newAddress;
    this.emit('CustomerAddressChanged', this.id, this.nome, this.endereco);
  }
}
