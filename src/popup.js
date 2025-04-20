document.addEventListener('DOMContentLoaded', function () {
    const report = `**Steps to reproduce:**

1.

**Observed result:**

**Expected result:**

**Repro rate:**
/4

**Devices used:**


**API:**


**Branch:**


**Build used:**
`;

    function copyReportToClipboard(text) {
        navigator.clipboard.writeText(text);
    }
    document
        .getElementById('copy-button')
        .addEventListener('click', function () {
            copyReportToClipboard(report);
        });
});
