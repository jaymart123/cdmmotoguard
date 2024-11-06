const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
    fileInput.click();
})
  fileInput.onchange = ({target}) =>{
    let file = target.files[0];    //getting file and [0] this means if user has selected multiples files then get the first one only
    if(file){   //if file is selected
      let fileName = file.name;
      console.log(fileName);
    }
}
