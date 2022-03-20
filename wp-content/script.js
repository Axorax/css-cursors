const body = document.body

function copied() {
    const element = document.querySelector('.overlay');
    element.classList.add('show');
    body.classList.add('body-ns');
    window.setTimeout(function() {
      element.classList.remove('show');
      body.classList.remove('body-ns');
    }, 900);
}