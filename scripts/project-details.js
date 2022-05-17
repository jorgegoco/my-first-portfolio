function showWork() {
    document.querySelector('#show-work').style.display = 'block';
  }
  
  let workLinks = Array.from(document.querySelectorAll(".work-button"));
  for (let i = 0; i < workLinks.length; i++) {
      workLinks[i].addEventListener('click', showWork);
    }