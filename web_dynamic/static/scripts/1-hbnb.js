$(document).ready(function () {
    $('input[type=checkbox]').change(function () {
        amenities_id_list = []
        amenities_name_list = []
        if (this.checked) {

            let amenities_id = this.data-id;
            amenities_id_list.append(amenities_id);
            let amenities_name = this.data-name;
            amenities_name_list.append(amenities_name);
            console.log(amenities_id, amenities_name);
        }});
});