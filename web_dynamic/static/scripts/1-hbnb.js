$(document).ready(function () {
<<<<<<< HEAD
  let checkedAmenities = {};
=======
  const checkedAmenities = {};
>>>>>>> ee3c97aae3b9903935f8a93ff113599d6d70dc40
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
<<<<<<< HEAD
    let lst = Object.values(checkedAmenities);
=======
    const lst = Object.values(checkedAmenities);
>>>>>>> ee3c97aae3b9903935f8a93ff113599d6d70dc40
    if (lst.length === 0) {
      $('.amenities > h4').html('&nbsp;');
    } else {
      $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
    }
  });
});
