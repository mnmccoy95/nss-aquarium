console.log("This is working!")
import { useFish, makeMostHolyFish, makeSoldierFish, makeUnworthy } from './fish/FishDataProvider.js';

import {FishList} from  './fish/FishList.js';

const allTheFish = useFish()
console.log("all the fish", allTheFish);

for (const fish of allTheFish) {
    console.log("the item is", fish);
}

FishList();

import { useTips } from './tips/TipDataProvider.js';

import { tipList } from './tips/TipList.js';

const allTheTips = useTips()
console.log("all the tips", allTheTips)

for (const tip of allTheTips) {
    console.log("the tip is", tip)
}

tipList();

import { useLocations } from './locations/LocationDataProvider.js';

import { locationList } from './locations/LocationList.js';

const allThePlaces = useLocations()
console.log("all the places", allThePlaces)

for (const place of allThePlaces) {
    console.log("the place is", place)
}

locationList();

