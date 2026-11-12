# Upload the approved SCREENERS.CA release

The owner approved the logo and release on November 12, 2026, and authorized the assistant to handle publication, domain connection and hosting. This procedure is the upload reference for the authenticated operator; the owner does not need to perform it manually.

1. In **cPanel → Domains**, find **screeners.ca** and open its **Document Root**. Use that domain's exact folder; it may differ from the account's main `public_html` folder.
2. Back up the current contents and `.htaccess` before replacing files. Keep the backup outside the public document root. Preserve any hosting-managed `.well-known` certificate-validation folder.
3. In **File Manager → Settings**, enable **Show Hidden Files (dotfiles)**.
4. Upload the deployment ZIP into the Screeners.ca document root and choose **Extract** into that same folder. Replace matching website files after the backup. The ZIP already contains the site's root files; it needs no extra enclosing folder.
5. Confirm that `index.html`, `.htaccess`, `en/`, `fr/`, `assets/`, `api/`, `sitemap.xml` and `robots.txt` sit directly in the domain's document root. Standard permissions are `755` for folders and `644` for files.
6. Remove the uploaded ZIP from the public folder after extraction. Keep a local copy and its SHA-256 file for rollback.
7. Confirm that cPanel **SSL/TLS Status** shows a valid certificate for `screeners.ca` before testing the public site. The supplied `.htaccess` redirects ordinary HTTP traffic to HTTPS and preserves the common WHC/AutoSSL validation paths.
8. Open `https://screeners.ca/en/` and `https://screeners.ca/fr/`. Verify the public pages, language links, assets, HTTPS and redirects after extraction.

If the domain still displays WHC's parking page, confirm that it points to this hosting account using the account-specific DNS instructions from WHC. The ZIP upload alone does not change DNS. Preserve MX and mail-related TXT records.

## Enquiries in this release

The default form prepares an email addressed to `info@screeners.ca`. The visitor reviews and sends it in their email application; copyable text and a telephone link are provided. No mail-server configuration is needed for this mode. Direct server submission remains disabled until its PHP configuration and inbox delivery are tested on the actual host.

## If a problem appears

Restore the backed-up website files and matching `.htaccess`. Record the exact URL and visible error before further changes. Do not remove unrelated domain files or change nameservers as a troubleshooting shortcut. The complete hosting procedure and optional PHP configuration are in `DEPLOYMENT.md`.
