function healthArrangement(unitArray) {
    unitArray.sort((a, b) => {
        return b.health - a.health;
    });
    return unitArray;
};

module.exports = {
    healthArrangement
};