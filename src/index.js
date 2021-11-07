import './css/style.css';
import {sortByHealth} from "./js/person";

const arr1 = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

console.log(arr1);

const sortedArray = sortByHealth(arr1);
console.log(sortedArray);
