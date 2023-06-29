import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have fistName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Bruno', 'Castro', '111.111');
    expect(sut).toHaveProperty('firstName', 'Bruno');
    expect(sut).toHaveProperty('lastName', 'Castro');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('Should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Bruno', 'Castro', '111.111');
    expect(sut.getName()).toBe('Bruno Castro');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Mercantil do José', '0001.');
    expect(sut).toHaveProperty('name', 'Mercantil do José');
    expect(sut).toHaveProperty('cnpj', '0001.');
  });

  it('Should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Mercantil do José', '0001.');
    expect(sut.getName()).toBe('Mercantil do José');
    expect(sut.getIDN()).toBe('0001.');
  });
});
