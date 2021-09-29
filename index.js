// Copy to clipboard
function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("result");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    document.getElementById("liveToast").classList.add("show");
}
// JQuery post file
$(document).ready(function () {
    $('#file').change(function (e) {
        e.preventDefault();
        var file_data = $('#file').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);
        // Loading animation
        $('#button').html('<span class="spinner-border spinner-border-sm text-success" role="status" aria-hidden="true"></span> Loading...');
        $.ajax({
            url: 'http://087f-113-161-196-10.ngrok.io',
            // dataType: 'file',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (data) {
                $('#button').html('Success');
                $('#result').val(data);
                // alert(data.data);
            }
        });
        e.stopPropagation();
    });
});
// JQuery post image
$(document).ready(function () {
    $('#file-img').change(function (e) {
        e.preventDefault();
        var file_data = $('#file-img').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);
        // Loading animation
        $('#button-img').html('<span class="spinner-border spinner-border-sm text-success" role="status" aria-hidden="true"></span> Loading...');
        $.ajax({
            url: 'http://10.91.13.144:8000',
            // dataType: 'file',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (data) {
                $('#button-img').html('Success');
                var img = new Image();
                img.src = 'data:image/png;base64,' + data.data;
                // $("#result").attr("src", img.src);
                document.getElementById("result-img").src = img.src;
                // $('#result').
                // alert(data.data);
            }
        });
        e.stopPropagation();
    });
});