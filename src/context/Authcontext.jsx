import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error loading user session:", error);
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper: Retrieve all registered users array
  const getRegisteredUsers = () => {
    try {
      const users = localStorage.getItem("registeredUsers");
      return users ? JSON.parse(users) : [];
    } catch {
      return [];
    }
  };

  function signup(email, password, name) {
    try {
      setLoading(true);
      setError(null);

      if (!email || !name || !password) {
        const msg = "All fields are required";
        setError(msg);
        setLoading(false);
        return { success: false, error: msg };
      }

      const cleanEmail = email.trim().toLowerCase();
      const users = getRegisteredUsers();

      // Check if user already exists
      const existingUser = users.find((u) => u.email === cleanEmail);
      if (existingUser) {
        const msg = "Email is already registered";
        setError(msg);
        setLoading(false);
        return { success: false, error: msg };
      }

      const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: cleanEmail,
        password: password,
        phone: "",
        address: "",
        bio: "",
        profileImage: "",
        created: new Date().toISOString(),
      };

      // Save user to array and set active session
      users.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setLoading(false);

      return { success: true, user: newUser };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Sign up failed";
      setError(errorMsg);
      setLoading(false);
      return { success: false, error: errorMsg };
    }
  }

  function signin(email, password) {
    try {
      setLoading(true);
      setError(null);

      const cleanEmail = email.trim().toLowerCase();
      const users = getRegisteredUsers();

      const matchedUser = users.find(
        (u) => u.email === cleanEmail && u.password === password
      );

      if (!matchedUser) {
        const msg = "Invalid email or password";
        setError(msg);
        setLoading(false);
        return { success: false, error: msg };
      }

      localStorage.setItem("user", JSON.stringify(matchedUser));
      setUser(matchedUser);
      setLoading(false);

      return { success: true, user: matchedUser };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Sign in failed";
      setError(errorMsg);
      setLoading(false);
      return { success: false, error: errorMsg };
    }
  }

  function signOut() {
    localStorage.removeItem("user");
    setUser(null);
  }

  function updateProfile(update) {
    if (!user) return { success: false, error: "Not Signed In" };

    try {
      const updatedUser = { ...user, ...update };

      // Update current session
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);

      // Update user inside registered array
      const users = getRegisteredUsers();
      const updatedUsersList = users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      );
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsersList));

      return { success: true, user: updatedUser };
    } catch (err) {
      return { success: false, error: "Failed to update profile" };
    }
  }

  const value = {
    user,
    loading,
    error,
    signin,
    signup,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return (
    context || {
      user: null,
      loading: false,
      error: null,
      signin: () => ({ success: false }),
      signup: () => ({ success: false }),
      signOut: () => {},
      updateProfile: () => ({ success: false }),
    }
  );
}