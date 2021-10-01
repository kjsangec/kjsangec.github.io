function transformUppercase(_val){
    return _val.toUppercase();
}

let elNamaPengguna = document.getElementById("NamePengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan")
    let pass_val = elkataLaluan.value

    if(pass_val.length > 5){
        alert("Password check...OK!")
    } else {
        alert("Password too short!")
    }
}

let elKL = document.getElementByid("kataLaluan")
elKL.onblur = checkPassword