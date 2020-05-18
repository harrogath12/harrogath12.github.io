$(document).ready(function () {
  // Validation
  $(function () {
    $("#form").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
      },
      messages: {
        name: {
          required: "Field 'name', is required",
          minlength: "Put at least 3 lettes",
        },
        email: {
          required: "Field 'email' is required",
          email: "Please put an 'email' adress",
          login_or_email: "Account does not exist or was disabled",
        },
      },
    });
    $("#form-footer").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
      },
      messages: {
        name: {
          required: "Field 'name', is required",
          minlength: "Put at least 3 lettes",
        },
        email: {
          required: "Field 'email' is required",
          email: "Please put an 'email' adress",
          login_or_email: "Account does not exist or was disabled",
        },
      },
    });
  });
});
