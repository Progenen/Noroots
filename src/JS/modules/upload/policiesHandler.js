import { modalLoader, modalPolicies } from "../modals/instanceModal";
import { processPendingFile } from "./uploadHandler";

export function initBindsPoliciesAgree(btn) {
  btn.addEventListener("click", () => {
    localStorage.setItem("policiesAgree", "true");
    modalPolicies.onClose();
    processPendingFile();
  });
}

export function sendFile(file) {
  modalLoader.onOpen();

  const formData = new FormData();
  formData.append("document", file);

  // Имитация запроса   
  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log("Файл загружен!", data);
      setTimeout(() => {
        modalLoader.onClose();
      }, 3000)
    })
    .catch(error => {
      setTimeout(() => {
        modalLoader.onClose();
      }, 3000)
      console.error("Ошибка загрузки", error)
    });
}
