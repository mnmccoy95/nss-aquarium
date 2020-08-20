/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useLocations } from './LocationDataProvider.js';
import {Locations} from './Location.js';


export const locationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locationCard")
    const places = useLocations()

    let tipHTMLRepresentation = "";
    for (const place of places) {
        tipHTMLRepresentation += Locations(place);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${tipHTMLRepresentation}
    `
    

 
}