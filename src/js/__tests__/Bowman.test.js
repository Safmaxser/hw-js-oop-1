import Bowman from '../Bowman';

test('testing the Bowman class for correct data when instantiating', () => {
  const result = new Bowman('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Bowman',
    health: 100,
    level: 1,    
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});
