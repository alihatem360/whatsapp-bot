const venom = require("venom-bot");

venom
  .create({
    session: "session-name", // يمكنك تغيير 'session-name' إلى أي اسم تريد
    multidevice: true, // التفعيل للمتعددة الأجهزة (إذا كان مدعوما)
    headless: false, // يمكنك تغييره إلى 'true' إذا كنت تريد عرض النافذة
  })
  .then((client) => start(client))
  .catch((err) => console.log(err));

function start(client) {
  client.onMessage((message) => {
    console.log(`Received message: ${message.body}`);

    // الردود على الأسئلة الشائعة
    const faqResponses = {
      hi: "Hello! How can I help you today? 👋",
      "what are your working hours?":
        "Our working hours are from 9 AM to 5 PM, Monday to Friday.",
      "how can i contact support?":
        "You can contact support by emailing support@example.com or calling +123456789.",
      "where is your office located?":
        "Our office is located at 123 Main Street, Anytown, Country.",
    };

    const question = message.body.toLowerCase();

    if (faqResponses[question]) {
      client.reply(message.from, faqResponses[question], message.id.toString());
    } else {
      client.reply(
        message.from,
        "Thank you for your message. Our support team will get back to you shortly.",
        message.id.toString()
      );
      // هنا يمكنك إضافة كود لإشعار فريق الدعم برسالة جديدة تحتاج إلى اهتمام
    }
  });
}
