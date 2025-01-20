import Magician from '../Magician';

test('testing the Magician class for correct data when instantiating', () => {
  const result = new Magician('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Magician',
    health: 100,
    level: 1,    
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
