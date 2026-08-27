// =======================================================
// DIRECT WHATSAPP BOOKING SCRIPT FOR DMQ PHOTOGRAPHY
// =======================================================

document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents standard form submission reload

            // Get form values
            const name = document.getElementById('client-name').value;
            const email = document.getElementById('client-email').value;
            const serviceSelect = document.getElementById('service-needed');
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            const goals = document.getElementById('project-goals').value;

            // Your official business WhatsApp number
            const phoneNumber = "231555003920";

            // Format the message text for WhatsApp
            const message = `Hello DMQ Photography! I would like to book a session.%0A%0A` +
                            `*Name:* ${encodeURIComponent(name)}%0A` +
                            `*Email:* ${encodeURIComponent(email)}%0A` +
                            `*Service Needed:* ${encodeURIComponent(service)}%0A` +
                            `*Project Details:* ${encodeURIComponent(goals)}`;

            // Create the full WhatsApp link
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            // Open WhatsApp in a new tab/app immediately
            window.open(whatsappUrl, '_blank');
        });
    }
});