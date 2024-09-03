// Function to toggle the overlay visibility for Workspaces dropdown
function btnDownClick() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

// Function to toggle the overlay visibility for Settings
function btnSettingClick() {
    const overlaySetting = document.getElementById("overlaysetting");
    overlaySetting.style.display = overlaySetting.style.display === "block" ? "none" : "block";
}

// Function to handle the selection change event in the dropdown
function onBtnChange() {
    const methodSelect = document.querySelector(".inputSelect");
    const selectedMethod = methodSelect.value;
    console.log("Selected method:", selectedMethod);
}
function bodyClick(){
  const overlayBody = document.getElementById("overlayBody");
  overlayBody.style.display = overlayBody.style.display === "block" ? "none" : "block";
}

// Function to handle the Send button click event



function btnClick() {
  let api = document.getElementById("urlInput").value;
  const selectElement = document.querySelector('.inputSelect');
  const selectedOption = selectElement.value;
  
  if (selectedOption == "GET") {
      fetch(api)
      .then((response) => response.json())
      .then((data) => {
          let divContent = document.getElementsByClassName("content")[0];

          if (divContent) {
              divContent.innerHTML = "";
              const formattedJson = JSON.stringify(data, null, 4);
              let preElement = document.createElement("pre");
              preElement.textContent = formattedJson;
              divContent.appendChild(preElement);
          } else {
              console.error('No element found with class "content"');
          }
      })
      .catch((error) => console.error("Error fetching data:", error));
  } else if (selectedOption == "POST") {
      let divContent = document.getElementsByClassName("content")[0];
let postData = document.getElementById('overlayBodyText').value

      fetch(api, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: postData,
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json(); // Ensure that you parse the JSON here
      })
      .then((responseData) => {
          if (divContent) {
              divContent.innerHTML = ""; // Clear previous content
              const formattedJson = JSON.stringify(responseData, null, 4);
              let preElement = document.createElement("pre");
              preElement.textContent = formattedJson;
              divContent.appendChild(preElement);
          }
          console.log('Success:', responseData);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }else if(selectedOption == "DELETE"){
    // function deleteData() {
      let api = document.getElementById("urlInput").value; // Get the API URL from the input
    
      fetch(api, {
        method: 'DELETE', // Specify the method as DELETE
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((responseData) => {
        console.log('Delete successful:', responseData); // Handle the success
        let divContent = document.getElementsByClassName("content")[0];
    
        if (divContent) {
          // Clear previous content
          divContent.innerHTML = "Delete successful!";
    
          // Format JSON with indentation
          const formattedJson = JSON.stringify(responseData, null, 4);
    
          // Create a pre element to preserve formatting
          let preElement = document.createElement("pre");
          preElement.textContent = formattedJson;
    
          // Append the pre element to the content div
          divContent.appendChild(preElement);
        } else {
          console.error('No element found with class "content"');
        }
      })
      .catch((error) => {
        console.error('Error during deletion:', error); // Handle any errors
      });
    // }
    
  }else if(selectedOption == "PUT"){
    // function updateData() {
      let api = document.getElementById("urlInput").value; // Get the API URL from the input
    
      // Create the data you want to send in the PUT request
      const data = {
        "userId": 1,
        "id": 1,
        "title": "Updated Title",
        "body": "This is the updated body text."
      };
    
      // Send the PUT request using fetch
      fetch(api, {
        method: 'PUT', // Specify the method as PUT
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((responseData) => {
        console.log('Update successful:', responseData); // Handle the success
        let divContent = document.getElementsByClassName("content")[0];
    
        if (divContent) {
          // Clear previous content
          divContent.innerHTML = "Update successful!";
    
          // Format JSON with indentation
          const formattedJson = JSON.stringify(responseData, null, 4);
    
          // Create a pre element to preserve formatting
          let preElement = document.createElement("pre");
          preElement.textContent = formattedJson;
    
          // Append the pre element to the content div
          divContent.appendChild(preElement);
        } else {
          console.error('No element found with class "content"');
        }
      })
      .catch((error) => {
        console.error('Error during update:', error); // Handle any errors
      });
    // }
    
  }
}
