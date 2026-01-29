"use client";

export default function Home() {
  async function createPaste() {
    const textarea =
      document.getElementById("paste") as HTMLTextAreaElement;

    const res = await fetch("/api/paste", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: textarea.value,
      }),
    });

    const text = await res.text();
    console.log("RAW RESPONSE:", text);

    try {
      const data = JSON.parse(text);
      alert("Paste created with ID: " + data.id);
    } catch {
      alert("API is not returning JSON. Check console.");
    }
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Pastebin Lite</h1>

      <textarea
        id="paste"
        rows={8}
        style={{ width: "100%", marginBottom: "10px" }}
        placeholder="Paste text here"
      />

      <br />

      <button onClick={createPaste}>Create Paste</button>
    </main>
  );
}