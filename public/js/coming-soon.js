(function($) {
  "use strict"; // Start of use strict

  var submitBtn = $(document.getElementById('submitEmail'));
  var emailInput = $(document.getElementById('email'));
  var notifyForm = $(document.getElementById('notifyForm'));
  var thankYou = $(document.getElementById('thankYou'));

  submitBtn.click(() => {
    var email = emailInput.val();

    if (!email || emailInput.is(':invalid')) {
      emailInput.focus();
      return;
    }

    var ref = firebase.database().ref('contacts');
    var record = ref.push();

    record.set({
      email: email
    });

    notifyForm.hide();
    thankYou.fadeIn();
  });

})(jQuery);
