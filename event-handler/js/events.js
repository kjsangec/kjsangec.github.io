function transformUppercase(_val){
    return _val.transformUppercase();
}

let elNamePengguna = document.getElementById("namePengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})