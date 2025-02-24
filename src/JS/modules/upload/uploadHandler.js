import { modalPolicies } from "../modals/instanceModal";
import { sendFile } from "./policiesHandler.js";

let pendingFile = null; 

export function handleFiles(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  if (localStorage.getItem("policiesAgree") === "true") {
    sendFile(file); // Если согласие уже дано, сразу отправляем
  } else {
    pendingFile = file; // Сохраняем файл
    modalPolicies.onOpen(); // Открываем модалку
  }
}

// Функция для продолжения загрузки после принятия политики
export function processPendingFile() {
  if (pendingFile) {
    sendFile(pendingFile);
    pendingFile = null;
  }
}
