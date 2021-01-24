
// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function () {
		productsCountEl.textContent = +productsCountEl.textContent+1;
		
	})
}

// modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((btn) => {
	btn.addEventListener("click", openModal) 
			
})

function openModal() {
	modal.classList.add("show");
	modal.classList.remove("hide");
}	


function closeModal() {
	modal.classList.add("hide");
	modal.classList.remove("show");
}
 
closeBtn.addEventListener("click", closeModal) 

modal.addEventListener("click", function (e) {
	if (e.target == modal) {
		closeModal()
	}
	
})

function showModalByScroll() {
	if (window.pageYOffset > document.body.scrollHeight/2) {
		openModal();
		window.removeEventListener("scroll",showModalByScroll)
	}
	
}
window.addEventListener("scroll",showModalByScroll);

// console.log(window.pageYOffset)
// console.log(document.body.scrollHeight)



// change like button state

let likeButtons = document.querySelectorAll('.img-heart');

likeButtons.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		this.classList.toggle("liked")
	})


	// btn.addEventListener("click", function () {
	// 	if (this.classList.contains("liked")) {
	// 		this.classList.remove("liked")
	// 	} else {
	// 		this.classList.add("liked")
	// 	}
	
})