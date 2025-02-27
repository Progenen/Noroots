class Modal { 
    constructor(modalEl, btnOpen, canClose = true, outsideClick = true) {
        this.modal = typeof modalEl === "string" ? document.querySelector(modalEl) : modalEl; 
        this.btnOpen = typeof btnOpen === "string" ? document.querySelector(btnOpen) : btnOpen;
        this.canClose = canClose;
        this.btnClose = this.modal.querySelector(".js-modal-close");
        this.outsideClick = outsideClick;
        this.activeClass = "js-modal-show";
        this.open = false;

        this.bindEvents();
    }

    update = () => {
        this.modal.classList.toggle(this.activeClass, this.open);
    }

    onOpen = () => {
        this.open = true;
        this.update();
        document.addEventListener("keydown", this.onKeyDown);
    }

    onClose = () => {
        this.open = false;
        this.update();
        document.removeEventListener("keydown", this.onKeyDown);
    }

    toggle = () => {
        this.open ? this.onClose() : this.onOpen();
    }

    onKeyDown = (event) => {
        if (event.key === "Escape" && this.canClose) {
            this.onClose();
        }
    }

    onOutsideClick = (event) => {
        if (this.outsideClick && event.target === this.modal && this.canClose) {
            this.onClose();
        }
    }

    bindEvents = () => {
        if (this.btnOpen) {
            this.btnOpen.addEventListener("click", this.onOpen);
        }
        if (this.canClose) {
            this.btnClose.addEventListener("click", this.onClose);
            this.modal.addEventListener("click", this.onOutsideClick);
        }
    }

    render = () => {
        this.update();
    }
}

export default Modal;