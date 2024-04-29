// Header
// Elemento del h1 
const logoAlt = document.querySelector('.SectionH1-h1')
// Elemento de la imagen de fondo
const backgroundDiv = document.querySelector('.SectionH1-bg');

// Una función que añade una clase al h1 cuando la página se carga
document.addEventListener('load', function () {
    logoAlt.classList.add('isLoaded');
});

// Una función que añade una clase a la imagen de fondo cuando la página se carga
document.addEventListener('load', function () {
    backgroundDiv.classList.add('isLoaded');
});

// Menu hamburguesa
// Elemento del menu en la navegación
const headerBtn = document.querySelector('.Header-button')

// Una función que añade y quita una clase al botón cuando el usuario hace clic para mostrar y ocultar la navegación en dispositivos pequeños
headerBtn.addEventListener('click', function () {
    // Aplicación de la clase al botón
    headerBtn.classList.toggle('isClicked')
    console.log(headerBtn)
})

// Lightbox
// Selección de todos los artículos
const articleBtn = document.querySelectorAll('.SectionProjects-article')

// Elemento del lightbox
const lightbox = document.querySelector('.SectionProjects-lightbox')

// Elemento del titular del lightbox
const lightboxTitle = lightbox.querySelector('.SectionProjects-h3');

// Elemento de la imagen en el lightbox
const large = lightbox.querySelector('.large')

// Elemento del botón en el lightbox
const closeBtn = lightbox.querySelector('.SectionProjects-btn')

// Elemento del botón del slider en el lightbox
const sliderBtn = lightbox.querySelectorAll('.SectionProjects-btn--lightbox')

// Una función que añade y quita una clase al artículo cuando el usuario hace clic para mostrar y ocultar el lightbox en dispositivos grandes
articleBtn.forEach((eachArticle, i) => {
    eachArticle.addEventListener('click', (e) => {
        // Previne el comportamiento predeterminado del evento de clic
        e.preventDefault();
        // Elemento de la imagen en el artículo
        let imgSrc = eachArticle.querySelector('.SectionProjects-img').src;
        // Elemento del titular en el artículo
        let articleTitle = eachArticle.querySelector('.SectionProjects-h3').textContent;

        // Añade una clase al lightbox
        lightbox.classList.add('active');
        // Determina el valor del src en la imagen grande
        large.setAttribute('src', imgSrc);
        // Determina el titular dentro del lightbox
        lightboxTitle.textContent = articleTitle;
    });
});

// Evento que quita una clase al botón de cerrar cuando el usuario hace clic para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Botones Lightbox
// Una función que cambia el estilo del botón de la imagen 
function SliderBtn(e) {
    e.preventDefault();
    // Elimina la clase "active" de todos los elementos de lista
    sliderBtn.forEach((btn) => {
        btn.classList.remove('active');
    });
    // Añade la clase "active" al elemento de lista en el que el usuario hace clic
    this.classList.add('active');

    // Obtiene el índice del botón del slider en el lightbox
    const index = Array.from(sliderBtn).indexOf(this);
    // Selecciona el artículo correspondiente según el índice
    const targetArticle = articleBtn[index];
    // Obtiene la imagen del artículo correspondiente
    const imgSrc = targetArticle.querySelector('.SectionProjects-img').src;
    // Obtiene el titular del artículo correspondiente
    const articleTitle = targetArticle.querySelector('.SectionProjects-h3').textContent;

    // Actualiza el contenido mostrado en el lightbox
    lightbox.classList.add('active');
    large.setAttribute('src', imgSrc);
    lightboxTitle.textContent = articleTitle;
}

// Añade una clase a cada botón cuando el usuario hace clic
sliderBtn.forEach((btn) => {
    btn.addEventListener('click', SliderBtn);
});

// Evento que quita una clase al botón de cerrar cuando el usuario hace clic para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
