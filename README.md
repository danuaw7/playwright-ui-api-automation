# Web UI & API Automation Testing with Playwright

This project uses [Playwright](https://playwright.dev/) for both Web UI and API testing, written in TypeScript.

## 📦 Requirements

- Node.js & npm
- Playwright

## ⚙️ Setup Instructions

1. **Install Node.js dan npm**
   ```bash
   brew install node         # via Homebrew

2. **Install Playwright**
   ```bash
   npx playwright install

## 🧪 Verify All Installed
- node -v
- npm -v
- npm list playwright

## ⚠️ Known Issue Screenshot
Evidence: https://imgur.com/x0WqGjm

> ⚠️ **Skipping this step due to a known issue:**  
> The #countries dropdown (`<select id="countries">`)  is currently not selectable manually or via automation.
As a result, I cannot proceed with full form submission, and automation is intentionally stopped before submitting the form.

## 📹 Demo Video
API: https://imgur.com/NUfVy9T

Web UI: https://imgur.com/hhe56kR

## 🚀 Running Test
   ```bash
   API:
   npx playwright test tests/api

   Web UI:
   npx playwright test tests/web --headed


