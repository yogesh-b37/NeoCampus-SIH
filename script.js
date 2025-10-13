// Import Firebase SDKs from CDN (for browser use)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEgQg1tElGhQ4pN1mQzTgR94YC2xrh0",
  authDomain: "login-b9564.firebaseapp.com",
  projectId: "login-b9564",
  storageBucket: "login-b9564.appspot.com",
  messagingSenderId: "880253936073",
  appId: "1:880253936073:web:58bc3f0ba9b9bb96f00818",
  measurementId: "G-32YMF6XP0W"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Handle form submission
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password) {
    alert("⚠️ Please fill in all fields");
    return;
  }

  try {
    // 👤 Create new user (or use email style name)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      ${username}@example.com, // fake email for simplicity
      password
    );

    const user = userCredential.user;

    // 💾 Store extra info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      role: role,
      createdAt: new Date().toISOString()
    });

    alert("✅ User registered and saved in Firebase!");
    form.reset();

  } catch (error) {
    // If user exists → try login
    if (error.code === "auth/email-already-in-use") {
      try {
        await signInWithEmailAndPassword(auth, ${username}@example.com, password);
        alert("✅ Login successful!");
      } catch (loginError) {
        alert("❌ " + loginError.message);
      }
    } else {
      alert("❌ " + error.message);
    }
  }
});