
# HopeHub
SJHacks, **Track:** Homelessness, **Members:** Jun, Meghna, Shreya, Sohan
## Overview

HopeHub is a mobile-first platform designed to empower digitally underserved and homeless communities by providing them simple, tangible ways to earn, track, and redeem HopePoints. The platform turns everyday positive actions — like completing microjobs, reporting safety incidents, or attending trainings — into HopePoints that can be redeemed for essential services such as food coupons, transportation tickets, and hygiene kits.

HopeHub is built with accessibility at its core: offering a website, a simple SMS-based interaction model for users without smartphones, and an admin dashboard for monitoring engagement and platform performance.

## Key Features

### User-Side (Mobile & SMS Access)

My Points Dashboard

- Displays the total HopePoints accumulated.

- Provides redemption options for food, transport, or hygiene rewards.

- Tracks HopePoints transaction history.

Find Work

- Lists nearby microjobs (e.g., community painting, basic repairs) with descriptions and distances.

- Users can select jobs via mobile app or SMS by replying to numbered options.

Report an Incident

- Allows users to report safety issues by submitting a location and a short description.

- Users earn HopePoints for verified safety reports.

### SMS Interface for Digitally Illiterate Users

Menu-driven text-based navigation:

1. My Points

2. Find Work

3. Report Crime

SMS replies control navigation and actions.

---

### Admin Dashboard

Leaderboard View

- Displays Top 10 HopePoint earners.

- Tracks cumulative user engagement and reward participation.

Redemption Analytics

- Donut charts displaying breakdowns of food, transport, and hygiene rewards redeemed.

Task Completion Analytics

- Bar charts showing how many microjobs, crime reports, and health-related tasks have been completed.

---

## User Flows

### Mobile App Users

1. Visit Homepage.

1. Tap "Find Work," "My Points," or "Report Something."

1. Complete jobs, report incidents, earn HopePoints.

1. Redeem points via simple in-app prompts.

### SMS Users

1. Receive or send initial SMS: "Welcome to HopeHub. Reply with 1, 2, or 3."

1. Select a number.

1. Navigate through tasks and redeem options via numbered menus.

1. Confirm actions or submit text inputs as needed.

### Why HopeHub?

- Accessibility: Designed for users without smartphones or digital literacy.

- Dignity: HopePoints system ensures users earn essentials through positive actions.

- Safety: Empowers homeless individuals to contribute to safer communities.

- Community Integration: Bridges the gap between homeless individuals and public services by making everyone an active participant.

### Future Enhancements

- Enable barcode-based redemption with partnered vendors.

- Expand to additional cities by configuring new reward options and microjob listings.

- Add multilingual SMS and mobile app support (e.g., Spanish, Vietnamese).

- Reward streak bonuses for continuous participation.



## Project info

**URL**: [https://lovable.dev/projects/427dcbe5-e0f0-4b85-be24-cccf68483879](https://hopehub-welcome-portal-34.lovable.app/auth)

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://hopehub-welcome-portal-34.lovable.app/auth) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://hopehub-welcome-portal-34.lovable.app/auth) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
