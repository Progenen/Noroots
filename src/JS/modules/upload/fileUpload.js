import { handleFiles } from "./uploadHandler";

export function initFileUpload(form, fileInput, uploadButton) {
  uploadButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    fileInput.click();
  });

  form.addEventListener("click", (event) => {
    if (event.target !== uploadButton) { // Проверяем, что клик был не по кнопке
      fileInput.click();
    }
  });

  fileInput.addEventListener("change", () => handleFiles(fileInput));

  form.addEventListener("dragover", (event) => {
    event.preventDefault();
    form.classList.add("drag-over");
  });

  form.addEventListener("dragleave", () => {
    form.classList.remove("drag-over");
  });

  form.addEventListener("drop", (event) => {
    event.preventDefault();
    form.classList.remove("drag-over");

    if (event.dataTransfer.files.length) {
      fileInput.value = "";
      fileInput.files = event.dataTransfer.files;
      handleFiles(fileInput);
    }
  });
}
