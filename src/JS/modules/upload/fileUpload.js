import { handleFiles } from "./uploadHandler";

export function initFileUpload(form, fileInput, uploadButton) {
  uploadButton.addEventListener("click", () => fileInput.click());

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
      fileInput.files = event.dataTransfer.files;
      handleFiles(fileInput);
    }
  });
}