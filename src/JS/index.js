import { initAccordion } from "./modules/accordion/accordion.js";
import initAdaptiveImages from "./modules/adaptiveImages/adaptiveImages.js";
import { modalLoader } from "./modules/modals/instanceModal.js";
import { initFileUpload } from "./modules/upload/fileUpload.js";
import { initBindsPoliciesAgree } from "./modules/upload/policiesHandler.js";

const uploadAreas = document.querySelectorAll(".area-upload");
const policiesBtn = document.querySelector("#policiesAgreeBtn");

if (document.querySelector(".result")) {
    initAccordion(".result__content-accordion", ".result__content-accordion-item");
}

uploadAreas.forEach(element => {
    const fileInput = element.querySelector("input[type='file']");
    const uploadButton = element.querySelector(".btn-upload");

    initFileUpload(element, fileInput, uploadButton);
});

initBindsPoliciesAgree(policiesBtn);
initAdaptiveImages();

if (document.querySelector(".modal-loader-show")) {
    modalLoader.onOpen();
} 
