import Daemon from '../Daemon';

test('Testing the Daemon class for correct data when instantiating', () => {
  const result = new Daemon('Dragon');  
  const expected = {
    _name: 'Dragon',
    _type: 'Daemon',
    health: 100,
    level: 1,    
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
