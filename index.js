
const btnT = document.querySelector('.btn-times');
const btnB = document.querySelector('.btn-bars');

const asideCont = document.querySelector('.aside-container');

const articleContent = document.querySelector('.article-content');

const icon = document.querySelectorAll('.fa-icon');

// Adding Event Listener

btnB.addEventListener("click", () => {
  asideCont.classList.add('show-sidebar');
});

btnT.addEventListener("click", (e) => {
  asideCont.classList.remove('show-sidebar');
});

icon.forEach((icons) => {
  icons.addEventListener("click", (e) => {
   const faIcon = e.currentTarget.parentElement.parentElement.parentElement;
   faIcon.classList.toggle('show');
  });
});