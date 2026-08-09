# Dingel Hafizia Madrasa — Complete Management System v2

## Modules
Dashboard • Students • Fees • Income • Expense • Accounts • Attendance • Exam/Results • Teachers/Staff • Salary • Food/Hostel • Donors/Donations • Notices • Reports • Settings.

## Core capabilities
- Student admission, profile, edit/delete/search
- General and Orphan / এতিম category
- Monthly fee collection, paid, due, receipt
- Income and expense ledger
- Monthly financial statement
- Attendance register
- Exam/result records
- Staff directory and salary payment
- Food/hostel records
- Donor/donation records
- Notice board
- Reports and A4 print
- JSON backup/restore
- Local/offline storage
- Optional Firebase Firestore cloud sync
- Responsive Android/Desktop UI
- Light/dark UI toggle

## Firebase
Edit `firebase/config.js` with your Firebase Web App config.
Enable Firestore and Email/Password Authentication if you want cloud login.
Use `firebase/rules.txt` as a starting security rule set.

## Important
This package is a complete functional frontend/local management build. Firebase login/security is optional until configured. Test the workflow and take a backup before production use.

## GitHub Pages
Upload the complete folder to your repository. The entry point is `index.html`.

## Recommended production hardening
- Separate Firestore collections for large datasets
- Role-based access for admin/staff
- Firebase Storage for photos/documents
- Server-side scheduled monthly invoice generation
- Audit log for every financial edit/delete
- Automated cloud backup
- Optional SMS/WhatsApp integration
