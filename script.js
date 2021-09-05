const button = document.querySelector('#search-btn');
const search = document.querySelector('#search');
resources.innerHTML = ``;
button.onclick = e => {
  e.preventDefault()
  if(search.value === "Web Development"){
    resources.innerHTML = `<img src="images/WebDev0.png"/><img src="images/WebDev1.png"/><img src="images/WebDev2.png"/><p>If you are looking for structured initial handholding on all different WebDev components then this is the course to go for </p><img src="images/WebDev3.png"/>`;
  }
  else if(search.value === "MBA"){
    resources.innerHTML = `<img src="images/MBA0.png"> <img src="images/MBA1.png"> <img src="images/MBA2.png"> <img src="images/MBA3.png"> <img src="images/MBA4.png"> <img src="images/MBA5.png"> <img src="images/MBA6.png"> <p>More to be added...</p>`
  }
  else if(search.value === "Data Structures and Algorithms(DSA)" ){
    resources.innerHTML = `<img src="images/DSA1.png"> <img src="images/DSA2.png"> <p>If you are short of time and looking for a single place to learn and practise DSA then this is the course to go for </p><img src="images/DSA3.png">`;
  }
  else if(search.value === "How to start a startup"){
    resources.innerHTML = `<img src="images/Startup1.png"> <img src="images/Startup2.png"> <img src="images/Startup3.png"> <img src="images/Startup4.png"> <p>This one is paid course, but if you are in time bound and series about startup, this is the course to go for :)</p><img src="images/Startup0.png">`
  }
  else if(search.value === "Roadmap to become Software Engineer"){
    resources.innerHTML = `<img src="images/Roadmap_SDE.png"/>`;
  }
  else if(search.value === "Roadmap to College Students"){
    resources.innerHTML = `<img src="images/Roadmap_Coll.png"/> <p>Secure 5 LPA Job as a Tier 3 Final Year student</p> <img src="images/GoodPlacements.png"/>`;
  }
  else if(search.value === "Machine Learning"){
    resources.innerHTML = `<img src="images/ML1.png"/> <img src="images/ML2.png"/> <img src="images/ML3.png"/> <img src="images/ML4.png"/> `;
  }
  else if(search.value === "Basic Computer Science"){
    resources.innerHTML = `<img src="images/CS0.png"/><img src="images/CS1.png"/><img src="images/CS2.png"/><img src="images/CS3.png"/><img src="images/CS4.png"/><img src="images/CS5.png"/><p>All these courses are also available on YouTube, Just type the course name on YouTube</p>`;
  }
  else if(search.value === "Blockchain"){
    resources.innerHTML = `<img src="images/blockchain0.png"/><img src="images/blockchain1.png"/><img src="images/blockchain2.png"/><img src="images/blockchain3.png"/><img src="images/blockchain4.png"/><img src="images/blockchain5.png"/><img src="images/blockchain6.png"/><img src="images/blockchain7.png"/><img src="images/blockchain8.png"/><img src="images/blockchain9.png"/>`;
  }
  else if(search.value === "Web3.0"){
    resources.innerHTML = `<img src="images/blockchain0.png"/><img src="images/blockchain1.png"/><img src="images/blockchain2.png"/><img src="images/blockchain3.png"/><img src="images/blockchain4.png"/><img src="images/blockchain5.png"/><img src="images/blockchain6.png"/><img src="images/blockchain7.png"/><img src="images/blockchain8.png"/><img src="images/blockchain9.png"/>`;
  }
  else if(search.value === "Data Science"){
    resources.innerHTML = `<img src="images/DataScience0.png"/><p>More resources to be shared...</p>`;
  }
  else{
    resources.innerHTML = `<h3>Resource will be made available soon, subscribe to our newsletter to stay updated</h3>`;
  }
}
















