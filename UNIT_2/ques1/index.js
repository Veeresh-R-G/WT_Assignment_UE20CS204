let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {

    let para = document.querySelector(".para");
    para.parentNode.removeChild(para);
    let para_final = document.querySelector(".final_para");
    para_final.innerText = '😕';
    alert("Form Submitted SuccessFully !!!");
})