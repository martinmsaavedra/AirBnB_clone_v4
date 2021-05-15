$('document').ready(function () {
  const api = 'http://' + window.location.hostname;

  $.get(api + ':5001:/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: data => {
      data.map(place => {
        $('.places h1').after(`
              <article>
              <div class="title_box">
              <h2>${place.name}</h2>
              <div class="price_by_night">${place.price_by_night}</div>
              </div>
              <div class="information">
                  <div class="max_guest">${place.max_guest} Guest${plurals(place.max_guest)}</div>
                  <div class="number_rooms">${place.number_rooms} Bedroom${plurals(place.number_rooms)}</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${plurals(place.number_bathrooms)}</div>
              </div>
          <div class="description">${place.description} </div>
              </article>`);
      });
    }});
    
  const checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    const lst = Object.values(checkedAmenities);
    if (lst.length === 0) {
      $('.amenities > h4').html('&nbsp;');
    } else {
      $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
    }
  });
});
