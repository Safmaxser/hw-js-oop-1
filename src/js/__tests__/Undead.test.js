import Undead from '../Undead';

test('Testing the Undead class for correct data when instantiating', () => {
  const result = new Undead('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Undead',
    health: 100,
    level: 1,    
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
