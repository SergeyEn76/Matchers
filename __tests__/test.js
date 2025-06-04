import { healthArrangement } from '../src/js/basic.js';
const testArray = [
        {name: 'первый', health: 25},
        {name: 'второй', health: 80},
        {name: 'третий', health: 55},
];
const answerArray = [
        {name: 'второй', health: 80},
        {name: 'третий', health: 55},
        {name: 'первый', health: 25},
];

test('check arrangement from max to min', () => {    
    const result = healthArrangement(testArray);
    expect(result).toEqual(answerArray);
});

test('check that toBe not worked', () => {
    const result = healthArrangement(testArray);
    expect(result).not.toBe(answerArray);
});