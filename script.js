
//This is code for popup form.
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}







// this code for table and form.

		var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
    var list5 = [];


		var n = 1;
		var x = 0;
    var idNumber = 1;

		function AddRow(){

      var d = new Date().toString();
      var index = d.lastIndexOf(':') +3
      var timestamp1 = d.substring(0, index);

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("fname").value;
      list2[x] = idNumber;
      list3[x] = document.getElementById("city").value;
			list4[x] = document.getElementById("degree").value;
		  list5[x] = timestamp1;



			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
      var cel5 = NewRow.insertCell(4);


			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
      cel5.innerHTML = list5[x];


			n++;
			x++;
      idNumber++;
      document.getElementById("popup-form").reset();
    }



  function validateForm() {
  var x = document.forms["popup-form"]["fname"].value;
  var y = document.forms["popup-form"]["degree"].value;
  if (x == "" || y == "") {
    alert("Kindly fill all the details.");
    // return false;
  }
  else{
    AddRow();
  }
}
