const subCard = document.querySelectorAll('.sub__card');
const subWrapper = document.querySelector('.sub__wrapper');
const subLink = document.querySelectorAll('.sub__link');
const subNow = document.querySelectorAll('.sub__now');
// const activeCard = docuemnt.querySelectorAll('.active__card');



function hideTabContent() {
    subCard.forEach(item => {
        item.classList.remove('active__card');
    });
    subLink.forEach(item => {
        item.classList.remove('active__link');
    });
    subNow.forEach(item => {
        item.classList.remove('active__now');
    });
}

function showTabContent(i = 1) {
    subCard[i].classList.add('active__card');
    subLink[i].classList.add('active__link');
    subNow[i].classList.add('active__now');
}
hideTabContent();
showTabContent();
subWrapper.addEventListener('click', function(event) {
    const target = event.target;
	if(target && target.classList.contains('sub__card')) {
        subCard.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
                }
                });
    }
});



let feedbackContent = document.querySelectorAll('.feedback__card');
let feedbackLink = document.querySelectorAll('.feedback__href');
let feedbackParent = document.querySelector('.feedback__links');




function hideFeedbackContent() {
    feedbackContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    feedbackLink.forEach(item => {
        item.classList.remove('feedback__href_active');
    });
}

function showFeedbackContent(i = 0) {
    feedbackContent[i].classList.add('show', 'fade');
    feedbackContent[i].classList.remove('hide');
    feedbackLink[i].classList.add('feedback__href_active');
}
hideFeedbackContent();
showFeedbackContent();


feedbackParent.addEventListener('click', function(event) {
    const target = event.target;
	if(target && target.classList.contains('feedback__href')) {
        feedbackLink.forEach((item, i) => {
            if (target == item) {
                hideFeedbackContent();
                showFeedbackContent(i);
                }
                });
    }
});



const questLink = document.querySelectorAll('.quest__link');
const questModal = document.querySelectorAll('.quest__modal');
const questIcon = document.querySelectorAll('.quest__icon');
const questWrapper = document.querySelector('.quest__container');

function hideQuestModal() {
    questModal.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('active__quest__modal');
    });
    questIcon.forEach(item => {
        item.classList.remove('active__arrow');
        item.style.zIndex = '0' ; 
    });
    questLink.forEach(item => {
        item.classList.remove('hui');
    });
}



function showQuestModal(i) {
    questModal[i].classList.add('active__quest__modal');
    questModal[i].classList.remove('hide');
    questIcon[i].classList.add('active__arrow');
    questLink[i].classList.add('hui');
    questIcon[i].style.zIndex = '50' ; 
    questIcon[i].style.position = 'relative' ; 

}


function huivo() {
    questModal.forEach(item => {
        item.style.display = 'none';
    });
}


questWrapper.addEventListener('click', function(event) {
    const target = event.target;
    hideQuestModal();

    if (target && target.classList.contains('quest__link')) {
        questLink.forEach((item, i) => {
            if (target == item && item.classList.contains('hui') == false ) {
                showQuestModal(i);
                console.log('cool!');
            } else if (item.classList.contains('hui') == true) {
                console.log('bad');
                hideQuestModal();
                huivo(i);
            }
        });
    }    
    });


    hideQuestModal();



const popupHref = document.getElementById('popup__href');
const popupInput = document.getElementById('popup__name');
const logModal = document.getElementById('popup__log');
const promoLog = document.querySelector('.promo__log');
const popupContent = document.getElementById('popup__content');
const popupEmail = document.getElementById('popup__email');
const popupPassword = document.getElementById('popup__password');
const popupTitle = document.getElementById('popup__title');
const getStarted = document.getElementById('get__started');
const getStartedd = document.getElementById('get__startedd');
const getStarteddd = document.getElementById('get__starteddd');
const getStartedddd = document.getElementById('get__startedddd');
const popupArea = document.getElementById('popup__area');

function popupAreaClose() {
    logModal.style.opacity = '0';
    logModal.style.visibility = 'hidden';
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'transform: translate(0, -260%)';
}
popupArea.addEventListener('click', () => {
    popupAreaClose();
});

