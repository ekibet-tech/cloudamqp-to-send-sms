$('#chatForm').on('submit', function(e) {
  e.preventDefault()
  var message = document.getElementById("message").value;
  var name = document.getElementById("name").value;
  var data = JSON.stringify({name: name, message: message});
  $.ajax({
    type: "POST",
    url: '/api/chat',
    processData: false,
    data: data,
    success: function(response) {
      alert(JSON.stringify(response))
    }
  })
})