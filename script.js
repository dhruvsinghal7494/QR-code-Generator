let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", ()=> {
    let user_input = document.querySelector("#input_text");
    if(user_input.value != ""){
        if(qr_code_element.childElementCount == 0){
            generate(user_input);
        } else{
            qr_code_element.innerHTML = "";
            generate(user_input);
        } else{
            console.log("not valid input");
            qr_code_element.style = "display: none";
        }
    }
});

function generate(user_input){
    qr_code_element.style = "";

    var qrcode = new QRCode(qr_code_element, {
        text: `${user_input.value}`,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctlevel: QRCode.correctlevel.H
    });
}

let download = document.createElement("button");
qr_code_element.appendChild(download);

let download_link = document.createElement("a");
download_link.setAttribute("download", "qr-code.png");
download_link.innerHTML = 'Download <i class="fa-solid fa-download"></i>';

document.appendChild(download_link);

let qr_code_img = document.querySelector(".qr_code img");
let qr_code_canvas = document.querySelector("canvas");

if(qr_code_img.getAttribute("src") == null){
    setTimeout(() => {
        download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
} else{
    setTimeout(() => {
        download_link.setAttribute("href", `${qr_code_img.setAttribute("src")}`);  
    }, 300);
}

generate({
    value: "https://www.codewithrandom.com/"
});
