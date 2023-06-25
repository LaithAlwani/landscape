"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact us:</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ask a question"
        required></textarea>
      <button>Submit</button>
    </form>
  );
}
