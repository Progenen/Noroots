import { initAccordion } from "./modules/accordion/accordion.js";
import initAdaptiveImages from "./modules/adaptiveImages/adaptiveImages.js";
import { modalLoader } from "./modules/modals/instanceModal.js";
import { initFileUpload } from "./modules/upload/fileUpload.js";
import { initBindsPoliciesAgree } from "./modules/upload/policiesHandler.js";

const form = document.querySelector(".area-upload");
const fileInput = form.querySelector("input[type='file']");
const uploadButton = form.querySelector(".btn-upload");
const policiesBtn = document.querySelector("#policiesAgreeBtn");

if (document.querySelector(".result")) {
    initAccordion(".result__content-accordion", ".result__content-accordion-item");
}

initFileUpload(form, fileInput, uploadButton);
initBindsPoliciesAgree(policiesBtn);
initAdaptiveImages();
