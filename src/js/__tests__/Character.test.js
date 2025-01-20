import Character from '../Character';

test.each(['SM', 'Thanos', 'Spider-man'])
('testing the Character class for correctness of data when entering a name %s', (name) => {
  const result = new Character(name, 'Bowman', 0, 0);  
  const expected = {
    _name: name,
    _type: 'Bowman',
    health: 100,
    level: 1,    
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(expected);
});

test.each(['S', 'Super-puper'])
('testing the Character class for an error when an entered invalid name %s', (name) => {
  expect(() => new Character(name, 'Bowman', 0, 0)).toThrow(/Некорректное значение - name/);
});

test.each(['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'])
('testing the Character class for data validity when entering the type %s', (type) => {
  const result = new Character('Thanos', type, 0, 0);  
  const expected = {
    _name: 'Thanos',
    _type: type,
    health: 100,
    level: 1,    
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(expected);
});

test.each(['Superman', 'Wordsman'])
('testing the Character class for an error when an entered invalid type %s', (type) => {
  expect(() => new Character('Thanos', type, 0, 0)).toThrow(/Некорректное значение - type/);
});

test('testing the Character class to get a name', () => {
  const result = new Character('Thanos', 'Bowman', 0, 0).name; 
  expect(result).toBe('Thanos');
});

test('testing the Character class to get the type', () => {
  const result = new Character('Thanos', 'Swordsman', 0, 0).type; 
  expect(result).toBe('Swordsman');
});