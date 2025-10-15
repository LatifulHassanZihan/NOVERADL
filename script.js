function showMessage(message, type) {
            const statusEl = document.getElementById('statusMessage');
            statusEl.textContent = message;
            statusEl.className = 'status-message show ' + type;
        }

        function hideMessage() {
            const statusEl = document.getElementById('statusMessage');
            statusEl.classList.remove('show');
        }

        function showLoading(show) {
            const loadingEl = document.getElementById('loading');
            if (show) {
                loadingEl.classList.add('show');
            } else {
                loadingEl.classList.remove('show');
            }
        }

        function downloadRepo() {
            const input = document.getElementById('repoUrl');
            const url = input.value.trim();

            hideMessage();

            if (!url) {
                showMessage('$ Error: Please enter a GitHub repository URL', 'error');
                return;
            }

            const githubRegex = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w.-]+\/?$/;
            
            if (!githubRegex.test(url)) {
                showMessage('$ Error: Invalid GitHub repository URL format', 'error');
                return;
            }

            showLoading(true);

            const cleanUrl = url.replace(/\/$/, '');
            const zipUrl = cleanUrl + '/archive/refs/heads/main.zip';

            showMessage('$ Preparing download...', 'success');

            setTimeout(() => {
                const link = document.createElement('a');
                link.href = zipUrl;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                showLoading(false);
                showMessage('$ Download initiated! If download fails, the repo might use "master" branch instead of "main"', 'success');

                setTimeout(() => {
                    const masterZipUrl = cleanUrl + '/archive/refs/heads/master.zip';
                    const fallbackLink = document.createElement('a');
                    fallbackLink.href = masterZipUrl;
                    fallbackLink.download = '';
                    fallbackLink.style.display = 'none';
                    document.body.appendChild(fallbackLink);
                    document.body.removeChild(fallbackLink);
                }, 2000);
            }, 1000);
        }

        document.getElementById('repoUrl').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                downloadRepo();
            }
        });

        document.getElementById('repoUrl').addEventListener('focus', function() {
            hideMessage();
        });
