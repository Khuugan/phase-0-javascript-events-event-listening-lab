function addingEventListener() {
    const button = document.getElementById('button');
  
    button.addEventListener('click', function() {
        const input = document.getElementById('button');

        function clickAlert() {
          alert('I was clicked!');
        }
        
        input.addEventListener('click', clickAlert);  
    });
  }