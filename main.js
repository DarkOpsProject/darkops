document.addEventListener("DOMContentLoaded", function () {
    // Znajdź wszystkie elementy z klasami animacji
    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .slide-in-left');

    const observerOptions = {
        root: null,  // Obserwujemy w kontekście całego okna
        rootMargin: '0px',
        threshold: 0.01  // Animacja aktywuje się, gdy 10% elementu jest widoczne
    };

    // Funkcja, która będzie wywoływana, kiedy element stanie się widoczny
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Dodanie klasy 'visible' dla animacji
                observer.unobserve(entry.target);  // Przestajemy obserwować ten element
            }
        });
    };

    // Tworzymy obiekt IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Obserwujemy wszystkie elementy z klasami animacji
    elementsToAnimate.forEach(element => {
        observer.observe(element);  // Rozpoczynamy obserwację
    });
});

// Funkcja do otwierania modalnego okna z powiększonym obrazem
function openModal(image) {
    var modal = document.createElement("div");
    modal.classList.add("modal");

    // Stworzenie zawartości modalnego okna
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";  // Przycisk zamknięcia
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Dodanie obrazu do modalnego okna
    var img = document.createElement("img");
    img.src = image.src;  // Użyj źródła klikniętego obrazu
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Pokazanie modalnego okna
    modal.style.display = "flex";
}
