
$(document).ready(function() {
      $(function () {
          if ($('.navbar-toggler').length) {
              $('.navbar-toggler').on('click', function () {
                  $('.navbar-collapse').slideToggle();
              });
          }
      })
    });


    // datepicker init
    $(function () {
        if ($('.datepicker').length) {
            $('.datepicker').datepicker({
                numberOfMonths: 1,
                changeYear: true,
                changeMonth: true,
                dateFormat: 'dd MM',
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            });
        }
      });

      $(function () {
          if ($('.the-date').length) {
              $('.the-date').datepicker({
                  changeMonth: true,
                  changeYear: true,
                  showButtonPanel: true,
                  dateFormat: 'MM yy',
                  onClose: function (dateText, inst) {
                      $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
                  },
                  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              });
          }
      });


       // pass show hide
    $(function () {
      $("#show_hide_password a").on('click', function (event) {
          event.preventDefault();
          if ($('#show_hide_password input').attr("type") == "text") {
              $('#show_hide_password input').attr('type', 'password');
              $('#show_hide_password i').addClass("fa-eye-slash");
              $('#show_hide_password i').removeClass("fa-eye");
          } else if ($('#show_hide_password input').attr("type") == "password") {
              $('#show_hide_password input').attr('type', 'text');
              $('#show_hide_password i').removeClass("fa-eye-slash");
              $('#show_hide_password i').addClass("fa-eye");
          }
      });

  })




  // Select2
  $(function () {
      if ($(".select-2-init").length) {
          $(".select-2-init").select2({
              width: 'resolve' // need to override the changed default
          });
      }
  });


  // model popup
  $(function () {
      if ($(".login").length) {
          $(".login").click(function () {
              $("#signup").hide();
              $(".modal-backdrop").css("display", "none");
          })
      };
  });




  // wow js init
  $(function () {
      var wow = new WOW({
          animateClass: 'animated',
          mobile: true
      });
      wow.init();
  });


    // Grabs all the Elements by their IDs which we had given them
    $(function () {
      let modal = document.querySelector(".my-modal");
  
      let btn = document.querySelector(".open-btn");
  
    
  
      let button = document.querySelector(".ok-btn");
  
      // We want the modal to open when the Open button is clicked
      btn.onclick = function () {
        modal.style.display = "block";
  
        console.log("i am clicked");
      };
   
      // We want the modal to close when the OK button is clicked
    //   button.onclick = function () {
    //     modal.style.display = "none";
    //   };
  
      // The modal will close when the user clicks anywhere outside the modal
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
  
  
  
      
  
  
    });
  
  
  
  