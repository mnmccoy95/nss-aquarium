/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useTips } from './TipDataProvider.js';
import {Tips} from './Tip.js';


export const tipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tipCard")
    const tips = useTips()

    let tipHTMLRepresentation = "";
    for (const tip of tips) {
        tipHTMLRepresentation += Tips(tip);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${tipHTMLRepresentation}
    `
    

 
}