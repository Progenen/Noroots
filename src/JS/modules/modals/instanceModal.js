import Modal from "./Modal";

export const modalPolicies = new Modal(".modal-policies", '.js-modal-policies-open');
export const modalUpload = new Modal('.modal-upload', '.js-modal-upload-open');
export const modalLoader = new Modal('.modal-loader', '.js-modal-loader-open', false)