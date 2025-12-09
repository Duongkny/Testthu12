var so1=document.getElementById('t1').value
var so2=document.getElementById('t2').value
const cong=document.getElementById('cong')
const Tru=document.getElementById('tru')
const Nhan=document.getElementById('btnNhan')
const Chia=document.getElementById('chia')
cong.addEventListener('click',function(){
   var a=document.getElementById('t1').value
   var b=document.getElementById('t2').value
      c=parseInt(a)+parseInt(b)
   alert("Kết quả của phép tính : "+ c)

})
Tru.addEventListener('click',function(){
   var a=document.getElementById('t1').value
   var b=document.getElementById('t2').value
      c=parseInt(a)-parseInt(b)
   alert("Kết quả của phép tính : "+ c)

})
Nhan.addEventListener('click',function(){
   var a=document.getElementById('t1').value
   var b=document.getElementById('t2').value
      c=parseInt(a)*parseInt(b)
   alert("Kết quả của phép tính : "+ c)

})
Chia.addEventListener('click',function(){
   var a=document.getElementById('t1').value
   var b=document.getElementById('t2').value
      c=parseInt(a)/parseInt(b)
   alert("Kết quả của phép tính : "+ c)

})