# Good Deal? - Kleinanzeigen.de AI Deal Checker

Is this item a good deal? Unsure? Let ChatGPT help you decide!

## Overview

This project is a browser extension for Kleinanzeigen.de that helps you quickly check if a listing is a good deal. It adds a button to each listing's UI. On mobile, it's available as a shareable Progressive Web App (PWA).

## How It Works

The extension sends the listing URL to a serverless function, which fetches the listing data from Kleinanzeigen.de and uses ChatGPT to analyze the deal. The verdict is then displayed directly in your browser.

## Privacy

- Only the listing URL is sent to the serverless function.
- The serverless function does not store any data except for logs, which may contain IP addresses.
- Logs are not frequently deleted and can not be deleted at will nor by GDPR request. (You agree to this by using the extension, the website or the PWA.)

## Disclaimer

**Do NOT use this if you care about privacy!**

This is a self-hosted project intended for personal use. Review the code yourself—it's MIT licensed. The author is not responsible for any data leaks or privacy issues. Use at your own risk.

## Download

A release is available that includes the Firefox extension file. Check the [Releases](https://github.com/Space-Banane/good_deal/releases) section to download and install it.

## License

MIT License