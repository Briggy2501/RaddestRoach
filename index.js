document.addEventListener('DOMContentLoaded', () => {
	// Controls
	const toggleBtn = document.querySelector('.toggle');
	const headerButton = document.querySelector('#headerButton');
	const contentButton = document.querySelector('#contentButton');
	const footerButton = document.querySelector('#footerButton');
	const header = document.querySelector('#head');
	const content = document.querySelector('.content');
	const footer = document.querySelector('.footer');
	
	const togglePopout = () => {
	  let target = document.querySelector(".popout-wrap");
	  target.classList.toggle("active");
	  if (toggleBtn.innerHTML === "Open") {
		toggleBtn.innerHTML = "Close"
	  } else {
		toggleBtn.innerHTML = "Open"
	  }
 	}

	// Change background
	const changeBG = (element) => {
	  let hex = document.querySelector("#myCode").value;
	  element.style.background = hex;
	}
	toggleBtn.addEventListener('click', togglePopout);

	headerButton.addEventListener('click', function() {
	  changeBG(header);
	});
	
	contentButton.addEventListener('click', function() {
	  changeBG(content);
	});
	
	footerButton.addEventListener('click', function() {
	  changeBG(footer);
	});
});