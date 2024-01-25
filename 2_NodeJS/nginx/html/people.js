$(document).ready(function () {
  $.ajax({
    'url': "http://localhost:3000/people/",
    'method': "GET",
    'contentType': 'application/json'
  }).done(function (data) {
    $('#table-people').dataTable({
      "searching": false,
      "info": false,
      "ordering": false,
      "paging": false,
      "aaData": data,
      "columns": [
        { "data": "nickName" },
        { "data": "firstName" },
        { "data": "lastName" }
      ]
    });
  });
});