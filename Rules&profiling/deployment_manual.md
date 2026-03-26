# GitHub Pages & Porkbun Deployment Manual

## 1. Push to GitHub
1. Create a **public** repository on your GitHub account (e.g., `mikenov-stub`).
2. Open your terminal in the project folder (`c:\Design\Personal\2026\Mike-N-1hourdraft`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

## 2. Enable GitHub Pages
1. Go to your repository **Settings** on GitHub.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Give GitHub a few minutes. You should eventually see "Your site is published at `https://<your-username>.github.io/<repo-name>/`".
6. Scroll down to **Custom domain**. Ensure `mikenov.com` is in the input box, and verify that "Enforce HTTPS" gets checked (this might take an hour to provision the cert). The `CNAME` file included in our code should automatically pre-fill this field.

## 3. Configure Porkbun DNS
1. Log in to [Porkbun](https://porkbun.com/) and go to your **Domain Management** page.
2. Find `mikenov.com` and click **DNS Records**.
3. **Delete** any existing A records or CNAME records that currently point to Linktree.
4. Add the GitHub Pages **A Records**. Create 4 separate `A` records with the Host left blank (or typed as `@`), pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Add a **CNAME Record**:
   - Host: `www`
   - Answer: `<your-username>.github.io` (replace `<your-username>` with your actual GitHub username)
6. Save all records. Note that DNS changes can take anywhere from a few minutes to propagation across global ISPs.

## 4. Final Verification
- Visit `mikenov.com`. If you hit a privacy error on your first visit, it means GitHub is still provisioning your SSL certificate. Wait 15 minutes and try again.
- Once live, scan your QR code and test the gyro features on mobile!
