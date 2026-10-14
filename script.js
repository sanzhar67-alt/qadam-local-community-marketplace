const dayRange = document.querySelector("#days-range");

if (dayRange) {
  const dayOutput = document.querySelector("#days-output");
  const totalPrice = document.querySelector("#total-price");
  const currency = new Intl.NumberFormat("kk-KZ");

  const updatePrice = () => {
    const days = Number(dayRange.value);
    const dailyRate = Number(dayRange.dataset.pricePerDay);
    dayOutput.value = `${days} күн`;
    dayOutput.textContent = `${days} күн`;
    totalPrice.textContent = `${currency.format(days * dailyRate)} ₸`;
  };

  dayRange.addEventListener("input", updatePrice);
  updatePrice();
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Qadam сайтынан хабарлама: ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Аты: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:hello@qadam.kz?subject=${subject}&body=${body}`;
  });
}