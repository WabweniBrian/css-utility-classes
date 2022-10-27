// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  tabBtns,
  tabPanels,
  tabBtns2,
  tabPanels2,
  tabIndicator,
  modal,
  modalDialog,
  btnClose,
  iconClose,
  btnCancel,
  launchBtn,
] = [
  qsa(".tab-btn"),
  qsa(".tab-panel"),
  qsa(".tab-btn1"),
  qsa(".tab-panel1"),
  qs(".tab-indicator"),
  qs(".modal"),
  qs(".modal-dialog"),
  qs(".close"),
  qs(".feather-delete"),
  qs(".cancel"),
  qs(".open-modal"),
];

//Add the active class to the first elements
tabBtns[0].classList.add("active");
tabPanels[0].classList.add("active");

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND PANELS

// ---------------------------------------------------------TABS COMPONENT-----------------------------------------------------------------------------------------
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("active");
    elm.classList.remove("fade-in");
  });
}

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", (e) => {
    removeActiveClass(tabBtns);
    removeActiveClass(tabPanels);
    tabBtn.classList.add("active");
    let btnId = tabBtn.attributes.id.value;
    const tabPanel = qs(`.tab-panel[data-id = ${btnId}]`);
    tabPanel.classList.add("active");
    tabPanel.classList.add("fade-in");
  });
});

//Add the active class to the first elements
tabBtns2[0].classList.add("active");
tabPanels2[0].classList.add("active");
tabIndicator.style.width = `calc(100% / ${tabPanels2.length})`;

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND PANELS
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("active");
    elm.classList.remove("fade-in");
  });
}

tabBtns2.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", (e) => {
    removeActiveClass(tabBtns2);
    removeActiveClass(tabPanels2);
    tabBtn.classList.add("active");
    tabIndicator.style.left = `calc(100%/${tabBtns2.length} * ${i})`;
    let btnId = tabBtn.attributes.id.value;
    const tabPanel = qs(`.tab-panel1[data-id = ${btnId}]`);
    tabPanel.classList.add("active");
    tabPanel.classList.add("fade-in");
  });
});

// -------------------------------------------------------------------------MODAL----------------------------------------------------------------------------------------

// Launch the modal by adding the open class
launchBtn.addEventListener("click", (e) => {
  modal.classList.add("open");
  modalDialog.classList.add("open");
});

// FUNCTION: Close the modal by removing the open class
function closeModal(element) {
  element.addEventListener("click", (e) => {
    modal.classList.remove("open");
    modalDialog.classList.remove("open");
  });
}

closeModal(btnClose);
closeModal(btnCancel);
closeModal(iconClose);

// Close the modal when user clicks outside the modal dialog
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modalDialog.classList.remove("open");
  }
});
