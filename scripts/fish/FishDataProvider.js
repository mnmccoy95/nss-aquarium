const fishCollection = [
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: 5,
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: 6,
        length: "2 inches",
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: 2,
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: 4,
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Blorpy",
        species: "Blob Fish",
        length: 1,
        food: "Sea Urchins",
        location: "Deep Darkness",
    },
    {
        image:"./bluefish.jpg",
        name: "Life of the Party (nickname Part)",
        species: "Crazinus Fishifus",
        length: 1.5,
        food: "algae",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Buford",
        species: "Male Dopey Fish",
        length: 3,
        food: "Diet Fish Kibble",
        location: "Gerrys Air Balloon and Fish Emporium",
    },
    {
        image:"./bluefish.jpg",
        name: "Fish Eater",
        species: "Who knows?",
        length: 5,
        food: "Other fish",
        location: "Lake",
    },
    {
        image:"./bluefish.jpg",
        name: "Marlin",
        species: "Male Clown Fish",
        length: 5,
        food: "Tears",
        location: "P. Sherman, 42 Wallaby Way, Sydney",
    },
    {
        image:"./bluefish.jpg",
        name: "Bart",
        species: "Clownfish",
		length: 6,
		food: "crustaceans",
	    location: "Petco"
	},
	{
        image:"./bluefish.jpg",
        name: "Big Mac",
        species: "Giant sunfish",
		length: 15,
		food: "jellyfish",
	    location: "Sam's Club Reef"
	},
	{
        image:"./bluefish.jpg",
        name: "Squigle",
        species: "Moray Eel",
		length: 7,
		food: "smaller fish",
	    location: "Ole Dan's boat wreck"
	},
	{
        image:"./bluefish.jpg",
        name: "Hammy",
        species: "Groupers",
		length: 7,
		food: "just about everything",
		location: "Jimmy's big boi fishin' spot"
	},
	{
        image:"./bluefish.jpg",
        name: "Tiny",
        species: "Blue Chromis",
		length: 7,
		food: "plankton",
		location: "Young Dan's boat wreck"
    }
]
// export a function that will return a copy of the original array
// uses slice method to make the copy

export const useFish = () => {
    return fishCollection.slice()
}

export const makeMostHolyFish = () => {
    //3,6,9
    const mostHolyFishArray = [];

    for(const theFish of fishCollection){
        if (theFish.length % 3 === 0){
            mostHolyFishArray.push(theFish);
        }
    }
    console.log("mostHolyFishArray", mostHolyFishArray);
    return mostHolyFishArray;
}

export const makeSoldierFish = () => {
    //5,10,20
    const soldierArray = [];
    for(const fishObj of fishCollection) {
        //divisible by only 5, not 3
        if (fishObj.length % 5 === 0 && fishObj.length % 3 !== 0) {
            soldierArray.push(fishObj);
        }
    }
    console.log("soldierArray", soldierArray);
    return soldierArray;
}

export const makeUnworthy = () => {
    //not divisible by 3 or 5
    const unworthyArray = [];
    for (const fishObj of fishCollection){
        if(fishObj.length % 5 !== 0 && fishObj.length % 3 !==0) {
            unworthyArray.push(fishObj);
        }
    }
    console.log("unworthyArray", unworthyArray);
    return unworthyArray;
}