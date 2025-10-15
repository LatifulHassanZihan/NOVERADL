```
 _   _  _____  _   _ ___________  ___   ______ _     
| \ | ||  _  || | | |  ___| ___ \/ _ \  |  _  \ |    
|  \| || | | || | | | |__ | |_/ / /_\ \ | | | | |    
| . ` || | | || | | |  __||    /|  _  | | | | | |    
| |\  |\ \_/ /\ \_/ / |___| |\ \| | | | | |/ /| |____
\_| \_/ \___/  \___/\____/\_| \_\_| |_/ |___/ \_____/
                                                      
```

# 🚀 NOVERA DL - GitHub Repository Downloader

```bash
$ novera-dl --version
> v1.0.0
$ novera-dl --status
> [ACTIVE] Fast & Easy ZIP Download for GitHub Repos
```

---

## 📋 OVERVIEW

```
┌──────────────────────────────────────────────────────────┐
│  NOVERA DL is a terminal-themed web application that     │
│  allows users to quickly download GitHub repositories    │
│  in ZIP format without cloning or using Git commands.    │
│                                                           │
│  Simply paste the repository URL and download instantly! │
└──────────────────────────────────────────────────────────┘
```

---

## ✨ FEATURES

```bash
$ novera-dl --list-features

[✓] Terminal-style CLI interface with green theme
[✓] One-click GitHub repository ZIP download
[✓] Smart branch detection (main/master)
[✓] Clean and minimal design
[✓] Fully responsive layout
[✓] FontAwesome icon integration
[✓] Real-time status messages
[✓] Keyboard shortcut support (Enter to download)
[✓] No registration or API keys required
[✓] Fast and lightweight
```

---

## 🎯 USAGE

```bash
# Step 1: Open the application
$ open novera-dl.html

# Step 2: Enter GitHub repository URL
$ input: https://github.com/username/repository

# Step 3: Press Enter or click "Download ZIP"
$ downloading... ████████████████████ 100%

# Step 4: ZIP file saved to downloads
$ success: repository-main.zip downloaded!
```

### Supported URL Formats:
```
✓ https://github.com/username/repository
✓ https://github.com/username/repository/
✓ http://github.com/username/repository
```

---

## 🛠️ INSTALLATION

```bash
# Clone this repository
$ git clone https://github.com/latifulhassanzihan/NOVERADL.git

# Navigate to directory
$ cd novera-dl

# Open in browser
$ open index.html
# or
$ firefox index.html
# or
$ chrome index.html
```

**No build process required!** Just open the HTML file in any modern browser.

---

## 📁 PROJECT STRUCTURE

```
novera-dl/
│
├── index.html          # Main application file
├── README.md           # Documentation (you are here)
└── assets/
    └── screenshot.png  # Application preview
```

---

## 🎨 TECH STACK

```bash
$ novera-dl --tech-stack

┌─────────────────────────────────────┐
│ HTML5        ████████████ 100%      │
│ CSS3         ████████████ 100%      │
│ JavaScript   ████████████ 100%      │
│ FontAwesome  ████████████ 100%      │
└─────────────────────────────────────┘

Dependencies: None (Vanilla JS)
CDN: FontAwesome Icons v6.4.0
```

---

## 🔧 HOW IT WORKS

```javascript
// 1. User enters GitHub repository URL
const repoUrl = "https://github.com/username/repo";

// 2. Application validates the URL
if (isValidGitHubUrl(repoUrl)) {
    
    // 3. Constructs ZIP download URL
    const zipUrl = repoUrl + "/archive/refs/heads/main.zip";
    
    // 4. Initiates download
    downloadFile(zipUrl);
    
    // 5. Fallback to master branch if main doesn't exist
    fallback(repoUrl + "/archive/refs/heads/master.zip");
}
```

---

## ⚡ QUICK START GUIDE

```bash
$ cat quickstart.txt

1. Copy the repository URL from GitHub
   Example: https://github.com/microsoft/vscode

2. Paste it into the NOVERA DL input field

3. Click "Download ZIP" or press Enter

