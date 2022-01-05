let nasaApi = {
  button: document.querySelector("button"),
  fetchPhoto: () => {
  const input = document.querySelector('input').value;
  fetch(`https://api.nasa.gov/planetary/apod?api_key=kcVm6XoPy85no5qNSfiDpguKVik4sC2Zo5AVgH0L&date=${input}`)
  .then(res => res.json())
  .then(response => {
  document.getElementById("photo").src = response.hdurl;
  document.querySelector("iFrame").src = response.url;
  })
  
  .catch(err => {
  console.log(`error ${err}`);
  //alert("sorry, there are no results for your search");
  })
  }
  }
  
  nasaApi.button.addEventListener('click', nasaApi.fetchPhoto);
  
  
  