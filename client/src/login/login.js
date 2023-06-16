const theBod = document.querySelector('body');
const navi =  document.createElement('nav');
const container = document.createElement('div');
const memberBtn = document.createElement('button');
const signUpBtn = document.createElement('button');
const loginBox = document.createElement('div');
const loginForm = document.createElement('form');
const userInfo = document.createElement('div');
const uEmail = document.createElement('input');
const uPassword = document.createElement('input');
const loginBtn = document.createElement('button');
const cancelBtn = document.createElement('button');
const signUpBox = document.createElement('div');
const signUpForm = document.createElement('form');
const newEmail = document.createElement('input');
const newPassword = document.createElement('input');
const confirmPass = document.createElement('input');
const signInBtn = document.createElement('button');

theBod.appendChild(navi);
theBod.appendChild(container);
theBod.appendChild(memberBtn);
theBod.appendChild(signUpBtn);
theBod.appendChild(loginBox);
container.appendChild(loginBox);
loginBox.appendChild(loginForm);
loginForm.appendChild(userInfo);
userInfo.appendChild(uEmail);
userInfo.appendChild(uPassword);
userInfo.appendChild(loginBtn);
userInfo.appendChild(cancelBtn);
container.appendChild(signUpBox);
signUpBox.appendChild(signUpForm);
signUpForm.appendChild(newEmail);
signUpForm.appendChild(newPassword);
signUpForm.appendChild(confirmPass);
signUpForm.appendChild(signInBtn);
signUpForm.appendChild(cancelBtn);

theBod.setAttribute('style','background: #c4c4c4; height: 100vh; width: 100%');
navi.setAttribute('style', 'height: 5rem; background: #ff7f50');
container.setAttribute('style', 
'height: 40rem; background: #b22222; display: flex; align-items: center; justify-content: center');
loginBox.setAttribute('style',
'height: 35rem; width: 30rem; background: #ff69b4; display: flex; align-items: center; justify-content: center');
loginForm.setAttribute('style',
'background: #c71585d; dispaly: flex; align-items: center; justify-content: center');
userInfo.setAttribute('style',
'height: 33rem; width: 30rem; background: #c71585d; dispaly: flex; flex-direction: column; align-items: center; justify-content: center');





