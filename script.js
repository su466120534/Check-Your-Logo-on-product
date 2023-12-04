// For Logo Rotation 
$(document).ready(function() {
    $("#angle-input").change(function() {
      var angle = parseFloat($("#angle-input").val()) || 0;
      $("#uploaded-image").css("transform", "rotate(" + angle + "deg)");
    });
  });

  // To capture screensort and download it
  document.getElementById('captureButton').addEventListener('click', function() {
          
      // Hide box1
      // var divToHide = document.querySelector('.box1');
      // divToHide.style.visibility = 'hidden';

      // const targetElement = document.body;
      const targetElement = document.getElementById('specific');
          html2canvas(targetElement).then(function(canvas) {
              const screenshotDataUrl = canvas.toDataURL('image/png');
              
              // Create a download link for the screenshot
              const downloadLink = document.createElement('a');
              downloadLink.href = screenshotDataUrl;
              downloadLink.download = 'screenshot.png'; // File name
              
              // Trigger the download link
              downloadLink.click();
          });
  });
      
      // Logo Drag and Drop, resize
      $(function() {

          // Make the "draggable" div element draggable
          $("#draggable").draggable();

          // Make the "draggable" div element resizable
          $("#uploaded-image").resizable();

          // Make the "droppable" div element droppable and define drop behavior
          $("#droppable").droppable({
              drop: function(event, ui) {
                  // Code to execute when a draggable element is dropped on the droppable element
                  $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
              }
          });

          // Handle image upload
          $("#image-upload").change(function() {
              var file = this.files[0];
              if (file) {
                  var reader = new FileReader();
                  reader.onload = function(e) {
                      // Set the uploaded image source
                      $("#uploaded-image").attr("src", e.target.result);
                  };
                  reader.readAsDataURL(file);
              }
          });
      });

      // image previews
      document.addEventListener('DOMContentLoaded', function () {
          var input = document.getElementById('image-input');
          var preview = document.getElementById('image-preview');

          input.addEventListener('change', function () {
              var file = input.files[0];

              if (file) {
                  var reader = new FileReader();

                  reader.onload = function (e) {
                      preview.src = e.target.result;
                  };

                  reader.readAsDataURL(file);
              }
          });
      });

      // logo-preview
      document.addEventListener('DOMContentLoaded', function () {
          var input = document.getElementById('logo-input');
          var preview = document.getElementById('uploaded-image');

          input.addEventListener('change', function () {
              var file = input.files[0];

              if (file) {
                  var reader = new FileReader();

                  reader.onload = function (e) {
                      preview.src = e.target.result;
                  };

                  reader.readAsDataURL(file);
              }
          });
      });
