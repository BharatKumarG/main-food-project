import React, { createContext, useContext, useReducer, useEffect } from 'react';

+interface User {
+  id: number;
+  name: string;
+  email: string;
+  created_at: string;
+}
+
+interface AuthState {
+  user: User | null;
+  token: string | null;
+  loading: boolean;
+}
+
+type AuthAction =
+  | { type: 'SET_LOADING'; payload: boolean }
+  | { type: 'SET_USER'; payload: { user: User; token: string } }
+  | { type: 'LOGOUT' };
+
+const AuthContext = createContext<{
+  user: User | null;
+  token: string | null;
+  loading: boolean;
+  login: (email: string, password: string) => Promise<void>;
+  signup: (name: string, email: string, password: string) => Promise<void>;
+  logout: () => void;
+} | null>(null);
+
+const authReducer = (state: AuthState, action: AuthAction): AuthState => {
+  switch (action.type) {
+    case 'SET_LOADING':
+      return { ...state, loading: action.payload };
+    case 'SET_USER':
+      return {
+        ...state,
+        user: action.payload.user,
+        token: action.payload.token,
+        loading: false
+      };
+    case 'LOGOUT':
+      return { user: null, token: null, loading: false };
+    default:
+      return state;
+  }
+};
+
+// Xano Configuration
+const XANO_BASE_URL = 'https://your-workspace-id.us-east-1.xano.io/api:your-api-group-id';
+
+export function AuthProvider({ children }: { children: React.ReactNode }) {
+  const [state, dispatch] = useReducer(authReducer, {
+    user: null,
+    token: null,
+    loading: true
+  });
+
+  // Check for existing token on app load
+  useEffect(() => {
+    const token = localStorage.getItem('auth_token');
+    const userData = localStorage.getItem('user_data');
+    
+    if (token && userData) {
+      try {
+        const user = JSON.parse(userData);
+        dispatch({ type: 'SET_USER', payload: { user, token } });
+      } catch (error) {
+        localStorage.removeItem('auth_token');
+        localStorage.removeItem('user_data');
+      }
+    }
+    
+    dispatch({ type: 'SET_LOADING', payload: false });
+  }, []);
+
+  const login = async (email: string, password: string) => {
+    dispatch({ type: 'SET_LOADING', payload: true });
+    
+    try {
+      const response = await fetch(`${XANO_BASE_URL}/auth/login`, {
+        method: 'POST',
+        headers: {
+          'Content-Type': 'application/json',
+        },
+        body: JSON.stringify({ email, password }),
+      });
+
+      const data = await response.json();
+
+      if (!response.ok) {
+        throw new Error(data.message || 'Login failed');
+      }
+
+      // Store token and user data
+      localStorage.setItem('auth_token', data.authToken);
+      localStorage.setItem('user_data', JSON.stringify(data.user));
+      
+      dispatch({ 
+        type: 'SET_USER', 
+        payload: { user: data.user, token: data.authToken } 
+      });
+    } catch (error: any) {
+      dispatch({ type: 'SET_LOADING', payload: false });
+      throw error;
+    }
+  };
+
+  const signup = async (name: string, email: string, password: string) => {
+    dispatch({ type: 'SET_LOADING', payload: true });
+    
+    try {
+      const response = await fetch(`${XANO_BASE_URL}/auth/signup`, {
+        method: 'POST',
+        headers: {
+          'Content-Type': 'application/json',
+        },
+        body: JSON.stringify({ name, email, password }),
+      });
+
+      const data = await response.json();
+
+      if (!response.ok) {
+        throw new Error(data.message || 'Signup failed');
+      }
+
+      // Store token and user data
+      localStorage.setItem('auth_token', data.authToken);
+      localStorage.setItem('user_data', JSON.stringify(data.user));
+      
+      dispatch({ 
+        type: 'SET_USER', 
+        payload: { user: data.user, token: data.authToken } 
+      });
+    } catch (error: any) {
+      dispatch({ type: 'SET_LOADING', payload: false });
+      throw error;
+    }
+  };
+
+  const logout = () => {
+    localStorage.removeItem('auth_token');
+    localStorage.removeItem('user_data');
+    dispatch({ type: 'LOGOUT' });
+  };
+
+  return (
+    <AuthContext.Provider value={{
+      user: state.user,
+      token: state.token,
+      loading: state.loading,
+      login,
+      signup,
+      logout
+    }}>
+      {children}
+    </AuthContext.Provider>
+  );
+}
+
+export function useAuth() {
+  const context = useContext(AuthContext);
+  if (!context) {
+    throw new Error('useAuth must be used within an AuthProvider');
+  }
+  return context;
+}