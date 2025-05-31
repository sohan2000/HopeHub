
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.427dcbe5e0f04b85be24cccf68483879',
  appName: 'hopehub-welcome-portal',
  webDir: 'dist',
  server: {
    url: 'https://427dcbe5-e0f0-4b85-be24-cccf68483879.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    backgroundColor: "#FFFFFF"
  }
};

export default config;
