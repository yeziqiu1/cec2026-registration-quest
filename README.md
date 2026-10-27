# CEC 2026 Registration Quest

A mobile-first, Midoo-inspired English practice game for volunteers working at the CEC 2026 international registration desk.

## Features

- Eight service scenarios: greeting, verification, badge handoff, directions, escalation, medical privacy, and emergencies.
- Choose-the-correct-action gameplay with points, streaks, levels, and a full shift summary.
- Local English audio for every guest prompt and recommended answer.
- Phrase handbook with 28 searchable English responses.
- Installable mobile web app manifest.
- Responsive layout for desktop and phone.

## Run locally

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deployment

The app is fully static and can be hosted directly with GitHub Pages from the `main` branch root.

## Notes

- Payment amounts, room numbers, shuttle times, Wi-Fi details, and other bracketed information must be completed with the latest onsite instructions before operational use.
- Medical questions are escalated. Volunteers do not provide medical advice.
- Speaker slides, patient information, and case images must not be photographed or shared.
