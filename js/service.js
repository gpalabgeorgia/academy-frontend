// ====================================================================== Services =================================================================
const detailsButton = document.querySelectorAll('.services-block-info-box');
const serviceList = document.querySelectorAll('.services-block-content');
detailsButton.forEach(btn =>{
	btn.addEventListener('click', () => {
		serviceList.forEach(list => {
			list.classList.remove('services-list-active')
		})
		btn.parentElement.classList.add('services-list-active')
	})
}) 