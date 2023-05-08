var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButtons);

// console.dir(backdrop);
// console.dir(backdrop.getElementsByClassName.backgroundImage);
// console.dir(backdrop.style['background-image']);  

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

// backdrop.addEventListener('click', function() {
//     backdrop.style.display = 'none';
//     modal.style.display = 'none';
// });

// modalNoButton.addEventListener('click', function() {
//     backdrop.style.display = 'none';
//     modal.style.display = 'none';
// });

// backdrop.addEventListener('click', closeModal);

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

//ASSIGNMENT CODE:
// const modalNoButton = document.querySelector('.modal__action--negative');

// for (let el of [backdrop, modalNoButton]) {
//     if (!el) continue;
//     el.addEventListener('click', () => {
//         modal.style.display = 'none';
//         backdrop.style.display = 'none';
//     });
// }

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});