


let currentPage = 1;

function updateActivePage() {
  const buttons = document.querySelectorAll(".page-btn");
  buttons.forEach((button, index) => {
    button.classList.remove("active");
    if (index + 1 === currentPage) {
      button.classList.add("active");
    }
  });
}

function goToPage(page) {
  currentPage = page;
  updateActivePage();
}

function changePage(direction) {
  const totalPages = document.querySelectorAll(".page-btn").length;
  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }
  updateActivePage();
}
