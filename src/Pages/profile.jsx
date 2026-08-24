import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiSave,
  FiCamera,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import { useAuth } from "../context/Authcontext";

function Profile() {
  const { user, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    bio: user?.bio || "",
    profileImage: user?.profileImage || "",
  });

  const fileUpload = useRef(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: user.bio || "",
        profileImage: user.profileImage || "",
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please choose only an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setMessage("Image is too large. Choose one under 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, profileImage: reader.result }));
      setMessage("");
    };
    reader.readAsDataURL(file);
  }

  function handleSave(e) {
    e.preventDefault();
    if (!formData.name.trim()) {
      setMessage("Name is required.");
      return;
    }

    if (updateProfile) {
      updateProfile(formData);
    }

    setIsEditing(false);
    setMessage("Profile updated successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleCancel() {
    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      bio: user?.bio || "",
      profileImage: user?.profileImage || "",
    });
    setMessage("");
    setIsEditing(false);
  }

  function logOut() {
    if (signOut) {
      signOut();
    }
    navigate("/signin", { replace: true });
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-coffee-cream to-white px-4 py-8 sm:p-8">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-coffee-orange mb-6 text-center">
          My Profile
        </h1>

        <div className="bg-white border border-coffee-caramel rounded-2xl p-4 sm:p-6 shadow-sm w-full">
          {/* Avatar Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-coffee-orange flex items-center justify-center text-white text-2xl sm:text-3xl font-bold overflow-hidden mb-3">
              {(isEditing ? formData.profileImage : user.profileImage) ? (
                <img
                  src={isEditing ? formData.profileImage : user.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                user.name?.[0]?.toUpperCase() || <FiUser />
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-coffee-brown text-center break-words max-w-full">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center break-all">
              {user.email}
            </p>
          </div>

          {/* Notification Message */}
          {message && (
            <p className="text-center text-green-600 text-sm sm:text-base font-semibold mb-4 bg-green-50 py-2 px-3 rounded-xl border border-green-200">
              {message}
            </p>
          )}

          {/* EDIT FORM MODE */}
          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-coffee-brown">
                  Profile Picture
                </label>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="w-14 h-14 rounded-full bg-coffee-orange flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                    {formData.profileImage ? (
                      <img
                        src={formData.profileImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user.name?.[0]?.toUpperCase() || <FiUser />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => fileUpload.current.click()}
                    className="flex items-center gap-2 px-4 py-2 border border-coffee-caramel rounded-xl text-sm font-semibold hover:bg-orange-50 transition-colors"
                  >
                    <FiCamera /> Choose Photo
                  </button>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    ref={fileUpload}
                    onChange={handleImage}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-coffee-brown">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-coffee-caramel px-3 py-2 text-sm sm:text-base rounded-xl focus:outline-none focus:border-coffee-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-coffee-brown">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(+123 456-789)"
                  className="w-full border border-coffee-caramel px-3 py-2 text-sm sm:text-base rounded-xl focus:outline-none focus:border-coffee-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-coffee-brown">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your delivery address"
                  className="w-full border border-coffee-caramel px-3 py-2 text-sm sm:text-base rounded-xl focus:outline-none focus:border-coffee-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-coffee-brown">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us a little about yourself"
                  className="w-full border border-coffee-caramel px-3 py-2 text-sm sm:text-base rounded-xl focus:outline-none focus:border-coffee-orange"
                  rows="3"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 bg-coffee-orange text-white py-2.5 rounded-xl font-semibold hover:bg-coffee-brown transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FiSave /> Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex flex-1 items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FiX /> Cancel
                </button>
              </div>
            </form>
          ) : (
            /* VIEW MODE */
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiMail className="text-coffee-orange shrink-0" />
                <span className="break-all text-sm sm:text-base">{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-coffee-orange shrink-0" />
                <span className="text-sm sm:text-base">{user.phone || "No phone number added"}</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin className="text-coffee-orange shrink-0" />
                <span className="text-sm sm:text-base">{user.address || "No address added"}</span>
              </div>

              <div>
                <p className="text-sm font-bold text-coffee-brown mb-1">Bio</p>
                <p className="text-gray-600 text-sm sm:text-base break-words">
                  {user.bio || "No bio added yet."}
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="w-full flex items-center justify-center gap-2 border border-coffee-orange text-coffee-orange py-2.5 rounded-xl font-semibold hover:bg-coffee-orange hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FiEdit2 /> Edit Profile
                </button>
                <button
                  type="button"
                  onClick={logOut}
                  className="w-full flex items-center justify-center gap-2 border border-red-500 text-red-500 py-2.5 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <FiLogOut /> Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;