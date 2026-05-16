import { useAuth } from "@clerk/expo";
import { Slot } from "expo-router";

export default function RootGroupLayout() {
  const { isLoaded } = useAuth();

  if (!isLoaded) return null;

  // Never Redirect to /(root)/(tabs) from here: this layout wraps (tabs), so a
  // signed-in Redirect runs on every tab screen and causes "Maximum update depth exceeded".
  return <Slot />;
}
