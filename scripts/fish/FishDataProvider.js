const fishCollection = [
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        food: "Flies",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Blorpy",
        species: "Blob Fish",
        length: "2 feet",
        food: "Sea Urchins",
        location: "Deep Darkness",
    },
    {
        image:"./bluefish.jpg",
        name: "Life of the Party (nickname Part)",
        species: "Crazinus Fishifus",
        length: "5 inches",
        food: "algae",
        location: "Beaches of Walmart",
    },
    {
        image:"./bluefish.jpg",
        name: "Buford",
        species: "Male Dopey Fish",
        length: "22 inches",
        food: "Diet Fish Kibble",
        location: "Gerrys Air Balloon and Fish Emporium",
    },
    {
        image:"./bluefish.jpg",
        name: "Fish Eater",
        species: "Who knows?",
        length: "1 inch",
        food: "Other fish",
        location: "Lake",
    },
    {
        image:"./bluefish.jpg",
        name: "Marlin",
        species: "Male Clown Fish",
        length: "2 inches",
        food: "Tears",
        location: "P. Sherman, 42 Wallaby Way, Sydney",
    },
    {
        image:"./bluefish.jpg",
        name: "Bart",
        species: "Clownfish",
		length: "5 inches",
		food: "crustaceans",
	    location: "Petco"
	},
	{
        image:"./bluefish.jpg",
        name: "Big Mac",
        species: "Giant sunfish",
		length: "6 feet",
		food: "jellyfish",
	    location: "Sam's Club Reef"
	},
	{
        image:"./bluefish.jpg",
        name: "Squigle",
        species: "Moray Eel",
		length: "2 feet",
		food: "smaller fish",
	    location: "Ole Dan's boat wreck"
	},
	{
        image:"./bluefish.jpg",
        name: "Hammy",
        species: "Groupers",
		length: "4 feet",
		food: "just about everything",
		location: "Jimmy's big boi fishin' spot"
	},
	{
        image:"./bluefish.jpg",
        name: "Tiny",
        species: "Blue Chromis",
		length: "1 inch",
		food: "plankton",
		location: "Young Dan's boat wreck"
    }
]
// export a function that will return a copy of the original array
// uses slice method to make the copy

export const useFish = () => {
    return fishCollection.slice()
}