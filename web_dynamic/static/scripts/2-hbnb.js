$('document').ready(function () {
  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(url, function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

    let checkedAmenities = {};
    $(document).on('change', "input[type='checkbox']", function () {
      if (this.checked) {
        checkedAmenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete checkedAmenities[$(this).data('id')];
      }
      let lst = Object.values(checkedAmenities);
      if (lst.length === 0) {
        $('.amenities > h4').html('&nbsp;');
      } else {
        $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
      }
    });
  });
  
