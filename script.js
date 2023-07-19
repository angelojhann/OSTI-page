const redirectServices = document.getElementById('redirectServices');
const redirectAbout = document.getElementById('redirectAbout');
const redirectContact = document.getElementById('redirectContact');

redirectServices.addEventListener('click' , () => {
    window.location.href = 'prod_serv.html';
});

redirectAbout.addEventListener('click' , () => {
    window.location.href = 'about_us.html';
});

redirectContact.addEventListener('click' , () => {
    window.location.href = 'contact.html';
});