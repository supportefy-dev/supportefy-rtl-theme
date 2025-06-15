(function(){
  var license = "{{ settings.pro_license }}";
  if(!license) return;

  fetch('https://example.com/api/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      license: license,
      shop: '{{ shop.permanent_domain }}'
    })
  })
  .then(function(res){ return res.json(); })
  .then(function(data){
    if(!data.valid){
      console.error('Invalid license');
    }
  })
  .catch(function(err){ console.error('License validation failed', err); });
})();
