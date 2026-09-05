$("[data-rating]").each(function() {
    let rating = $(this).data("rating");
    let hearts = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            hearts += '<span class="heart"></span>';
        } else {
            hearts += '<span class="heart empty"></span>';
        }
    }
    $(this).append('<span class="rating">' + hearts + '</span>');
});


/* ILLUSTRATION GALLERY*/
$(".illustration-item img").click(function() {
    let image = $(this);
    let imageSource = image.attr("src");
    let imageTitle = image.data("title");
    let imageDescription = image.data("description");
    let imageTime = image.data("time");
    let imageTools = image.data("tools");
    let imageTechnique = image.data("technique");

    $("#modal-image").attr("src", imageSource);
    $("#modal-image").attr("alt", imageTitle);

    $("#modal-title").text(imageTitle);
    $("#modal-description").text(imageDescription);

    $("#modal-time").text("Time: " + imageTime);
    $("#modal-tools").text("Tools: " + imageTools);
    $("#modal-technique").text("Technique: " + imageTechnique);

    $("#illustration-modal").fadeIn(200);
});

/* Close the modal */
$("#close-modal").click(function() {
    $("#illustration-modal").fadeOut(200);
});


/* Close the modal when clicking outside the content */
$("#illustration-modal").click(function(event) {
    if (event.target === this) {
        $("#illustration-modal").fadeOut(200);
    }
});


/* Change look button */
$("#change-look").click(function() {
    $("body").toggleClass("alternative-theme");
    if ($("body").hasClass("alternative-theme")) {
        $(this).find("b").text("Back to pink");
    } else {
        $(this).find("b").text("Change my look");
    }
});


/* FORM VALIDATION*/
$("#contact-form").submit(function(event) {
    event.preventDefault();
    let name = $("input[name='username']").val().trim();
    let birthdate = $("input[name='birthdate']").val();
    let email = $("input[name='email']").val().trim();
    let degree = $("input[name='degree']:checked").val();
    let semester = $("input[name='semester']:checked").val();
    let reason = $("input[name='reason']").val().trim();
    let message = $("textarea[name='message']").val().trim();
    let accepted = $("input[name='accept']").is(":checked");

    if (name === "") {
        alert("Please write your name :)");
    } else if (birthdate === "") {
        alert("Please enter your date of birth :)");
    } else if (new Date(birthdate) > new Date()) {
        alert("Your date of birth cannot be in the future :)");
    } else if (email === "") {
        alert("Please write your email :)");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email :)");
    } else if (!degree) {
        alert("Please select your degree program :)");
    } else if (!semester) {
        alert("Please select your semester :)");
    } else if (reason === "") {
        alert("Please write the reason for contacting me :)");
    } else if (message === "") {
        alert("Please introduce your message :)");
    } else if (!accepted) {
        alert("Please agree to send this message :)");
    } else {
        alert("Form submitted successfully!");
    }
});