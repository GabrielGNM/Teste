const formAdd = document.querySelector("#formLabel")

formLabel.addEventListener("text", (e) => {
    e.preventDefault();

    const formInput = document.querySelector("#form")

    localStorage.setItem("form", formInput.value)

    formInput.value = "";

});