function goLog(parent) {
    parent.addEventListener('click', function() {
        logModal.style.opacity = '1';
        logModal.style.visibility = 'visible';
        popupContent.style.opacity = '1';
        popupContent.style.transform = 'transform: translate(0, 0)';
    });
}
goLog(promoLog);
goLog(getStarted);
goLog(getStartedd);
goLog(getStarteddd);
goLog(getStartedddd);


function inputError() {
    popupInput.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function inputOk() {
    popupInput.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}

function emailError() {
    popupEmail.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function emailOk() {
    popupEmail.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}
function passwordError() {
    popupPassword.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function passwordOk() {
    popupPassword.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}

function closeModal() {
    logModal.style.opacity = '0';
    logModal.style.visibility = 'hidden';
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'transform: translate(0, -260%)';
}



popupHref.addEventListener('click', function(event) {
    event.preventDefault();
        let b = popupInput.value;
        let a = popupEmail.value;
        let c = popupPassword.value;
        if (b !== '' && a !== '' && c !== '') {
            inputOk();
            popupTitle.textContent = 'Thank you for being with us!';
            setTimeout(closeModal, 2000);
            emailOk();
            passwordOk();
        }
        else if (b == '' && a == '' && c == ''){
            inputError();
            emailError();
            passwordError();
        } else if (a == '') {
            emailError();
        } else if (b == '') {
            inputError();
        } else if (c == '') {
            passwordError();
        }
    });


const popupHreff = document.getElementById('popup__hreff');
const popupInputt = document.getElementById('popup__namee');
const logSig = document.getElementById('popup__sig');
const promoSig = document.querySelector('.promo__sig');
const popupContentt = document.getElementById('popup__contentt');
const popupEmaill = document.getElementById('popup__emaill');
const popupPasswordd = document.getElementById('popup__passwordd');
const popupTitlee = document.getElementById('popup__titlee');
const popupAreaa = document.getElementById('popup__areaa');

function popupAreaClosee() {
    logSig.style.opacity = '0';
    logSig.style.visibility = 'hidden';
    popupContentt.style.opacity = '0';
    popupContentt.style.transform = 'transform: translate(0, -260%)';
}
popupAreaa.addEventListener('click', () => {
    popupAreaClosee();
});

function goLogg(parent) {
    parent.addEventListener('click', function() {
        logSig.style.opacity = '1';
        logSig.style.visibility = 'visible';
        popupContentt.style.opacity = '1';
        popupContentt.style.transform = 'transform: translate(0, 0)';
    });
}
goLogg(promoSig);


function inputErrorr() {
    popupInputt.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function inputOkk() {
    popupInputt.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}

function emailErrorr() {
    popupEmaill.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function emailOkk() {
    popupEmaill.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}
function passwordErrorr() {
    popupPasswordd.style.border = '2px solid red';
    // thanksModal.classList.add('show');
}
function passwordOkk() {
    popupPasswordd.style.border = '2px solid  #01BDAA';
    // logModal.style.display = 'none';
}

function closeModall() {
    logSig.style.opacity = '0';
    logSig.style.visibility = 'hidden';
    popupContentt.style.opacity = '0';
    popupContentt.style.transform = 'transform: translate(0, -260%)';
}



popupHreff.addEventListener('click', function(event) {
    event.preventDefault();
        let b = popupInputt.value;
        let a = popupEmaill.value;
        let c = popupPasswordd.value;
        if (b !== '' && a !== '' && c !== '') {
            inputOkk();
            popupTitlee.textContent = 'Welcome to our community!';
            setTimeout(closeModall, 2000);
            emailOkk();
            passwordOkk();
        }
        else if (b == '' && a == '' && c == ''){
            inputErrorr();
            emailErrorr();
            passwordErrorr();
        } else if (a == '') {
            emailErrorr();
        } else if (b == '') {
            inputErrorr();
        } else if (c == '') {
            passwordErrorr();
        }
    });

