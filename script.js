

// Get the html button and add an event listener

document.getElementById('change-btn').addEventListener('click', changeColor);



function changeColor() {

  // instantiate the XHR object class

  let xhr = new XMLHttpRequest();



  // open the file

  xhr.open('GET', 'colors.json', true);



  // you could either call the onreadystatechange or directly the onload method



  // call the onload method

  xhr.onload = function () {

    // check the request status

    if(this.status === 200) {

      let colorData = JSON.parse(this.responseText);

      console.log(colorData);



      // get random colors

      let colorChange = colorData[Math.floor(Math.random() * colorData.length)];



      // Get the body element and color display span

      document.querySelector('body').style.backgroundColor = colorChange.hex;

      document.querySelector('span').textContent = colorChange.name;

    } else {

      console.log('Error getting json file');

    }

  }



  // send the request

  xhr.send();



}
