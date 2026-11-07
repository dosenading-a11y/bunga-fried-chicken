// Bunga Fried Chicken - konfigurasi website
// Ganti nomor di bawah dengan nomor WhatsApp usaha dalam format internasional.
// Contoh: 6281234567890 (tanpa tanda +, spasi, atau angka 0 di depan).
const WHATSAPP_NUMBER = "6281234567890";

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Menu navigasi untuk layar ponsel
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Filter kategori menu
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const selected = button.dataset.filter;

      menuCards.forEach(card => {
        card.hidden = selected !== "all" && card.dataset.category !== selected;
      });
    });
  });

  // Membuat tautan WhatsApp dengan pesan otomatis
  function openWhatsApp(message) {
    if (WHATSAPP_NUMBER === "6281234567890") {
      alert("Silakan ganti nomor WhatsApp contoh pada file js/script.js dengan nomor usaha yang sebenarnya.");
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.querySelectorAll(".order-link").forEach(button => {
    button.addEventListener("click", () => {
      const product = button.dataset.product;
      const price = Number(button.dataset.price).toLocaleString("id-ID");
      openWhatsApp(`Halo Bunga Fried Chicken, saya ingin memesan ${product} (Rp${price}). Apakah menu tersedia?`);
    });
  });

  document.getElementById("contactOrder").addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp("Halo Bunga Fried Chicken, saya ingin bertanya tentang menu dan pemesanan.");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});

