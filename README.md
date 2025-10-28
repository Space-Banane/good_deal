# Good Deal? - Kleinanzeigen.de AI Deal Checker
Is this thingy a good deal? Yes? Idk, ask ChatGPT...

## Problem
Always when i was doomscrolling kleinanzeigen i wanted to know if the price of an item is a good deal or not. So i made this extension to help me with that. Its a browser extention that adds a button to the UI on a listing. On mobile it is a shareable app (PWA).

## Solution
This extension sends the listing data to a serverless function that uses ChatGPT to analyze the deal and return a verdict.

## Privacy
No data is stored. The extension only sends the listing URL to the serverless function, which then fetches the listing data directly from Kleinanzeigen.de. The serverless function does not store any data and only uses it to get a verdict from ChatGPT.

The only data stored is logs which might contain what ip asked the server what. Logs are not often deleted and only for storage purposes.

## Disclaimer
Do NOT use this if you care about privacy!!!!!

This is a self-hosted project for me and myself only. Look at the code, do whatever with the code, its MIT licensed.
I am NOT responsible for any data leaks or privacy issues that might arise from using this extension.
Use at your own risk.

## License
MIT License