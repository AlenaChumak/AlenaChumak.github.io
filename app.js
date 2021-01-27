
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

// function showModalByScroll() {
// 	if (window.pageYOffset > document.body.scrollHeight/2) {
// 		openModal();
// 		window.removeEventListener("scroll",showModalByScroll)
// 	}
	
// }
// window.addEventListener("scroll",showModalByScroll);




// change like button state

let likeButtons = document.querySelectorAll('.img-heart');

likeButtons.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		this.classList.toggle("liked")
	})

})

// change product count

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-quantity input");


// let currentCount = +quantityValue.value;
// let minCount = 1;
// let maxCount = 5;


// for (let i = 0; i < quantityValue.length; i++){
// 	let currentCount = +quantityValue[i].value;
// 	toggleButtonState(currentCount, decrementBtns[i],incrementBtns[i]);
// }


// function toggleButtonState(count,decrementBtn,incrementBtn) {
// 	decrementBtn.disabled = count <= minCount;
// 	incrementBtn.disabled = count >= maxCount;	
// }


// for (let i = 0; i < incrementBtns.length; i++){
// 	incrementBtns[i].addEventListener("click", function () {
// 	let currentCount = +quantityValue[i].value;
// 	let nexCount = currentCount + 1;
// 	quantityValue[i].value = nexCount;

// 	 toggleButtonState(nexCount,decrementBtns[i],incrementBtns[i])
// 	})
// }


// for (let i = 0; i < decrementBtns.length; i++) {
// 	decrementBtns[i].addEventListener("click", function () {
// 		let currentCount = +quantityValue[i].value;
// 		let nexCount = currentCount - 1;
// 		quantityValue[i].value = nexCount;

// 		toggleButtonState(nexCount,decrementBtns[i],incrementBtns[i])

// 	})
// }



// function constructor change product quantity

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 5) {
	
	this.domRefs = {
		incrementBtn,
		decrementBtn,
		inputField,
	}

	this.toggleButtonState = function () {
		let count = this.domRefs.inputField.value;
		this.domRefs.decrementBtn.disabled = count <= minCount;
		this.domRefs.incrementBtn.disabled = count >= maxCount;	
	}	

	this.toggleButtonState();

	this.increment = function () {
		console.log(this)
		let currentCount = +this.domRefs.inputField.value;
		let nexCount = currentCount + 1;
		this.domRefs.inputField.value = nexCount;

		this.toggleButtonState()
	}


	this.decrement = function () {
		console.log(this)
		let currentCount = +this.domRefs.inputField.value;
		let nexCount = currentCount - 1;
		this.domRefs.inputField.value = nexCount;

		this.toggleButtonState()
	}


	this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
	this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));

	console.log(this)
}

const counter = new Counter(incrementBtns[0],decrementBtns[0], quantityValue[0]);
// const counter1 = new Counter(incrementBtns[1],decrementBtns[1], quantityValue[1]);


// SLIDER SLICK

$(".slideshow-container").slick({
	dots: true,
	// nextArrow: '<i class="fa fa-angle-right"></i>',
        // prevArrow: '<i class="fa fa-angle-left"></i>',
	
});
