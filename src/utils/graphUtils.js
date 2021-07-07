export const getHoursGraphAxis = () => {
    var times = [];
    const date = new Date();
    const actualHours = date.getHours();
    const actualMinutes = String(date.getMinutes()).padStart(2, '0');

    const subtract = (subtract) => {
        return String(
            actualHours - subtract < 0 ?
            24 + actualHours - subtract :
            actualHours - subtract
        );
    };

    for (var i = 0; i < 12; i++) {
        times.unshift(subtract(i).padStart(2, '0') + ':' + actualMinutes);
    }
    return times;
};