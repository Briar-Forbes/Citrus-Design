const FooterElement = document.querySelector('.footer')
fetch('footer.html')
.then(res=>res.text())

.then(data=>{ FooterElement.innerHTML=data })