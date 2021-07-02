const highPopulation = (arr) => arr.filter(ele => ele.population > 100000 ? ele : null)

const lowPopulation = (arr) => arr.filter(ele => ele.population < 100000 ? ele : null)

// RETURNS ONLY THE CITY NAMES WITH A POPULATION HIGHER THAN 100000
const bigCities = (array) => {
    const high = array.filter(ele => {
        if (ele.population > 100000) {
            return ele
        }
    })
    const cityHigh = high.map(ele => ele.city)
    return cityHigh
}

module.exports = {
    highPopulation,
    lowPopulation,
    bigCities
}