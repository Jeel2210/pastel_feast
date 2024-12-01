// Initialize QRious
const qr = new QRious({
    element: document.getElementById('qr-code'),
    size: 250, // QR code size
});

// Generate QR Code for the single file
const filePath = 'file.pdf'; // Replace with the relative path to your file
qr.value = `${window.location.origin}/${filePath}`;
