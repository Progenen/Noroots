import { initFileUpload } from "./modules/fileUpload.js";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".upload__form");
    const fileInput = form.getElementById("fileInput");
    const uploadButton = form.querySelector(".btn-upload");

    initFileUpload(form, fileInput, uploadButton);
});