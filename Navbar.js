const NavElement = document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())

.then(data=>{ NavElement.innerHTML=data })