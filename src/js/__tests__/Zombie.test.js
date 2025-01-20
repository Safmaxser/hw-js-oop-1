import Zombie from '../Zombie';

test('testing the Zombie class for correct data when instantiating', () => {
  const result = new Zombie('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Zombie',
    health: 100,
    level: 1,    
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
