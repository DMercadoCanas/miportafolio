document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        formStatus.textContent = "¡Mensaje enviado con éxito!";
        form.reset();
      } else {
        formStatus.textContent =
          "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.";
      }
    } catch (error) {
      console.error("Error:", error);
      formStatus.textContent =
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.";
    }
  });
});
