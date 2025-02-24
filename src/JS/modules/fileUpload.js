export function initFileUpload(form, fileInput, uploadButton) {
    // Открытие окна выбора файла
    uploadButton.addEventListener("click", () => fileInput.click());

    // Обработка выбора файла
    fileInput.addEventListener("change", () => handleFiles(fileInput));

    // Перетаскивание файлов
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

function handleFiles(fileInput) {
    const file = fileInput.files[0];
    if (file) {
        console.log("Выбран файл:", file.name);
    }
}
