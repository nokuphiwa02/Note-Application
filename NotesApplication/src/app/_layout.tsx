
import { Stack } from "expo-router";
import { NavigationBar } from "expo-navigation-bar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
