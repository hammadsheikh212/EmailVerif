handlers.sendEmail = function (args, context) {
    var emailRequest = {
        EmailAddress: "temp1@ufdstudios.com",
        Subject: "Unity Game Notification",
        Body: "This is a test email sent from your Unity game.",
        TitleId: context.titleId
    };

    var result = server.SendEmailFromTemplate(emailRequest);
    return { message: "Email sent successfully!" };
};
