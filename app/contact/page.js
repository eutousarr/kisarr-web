"use client";

import { useState } from "react";
export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2b59015e-8ca4-4f46-b3b2-9e496d43a182");
    formData.append("url", "ahoune-sane.netlify.app");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-[500px] flex flex-col items-center mt-12">
      <h2 className="text-3xl p-2 uppercase underline mb-6">Contact Admin</h2>
      <form
        onSubmit={onSubmit}
        className="p-2 w-5/12 mx-auto flex flex-col gap-3"
      >
        <input type="text" name="site" value="site du CEM" />

        <input
          className="p-2 text-gray-700"
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />
        <input
          className="p-2 text-gray-700"
          type="email"
          name="email"
          placeholder="Votre email"
          required
        />
        <textarea
          className="p-2 text-gray-700"
          name="message"
          placeholder="Votre message en moins de 250 mots"
          required
        ></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
