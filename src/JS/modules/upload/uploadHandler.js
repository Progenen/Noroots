import { modalPolicies } from "../modals/instanceModal";
import { sendFile } from "./policiesHandler.js";

let pendingFile = null; 

export function handleFiles(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;

  pendingFile = file;
  modalPolicies.onOpen();

  fileInput.value = "";

  // Скрипт с проверкой
  // if (localStorage.getItem("policiesAgree") === "true") {
  //   sendFile(file);
  // } else {
  //   pendingFile = file;
  //   modalPolicies.onOpen();
  // }
}

export function processPendingFile() {
  if (pendingFile) {
    sendFile(pendingFile);
    pendingFile = null;
  }
}
