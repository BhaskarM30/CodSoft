
    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Web Designer'],
      typeSpeed: 50,
    });

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbxUzWz7NbEeONBYL8IsEqYo8IsrwR5SsRJNt9-5aBglWSPIlLQdLLr4TE--wTnNKqpv/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
