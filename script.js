/**
 * Etwork - MikroTik Hotspot Script
 * Clean UI Design Concept
 */

// MikroTik Variables (will be replaced by router)
const mikrotikVars = {
    username: '$(username)',
    password: '$(password)',
    ip: '$(ip)',
    mac: '$(mac)',
    sessionTime: '$(session-time)',
    bytesIn: '$(bytes-in)',
    bytesOut: '$(bytes-out)',
    uptime: '$(uptime)',
    linkLogin: '$(link-login)',
    linkLogout: '$(link-logout)',
    linkStatus: '$(link-status)',
    linkRedirect: '$(link-redirect-alogin)'
};

// Format bytes to human readable
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0 || bytes === '0' || !bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const numBytes = parseFloat(bytes);
    if (isNaN(numBytes)) return bytes;

    const i = Math.floor(Math.log(numBytes) / Math.log(k));

    return parseFloat((numBytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Format time
function formatTime(seconds) {
    if (!seconds || seconds === '$(session-time)') return 'Unlimited';

    const numSeconds = parseInt(seconds);
    if (isNaN(numSeconds)) return seconds;

    const hours = Math.floor(numSeconds / 3600);
    const minutes = Math.floor((numSeconds % 3600) / 60);
    const secs = numSeconds % 60;

    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

// Get greeting based on time
function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
        return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
        return 'Good Afternoon';
    } else if (hours >= 17 && hours < 21) {
        return 'Good Evening';
    } else {
        return 'Good Night';
    }
}

// Get current time string
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours;

    return `${displayHours}:${minutes} ${period}`;
}

// Toast notification
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Update stats on status page
function updateStats() {
    const usernameEl = document.getElementById('user-name');
    const ipEl = document.getElementById('ip-address');
    const downloadEl = document.getElementById('download');
    const uploadEl = document.getElementById('upload');

    if (usernameEl && mikrotikVars.username && !mikrotikVars.username.includes('$')) {
        usernameEl.textContent = mikrotikVars.username;
    }

    if (ipEl && mikrotikVars.ip && !mikrotikVars.ip.includes('$')) {
        ipEl.textContent = mikrotikVars.ip;
    }

    if (downloadEl && mikrotikVars.bytesIn && !mikrotikVars.bytesIn.includes('$')) {
        downloadEl.textContent = formatBytes(mikrotikVars.bytesIn);
    }

    if (uploadEl && mikrotikVars.bytesOut && !mikrotikVars.bytesOut.includes('$')) {
        uploadEl.textContent = formatBytes(mikrotikVars.bytesOut);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
});

// Logout function for MikroTik
function doLogout() {
    if (mikrotikVars.linkLogout && !mikrotikVars.linkLogout.includes('$')) {
        /**
         * Etwork - MikroTik Hotspot Script
         * Clean UI Design Concept
         */

        // MikroTik Variables (will be replaced by router)
        const mikrotikVars = {
            username: '$(username)',
            password: '$(password)',
            ip: '$(ip)',
            mac: '$(mac)',
            sessionTime: '$(session-time)',
            bytesIn: '$(bytes-in)',
            bytesOut: '$(bytes-out)',
            uptime: '$(uptime)',
            linkLogin: '$(link-login)',
            linkLogout: '$(link-logout)',
            linkStatus: '$(link-status)',
            linkRedirect: '$(link-redirect-alogin)'
        };

        // Format bytes to human readable
        function formatBytes(bytes, decimals = 2) {
            if (bytes === 0 || bytes === '0' || !bytes) return '0 Bytes';

            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

            const numBytes = parseFloat(bytes);
            if (isNaN(numBytes)) return bytes;

            const i = Math.floor(Math.log(numBytes) / Math.log(k));

            return parseFloat((numBytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }

        // Format time
        function formatTime(seconds) {
            if (!seconds || seconds === '$(session-time)') return 'Unlimited';

            const numSeconds = parseInt(seconds);
            if (isNaN(numSeconds)) return seconds;

            const hours = Math.floor(numSeconds / 3600);
            const minutes = Math.floor((numSeconds % 3600) / 60);
            const secs = numSeconds % 60;

            if (hours > 0) {
                return `${hours}h ${minutes}m ${secs}s`;
            } else if (minutes > 0) {
                return `${minutes}m ${secs}s`;
            } else {
                return `${secs}s`;
            }
        }

        // Get greeting based on time
        function getGreeting() {
            const now = new Date();
            const hours = now.getHours();

            if (hours >= 5 && hours < 12) {
                return 'Good Morning';
            } else if (hours >= 12 && hours < 17) {
                return 'Good Afternoon';
            } else if (hours >= 17 && hours < 21) {
                return 'Good Evening';
            } else {
                return 'Good Night';
            }
        }

        // Get current time string
        function getCurrentTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const period = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours > 12 ? hours - 12 : hours;

            return `${displayHours}:${minutes} ${period}`;
        }

        // Toast notification
        function showToast(message, duration = 3000) {
            const toast = document.getElementById('toast');
            if (!toast) return;

            toast.textContent = message;
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }

        // Update stats on status page
        function updateStats() {
            const usernameEl = document.getElementById('user-name');
            const ipEl = document.getElementById('ip-address');
            const downloadEl = document.getElementById('download');
            const uploadEl = document.getElementById('upload');

            if (usernameEl && mikrotikVars.username && !mikrotikVars.username.includes('$')) {
                usernameEl.textContent = mikrotikVars.username;
            }

            if (ipEl && mikrotikVars.ip && !mikrotikVars.ip.includes('$')) {
                ipEl.textContent = mikrotikVars.ip;
            }

            if (downloadEl && mikrotikVars.bytesIn && !mikrotikVars.bytesIn.includes('$')) {
                downloadEl.textContent = formatBytes(mikrotikVars.bytesIn);
            }

            if (uploadEl && mikrotikVars.bytesOut && !mikrotikVars.bytesOut.includes('$')) {
                uploadEl.textContent = formatBytes(mikrotikVars.bytesOut);
            }
        }

        // Initialize on DOM ready
        document.addEventListener('DOMContentLoaded', () => {
            updateStats();
        });

        // Logout function for MikroTik
        function doLogout() {
            if (mikrotikVars.linkLogout && !mikrotikVars.linkLogout.includes('$')) {
                window.location.href = mikrotikVars.linkLogout;
            } else {
                window.location.href = 'logout.html';
            }
        }

        // Enforce Lowercase Input
        document.addEventListener('DOMContentLoaded', () => {
            const textInputs = document.querySelectorAll(
                'input[name="username"], input[name="password"], input[id="voucher-code"], input[type="text"], input[type="password"]'
            );

            textInputs.forEach(input => {
                input.addEventListener('input', function () {
                    this.value = this.value.toLowerCase();
                });
            });
        });