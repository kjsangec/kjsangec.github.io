function transformUppercase(_val){
    return _val.transformUppercase();
}

let elNamePengguna = document.getElementById("namePengguna")
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

let elKL = document.getElementsByid("kataLaluan")
elKL.onblue = checkPassword