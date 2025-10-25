// Replace these with your actual social media URLs
const socialLinks = {
    instagram: "https://www.instagram.com/techtrix_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "YOUR_LINKEDIN_URL", 
    facebook: "YOUR_FACEBOOK_URL",
    x: "https://x.com/techtrix_media",
    tiktok: "https://www.tiktok.com/@techtrix_media?is_from_webapp=1&sender_device=pc"
};

// Update link hrefs
document.querySelector('.instagram').href = socialLinks.instagram;
document.querySelector('.linkedin').href = socialLinks.linkedin;
document.querySelector('.facebook').href = socialLinks.facebook;
document.querySelector('.x').href = socialLinks.x;
document.querySelector('.tiktok').href = socialLinks.tiktok;

// Generate QR code
const qrElement = document.getElementById('qrcode');
const currentUrl = window.location.href;

new QRCode(qrElement, {
    text: currentUrl,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// Add default profile image if none exists
const profileImg = document.getElementById('profileImg');
profileImg.onerror = function() {
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNjY3RUVBIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+UHJvZmlsZSBJbWFnZTwvdGV4dD4KPC9zdmc+';
};