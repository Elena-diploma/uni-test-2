
export function sortByHealth (array) {
    let arrToSort = [...array];
    arrToSort.sort(function (a, b) {
            if (a.health > b.health) {
                return -1;
            }
            if (a.health < b.health) {
                return 1;
            }
            else return 0;
        });
    return arrToSort;
}