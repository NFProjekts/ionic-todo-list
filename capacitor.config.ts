import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nf.todos',
  appName: 'my-todo-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
