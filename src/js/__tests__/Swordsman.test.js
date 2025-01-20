import Swordsman from '../Swordsman';

test('testing the Swordsman class for correct data when instantiating', () => {
  const result = new Swordsman('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Swordsman',
    health: 100,
    level: 1,    
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
