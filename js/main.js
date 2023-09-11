const menuBtn = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
console.log(navMenu);
menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('open');
   navMenu.classList.toggle('hidden');
   navMenu.classList.toggle('flex');
})
const form = document.getElementById('form');
const inputEmail = document.querySelector('input[type="text"]');
form.addEventListener('submit', (e) => {
   e.preventDefault();
   // inputEmailVal.test RegExp()
   console.log(inputEmail.value);
   const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   console.log(reg.test(inputEmail.value));
   if (!reg.test(inputEmail.value)) {
      // inputEmail.classList.add("text-red-800");
      inputEmail.classList.remove("text-grey-800");
      document.querySelector('small.email-error').classList.remove('invisible');
   }
   else {
      inputEmail.classList.add("text-grey-800");
      inputEmail.classList.remove("text-red-800");
      document.querySelector('small.email-error').classList.add('invisible');
   }
})