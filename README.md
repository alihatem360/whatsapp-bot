# Venom Bot

This project uses the `venom-bot` library to create a WhatsApp bot that can respond to frequently asked questions (FAQs).

## Requirements

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository or copy the code to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:

    ```bash
    npm install venom-bot
    ```

## Configuration

The bot is configured with the following options:

- `session`: The name of the session. You can change `'session-name'` to any name you prefer.
- `multidevice`: Set to `true` to enable multi-device support (if supported).
- `headless`: Set to `false` if you want to see the browser window, otherwise set to `true` for headless mode.

## Usage

1. Start the bot by running:

    ```bash
    node your-script-file.js
    ```

2. The bot will listen for incoming messages and respond based on the predefined FAQs. 

## FAQ Responses

The bot will automatically respond to the following questions:

- **hi**
  - Response: "مرحبا! كيف يمكنني مساعدتك اليوم؟"
- **what are your working hours?**
  - Response: "Our working hours are from 9 AM to 5 PM, Monday to Friday."
- **how can i contact support?**
  - Response: "You can contact support by emailing support@example.com or calling +123456789."
- **where is your office located?**
  - Response: "Our office is located at 123 Main Street, Anytown, Country."

If a message does not match any of the predefined questions, the bot will respond with:

  - "Thank you for your message. Our support team will get back to you shortly."

  You can also add code to notify your support team of a new message that requires attention.


