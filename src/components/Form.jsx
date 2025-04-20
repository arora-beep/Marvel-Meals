import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Thanks, Hero! Your message is on its way to Nick Fury.");
      setFormData({ name: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your Marvel Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <textarea
        name="message"
        placeholder="Message for the Avengers HQ"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
