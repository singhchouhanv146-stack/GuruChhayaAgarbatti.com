/* ================== FILE: script.js ================== */
function goBack(){window.history.back()}
function goNext(page){window.location.href=page}

document.addEventListener('DOMContentLoaded',()=>{
 let form=document.getElementById('form');
 if(form){
  form.addEventListener('submit',function(e){
   e.preventDefault();
   let phone='919303883544';
   let msg='New Request from Website';
   window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  });
 }
});