4. Wait for the download to complete

5. Extract the ZIP file and start coding!

$ echo "Done! Happy coding! 🎉"
```

---

## 🐛 TROUBLESHOOTING

```bash
$ novera-dl --help troubleshoot

[ISSUE] Download not starting
[FIX]   • Check if URL format is correct
        • Ensure repository is public
        • Try with different browser

[ISSUE] Invalid URL error
[FIX]   • URL must start with https://github.com/
        • Remove any extra paths or parameters
        • Ensure repository exists

[ISSUE] Wrong branch downloaded
[FIX]   • Application tries 'main' first, then 'master'
        • For other branches, manually visit:
          github.com/user/repo/archive/refs/heads/BRANCH.zip
```

---

## 🤝 CONTRIBUTING

```bash
$ git checkout -b feature/your-feature
$ git add .
$ git commit -m "feat: add your feature"
$ git push origin feature/your-feature
$ gh pr create --title "Your Feature"
```

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- 📖 Improve documentation

---

## 📜 LICENSE

```
MIT License

Copyright (c) 2025 Latiful Hassan Zihan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 👨‍💻 DEVELOPER

```bash
$ cat /etc/developer.conf

┌────────────────────────────────────────┐
│                                        │
│  Name:     Latiful Hassan Zihan       │
│  Role:     Full Stack Developer       │
│  Location: /dev/world                 │
│                                        │
│  Contact:                             │
│  ├─ Telegram: @alwayszihan            │
│  ├─ GitHub:   latifulhassanzihan      │
│  └─ Coffee:   buymeacoffee.com/        │
│              alwayszihan               │
│                                        │
└────────────────────────────────────────┘
```

### 📬 Connect With Me

```bash
$ curl -X GET https://t.me/alwayszihan
$ git clone https://github.com/latifulhassanzihan
$ coffee --buy https://buymeacoffee.com/alwayszihan
```

---

## ☕ SUPPORT

```
If you find this project useful, consider buying me a coffee!

    )  (
   (   ) )
    ) ( (
  _______)_
.-'---------|  
( C|/\/\/\/\/|
 '-./\/\/\/\/|
   '_________'
    '-------'

$ donate --url https://buymeacoffee.com/alwayszihan
```

---

## 📊 PROJECT STATUS

```bash
$ novera-dl --status --verbose

┌─────────────────────────────────────────┐
│ Status:        🟢 Active                │
│ Version:       v1.0.0                   │
│ Last Updated:  2025-10-15               │
│ Stability:     Stable                   │
│ Maintenance:   Active                   │
└─────────────────────────────────────────┘
```

---

## 🎯 ROADMAP

```bash
$ cat ROADMAP.md

[✓] v1.0.0 - Initial Release
    ├─ Core download functionality
    ├─ Terminal theme design
    └─ Basic error handling

[ ] v1.1.0 - Upcoming Features
    ├─ Custom branch selection
    ├─ Download history
    ├─ Dark/Light theme toggle
    └─ Batch download support

[ ] v2.0.0 - Future Plans
    ├─ API integration
    ├─ User accounts
    └─ Advanced filters
```

---

## 📞 FEEDBACK

```bash
$ novera-dl --feedback

Your feedback is valuable!

Report Issues:
$ curl -X POST https://github.com/latifulhassanzihan/novera-dl/issues

Send Message:
$ telegram --to @alwayszihan --message "Your feedback here"

Rate Project:
$ gh repo star latifulhassanzihan/novera-dl
```

---

<div align="center">

```
╔════════════════════════════════════════════════════════╗
║                                                        ║
║  Made with 💚 by Latiful Hassan Zihan                 ║
║                                                        ║
║  "Simplifying GitHub downloads, one ZIP at a time"    ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
```

**[⭐ Star this repo](https://github.com/latifulhassanzihan)** | **[🐛 Report Bug](https://github.com/latifulhassanzihan)** | **[💡 Request Feature](https://t.me/alwayszihan)**

---

```bash
$ echo "Happy Downloading! 🚀"
$ exit 0
```

</div>