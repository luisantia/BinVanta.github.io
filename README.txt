BINVANTA WEBSITE
================

This is a static IIS-ready website. No Node.js, PHP, database, or build process is required.

INSTALL ON WINDOWS IIS
1. Copy the entire BinVanta_Website folder into your IIS wwwroot folder.
   Typical path:
   C:\inetpub\wwwroot\BinVanta

2. Open IIS Manager.
3. Create a new Website (or Application) pointing to that folder.
4. Set index.html as the Default Document if it is not already listed.
5. Browse to the site.

IMPORTANT CUSTOMIZATION
- Replace hello@binvanta.com in index.html and assets/script.js with your real email.
- Replace (000) 000-0000 with your real phone.
- Update "Serving the local community..." with your exact service area.
- The form currently uses mailto: and therefore opens the visitor's email program.
  It does NOT save submissions to a server/database.
- If you want the form to save leads directly to your IIS server, I can build a
  second version using ASP.NET/PHP/SQL or a simple local JSON/CSV backend.

CURRENT PRICES
Monthly: $25/month
Quarterly: $40/service
One-Time: $60/service

The design is responsive and works on desktop and mobile.
