import {sortByHealth} from '../person';

test('Test sort hero', () =>{
    const array1 = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'лучник2', health: 100},
    ];
    const expectedArray = [
        {name: 'маг', health: 100},
        {name: 'лучник2', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    const newArr = sortByHealth(array1);
    expect(newArr).toEqual(expectedArray);
    expect(newArr).not.toBe(expectedArray);
})

    test('не сработает тест с toBe', () =>{
        const array1 = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'лучник2', health: 100},
        ];
        const expectedArray = [
            {name: 'маг', health: 100},
            {name: 'лучник2', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ];
        const newArr = sortByHealth(array1);
        expect(newArr).not.toBe(expectedArray);
    })
