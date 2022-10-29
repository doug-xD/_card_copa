let changeBg = true
function changeCard(event){
	const card = event.currentTarget
	const bg = changeBg ? "explorer" : "ignite"
	card.style.backgroundImage = `url(./assets/back_${bg}.svg)`
	changeBg = !changeBg
}
