import { Customer } from './models/Customer';
import { CustomerCreatedEvent } from './events/CustomerCreatedEvent';
import { CustomerAddressChangedEvent } from './events/CustomerAddressChangedEvent';
import { EnviaConsoleLog1Handler } from './handlers/EnviaConsoleLog1Handler';
import { EnviaConsoleLog2Handler } from './handlers/EnviaConsoleLog2Handler';
import { EnviaConsoleLogHandler } from './handlers/EnviaConsoleLogHandler';

const customer = new Customer('1', 'Josue', 'Rua 1001 Planeta Terra');

// Registra eventos e handlers
CustomerCreatedEvent(customer);
CustomerAddressChangedEvent(customer);
EnviaConsoleLog1Handler(customer);
EnviaConsoleLog2Handler(customer);
EnviaConsoleLogHandler(customer);

// Teste: Altera o endereço do cliente
customer.changeAddress('Rua 1002 Planeta Terra2');
