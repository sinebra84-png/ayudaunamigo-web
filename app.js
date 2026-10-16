// Menú: cerrar al elegir una sección. Formulario: arma un mensaje de WhatsApp, no guarda datos.
(function(){
  var nav=document.querySelector('.nav');
  if(nav){nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.removeAttribute('open');});});}

  var form=document.getElementById('form-vol');
  if(!form)return;
  var err=document.getElementById('vol-err');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var nombre=form.nombre.value.trim();
    if(!nombre){err.hidden=false;form.nombre.focus();return;}
    err.hidden=true;
    var distrito=form.distrito.value.trim();
    var msg='Hola, soy '+nombre+(distrito?' de '+distrito:'')+'. Quiero ser voluntario en Ayuda un Amigo. Me gustaría: '+form.como.value+'.';
    window.open('https://wa.me/51953775165?text='+encodeURIComponent(msg),'_blank','noopener');
  });
})();
