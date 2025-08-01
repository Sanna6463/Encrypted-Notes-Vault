function encryptNote() {
  const note = document.getElementById("note").value;
  const password = document.getElementById("password").value;

  if (!note || !password) {
    alert("Please enter both note and password.");
    return;
  }

  const encrypted = btoa(unescape(encodeURIComponent(note + "::" + password)));
  document.getElementById("output").innerText = "Encrypted Note:\n" + encrypted;
  document.getElementById("note").value = "";
}

function decryptNote() {
  const encrypted = document.getElementById("note").value;
  const password = document.getElementById("password").value;

  if (!encrypted || !password) {
    alert("Please enter encrypted text and password.");
    return;
  }

  try {
    const decrypted = decodeURIComponent(escape(atob(encrypted)));
    const [text, storedPassword] = decrypted.split("::");

    if (storedPassword === password) {
      document.getElementById("output").innerText = "Decrypted Note:\n" + text;
    } else {
      document.getElementById("output").innerText = "❌ Incorrect Password!";
    }
  } catch (e) {
    document.getElementById("output").innerText = "❌ Invalid Encrypted Note!";
  }
}
