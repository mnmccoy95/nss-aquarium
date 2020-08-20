export const Fish = (fish) => {
    return `
				<div class="fishList-card">
					<div class="card-image">
						<img class="fish-image" src="images/${fish.image}" alt="Dopey Bugeye Fish">
					</div>
					<ul>
						<li>Given Name: ${fish.name} </li>
						<li>Species: ${fish.species}</li>
						<li>Length: ${fish.length}</li>
						<li>Diet: ${fish.food}</li>
						<li>Harvest Location: ${fish.location}</li>
					</ul>
			 </div>
    `
}