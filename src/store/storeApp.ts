import { create } from "zustand";
import { signOut } from "../services/authService";

export type AppStore = {
  isLoggedIn: boolean;
  username: string;
  setLoggedIn: (loggedIn: boolean) => void;
  setUsername: (username: string) => void;
  logout: () => Promise<void>;
};

export const useAppStore = create<AppStore>((set) => ({
  isLoggedIn: false,
  username: "",

  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
  setUsername: (username) => set({ username }),
  logout: async () => {
    try {
      const result = await signOut  ();
      if (result.success) {
        set({ isLoggedIn: false, username: '' });
        console.log('Logout exitoso');
      } else {
        console.error('Error en logout:', result.error);
      }
    } catch (error) {
      console.error('Error en logout:', error);
    }
  },
}));
