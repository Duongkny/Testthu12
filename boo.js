function button(){
const dn=document.getElementById('tk').value
const mk=document.getElementById('pass').value
if (dn==="" || mk===""){
    alert("Vui lòng nhập thông tin")
}
else if(dn==="admin" && mk==="123456"){
    alert("Đăng nhập thành công")
    window.location.href = 'https://www.facebook.com/profile.php?id=100057213382606&sk=friends'
}
else{
    alert("Tài khoản hoặc mật khẩu không chính xác")
}
}
var eyeOpen=document.querySelector('.eye-open')
var eyeClose=document.querySelector('.eye-close')
var input=document.querySelector('#pass')
eyeOpen.addEventListener('click',function(){
    eyeOpen.classList.add('hidden')
    eyeClose.classList.remove('hidden')
    input.setAttribute('type','password')
})
eyeClose.addEventListener('click',function(){
    eyeOpen.classList.remove('hidden')
    eyeClose.classList.add('hidden')
    input.setAttribute('type','text')
})