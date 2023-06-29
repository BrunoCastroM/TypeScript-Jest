import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have property nama and price', () => {
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
    // posso testar assim também:
    expect(sut.price).toBeCloseTo(49.9);
  });
});
