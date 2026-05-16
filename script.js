function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const shop = form.querySelectorAll('input[type="text"]')[1]?.value || "yo'q";
  const msg = form.querySelector('textarea').value || "yo'q";

  let text =
`🔥 YANGI LEAD (Billz POS)

👤 Ism: ${name}
📞 Telefon: ${phone}
🏪 Do‘kon: ${shop}
💬 Xabar: ${msg}`;

  let token = "8866953084:AAExmoeRPGBPUCrbNos-0fVR-FJW-GpgJL0";
  let chat_id = "5206100660";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: text
    })
  })
  .then(() => {
    alert(`Rahmat, ${name}! Tez orada bog'lanamiz.`);
    form.reset();
  })
  .catch(() => {
    alert("Xatolik yuz berdi!");
  });
}
// Smooth scroll to contact
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const shop = form.shop.value;
  
  // Show success message
  alert(`Rahmat, ${name}!\n\nSizga tez orada murojaat qilamiz.\n\nTelefon: ${phone}\nEmail: ${email}\nDo'kon: ${shop}`);
  
  // Reset form
  form.reset();
}
