const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

const openMenuButton = document.getElementById("openMenu");
const slideMenu = document.getElementById("slideMenu");

function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
    openModalButton.classList.add("button-clicked");
    setTimeout(() => {
        openModalButton.classList.remove("button-clicked");
    }, 500);
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

function toggleMenu() {
    if (slideMenu.style.right === "0px") {
        slideMenu.style.right = "-250px";
    } else {
        slideMenu.style.right = "0px";
    }
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Add event listener to the menu button to toggle the menu
openMenuButton.addEventListener("click", toggleMenu);