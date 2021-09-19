const modal = document.getElementsByClassName("modal")[0];
const imgShow = document.getElementsByClassName("img-show")[0];
const imgItems = document.getElementsByClassName("img-item");

for (let i = 0; i < imgItems.length; i++) {
  const imgItem = imgItems[i];
  imgItem.addEventListener("click", (event) => {
    openModal(event.target);
  });
}

const openModal = (clickedImg) => {
  modal.style.display = "block";
  imgShow.children[0].src = clickedImg.src;
};

const closeModal = () => {
  modal.style.display = "none";
};
