import React, { useState } from 'react';
+import { motion, AnimatePresence } from 'framer-motion';
+import { X, Mail, Lock, User, Eye, EyeOff, Loader } from 'lucide-react';
+import { useAuth } from '../context/AuthContext';
+
+interface AuthModalProps {
+  onClose: () => void;
+}
+
+export function AuthModal({ onClose }: AuthModalProps) {
+  const [isLogin, setIsLogin] = useState(true);
+  const [showPassword, setShowPassword] = useState(false);
+  const [loading, setLoading] = useState(false);
+  const [formData, setFormData] = useState({
+    name: '',
+    email: '',
+    password: ''
+  });
+  const [errors, setErrors] = useState<Record<string, string>>({});
+  
+  const { login, signup } = useAuth();
+
+  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
+    const { name, value } = e.target;
+    setFormData(prev => ({ ...prev, [name]: value }));
+    // Clear error when user starts typing
+    if (errors[name]) {
+      setErrors(prev => ({ ...prev, [name]: '' }));
+    }
+  };
+
+  const validateForm = () => {
+    const newErrors: Record<string, string> = {};
+    
+    if (!formData.email) {
+      newErrors.email = 'Email is required';
+    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
+      newErrors.email = 'Please enter a valid email';
+    }
+    
+    if (!formData.password) {
+      newErrors.password = 'Password is required';
+    } else if (formData.password.length < 6) {
+      newErrors.password = 'Password must be at least 6 characters';
+    }
+    
+    if (!isLogin && !formData.name) {
+      newErrors.name = 'Name is required';
+    }
+    
+    setErrors(newErrors);
+    return Object.keys(newErrors).length === 0;
+  };
+
+  const handleSubmit = async (e: React.FormEvent) => {
+    e.preventDefault();
+    
+    if (!validateForm()) return;
+    
+    setLoading(true);
+    
+    try {
+      if (isLogin) {
+        await login(formData.email, formData.password);
+      } else {
+        await signup(formData.name, formData.email, formData.password);
+      }
+      onClose();
+    } catch (error: any) {
+      setErrors({ submit: error.message || 'Something went wrong. Please try again.' });
+    } finally {
+      setLoading(false);
+    }
+  };
+
+  const toggleMode = () => {
+    setIsLogin(!isLogin);
+    setErrors({});
+    setFormData({ name: '', email: '', password: '' });
+  };
+
+  return (
+    <motion.div
+      initial={{ opacity: 0, scale: 0.95 }}
+      animate={{ opacity: 1, scale: 1 }}
+      exit={{ opacity: 0, scale: 0.95 }}
+      className="relative"
+    >
+      {/* Header */}
+      <div className="flex items-center justify-between p-6 border-b">
+        <h2 className="text-2xl font-bold text-gray-900">
+          {isLogin ? 'Welcome Back!' : 'Create Account'}
+        </h2>
+        <button
+          onClick={onClose}
+          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
+        >
+          <X size={20} />
+        </button>
+      </div>
+
+      {/* Form */}
+      <form onSubmit={handleSubmit} className="p-6 space-y-4">
+        <AnimatePresence mode="wait">
+          {!isLogin && (
+            <motion.div
+              initial={{ opacity: 0, height: 0 }}
+              animate={{ opacity: 1, height: 'auto' }}
+              exit={{ opacity: 0, height: 0 }}
+              className="space-y-1"
+            >
+              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
+                Full Name
+              </label>
+              <div className="relative">
+                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
+                <input
+                  type="text"
+                  id="name"
+                  name="name"
+                  value={formData.name}
+                  onChange={handleInputChange}
+                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
+                    errors.name ? 'border-red-500' : 'border-gray-300'
+                  }`}
+                  placeholder="Enter your full name"
+                />
+              </div>
+              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
+            </motion.div>
+          )}
+        </AnimatePresence>
+
+        <div className="space-y-1">
+          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
+            Email Address
+          </label>
+          <div className="relative">
+            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
+            <input
+              type="email"
+              id="email"
+              name="email"
+              value={formData.email}
+              onChange={handleInputChange}
+              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
+                errors.email ? 'border-red-500' : 'border-gray-300'
+              }`}
+              placeholder="Enter your email"
+            />
+          </div>
+          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
+        </div>
+
+        <div className="space-y-1">
+          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
+            Password
+          </label>
+          <div className="relative">
+            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
+            <input
+              type={showPassword ? 'text' : 'password'}
+              id="password"
+              name="password"
+              value={formData.password}
+              onChange={handleInputChange}
+              className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
+                errors.password ? 'border-red-500' : 'border-gray-300'
+              }`}
+              placeholder="Enter your password"
+            />
+            <button
+              type="button"
+              onClick={() => setShowPassword(!showPassword)}
+              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
+            >
+              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
+            </button>
+          </div>
+          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
+        </div>
+
+        {errors.submit && (
+          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
+            <p className="text-red-600 text-sm">{errors.submit}</p>
+          </div>
+        )}
+
+        <motion.button
+          whileHover={{ scale: 1.02 }}
+          whileTap={{ scale: 0.98 }}
+          type="submit"
+          disabled={loading}
+          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
+        >
+          {loading ? (
+            <>
+              <Loader className="animate-spin" size={18} />
+              <span>{isLogin ? 'Signing In...' : 'Creating Account...'}</span>
+            </>
+          ) : (
+            <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
+          )}
+        </motion.button>
+      </form>
+
+      {/* Footer */}
+      <div className="px-6 pb-6 text-center">
+        <p className="text-gray-600">
+          {isLogin ? "Don't have an account? " : "Already have an account? "}
+          <button
+            onClick={toggleMode}
+            className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
+          >
+            {isLogin ? 'Sign Up' : 'Sign In'}
+          </button>
+        </p>
+      </div>
+    </motion.div>
+  );
+}