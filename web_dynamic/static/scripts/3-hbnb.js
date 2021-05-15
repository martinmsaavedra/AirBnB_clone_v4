$(document).ready(() => {
  const amenCheckList = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      amenCheckList[key] = value;
    }
    if (!$(this).is(':checked')) {
      delete amenCheckList[$(this).attr('data-id')];
    }
    const list = [];
    for (const name in amenCheckList) {
      list.push(amenCheckList[name]);
    }
    $('div.amenities h4').text(list.join(', '));
  });
});

function plurals (n) {
  if (n > 1) {
    return 's';
  }
  return '';
}

/* Check Api status */
$.getJSON('http://127.0.0.1:5001/api/v1/status', data => {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

/* Search Place */
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
  }
});
