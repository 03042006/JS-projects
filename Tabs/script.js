const home = document.getElementById('home');
const blog = document.getElementById('blog');
const help = document.getElementById('help');
const contact = document.getElementById('contact');
const about = document.getElementById('about');

const homesec = document.getElementById('homesec');
const blogsec = document.getElementById('blogsec');
const helpsec = document.getElementById('helpsec');
const contactsec = document.getElementById('contactsec');
const aboutsec = document.getElementById('aboutsec');


homesec.classList.remove('hide-content')
function Tabs(){
    home.addEventListener('click', ()=>{
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.add('hide-content')
            })
        homesec.classList.remove('hide-content');
    })

    blog.addEventListener('click', ()=>{
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.add('hide-content')
            })
        blogsec.classList.remove('hide-content');
    })

    help.addEventListener('click', ()=>{
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.add('hide-content')
            })
        helpsec.classList.remove('hide-content');
    })

    contact.addEventListener('click', ()=>{
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.add('hide-content')
            })
        contactsec.classList.remove('hide-content');
    })

    about.addEventListener('click', ()=>{
        document.querySelectorAll('.content').forEach((e) =>{
            e.classList.add('hide-content')
            })
        aboutsec.classList.remove('hide-content');
    })
}

Tabs();
